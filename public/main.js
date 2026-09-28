/* Plain-browser behaviour for the FUTÉ site: nav, scroll reveals, cursor aura, Ask FUTÉ dialog. */
const $ = (s, r = document) => r.querySelector(s)
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s))
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches

/* Nav */
const nav = $('.nav')
const toggle = $('.nav-toggle')
const setOpen = (open) => {
  nav.classList.toggle('is-open', open)
  toggle.setAttribute('aria-expanded', open)
  toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu')
  document.body.style.overflow = open ? 'hidden' : ''
}
const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 80)
onScroll()
addEventListener('scroll', onScroll, { passive: true })
toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')))
addEventListener('keydown', (e) => e.key === 'Escape' && setOpen(false))
matchMedia('(min-width:901px)').addEventListener('change', (e) => e.matches && setOpen(false))
/* A native hash jump is swallowed by the body lock, so close first, then scroll. */
$$('.nav a').forEach((a) =>
  a.addEventListener('click', (e) => {
    if (!nav.classList.contains('is-open')) return
    e.preventDefault()
    const href = a.getAttribute('href')
    setOpen(false)
    $(href)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
    history.replaceState(null, '', href)
  }),
)

/* Scroll reveals */
const blocks = $$('.reveal-block')
if (reduce || !('IntersectionObserver' in window)) {
  blocks.forEach((el) => el.classList.add('in-view'))
} else {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in-view')
          io.unobserve(en.target)
        }
      }),
    { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
  )
  blocks.forEach((el) => io.observe(el))
}

/* Cursor aura */
const aura = $('.cursor-aura')
if (aura && matchMedia('(pointer: fine)').matches && !reduce) {
  addEventListener(
    'pointermove',
    (e) => {
      aura.style.left = e.clientX + 'px'
      aura.style.top = e.clientY + 'px'
      aura.classList.add('visible')
    },
    { passive: true },
  )
  addEventListener('pointerleave', () => aura.classList.remove('visible'))
  $$('a,button,summary,.triad-cell,.clients .logo-sheets figure').forEach((el) => {
    el.addEventListener('pointerenter', () => aura.classList.add('action'))
    el.addEventListener('pointerleave', () => aura.classList.remove('action'))
  })
}

/* Ask FUTÉ: keyword routing to approved answers, nothing leaves the browser. */
const ANSWERS = {
  location: 'Begin with context. Explore the location through the life it makes possible.',
  spaces: 'Move into what matters: approved spaces, plans and options.',
  next: 'Compare with clarity. Prepare the next useful sales conversation.',
  contact: 'Write to Soma@futeservices.com or Payel@futeservices.com and the FUTÉ team will reply about your project.',
  fallback: 'I can help with the place, the spaces and options, or what to do next. Pick one above, or ask about contact.',
}
const TOPICS = [
  ['contact', /contact|email|mail|reach|call|phone|talk to|enquir|inquir|price|cost|quote/i],
  ['location', /where|locat|place|area|neighbo|why/i],
  ['spaces', /space|plan|option|room|suit|fit|size|unit|home|apartment|layout/i],
  ['next', /next|start|begin|step|sales|compare|how/i],
]
const route = (text) => TOPICS.find(([, re]) => re.test(text))?.[0] ?? 'fallback'
const answer = (key) => $$('[data-reply]').forEach((el) => (el.textContent = ANSWERS[key] ?? ANSWERS.location))
$$('[data-answer]').forEach((b) => b.addEventListener('click', () => answer(b.dataset.answer)))

const dialog = $('#fute-agent-dialog')
$('.agent-launch').addEventListener('click', () => dialog.showModal?.())
$('.agent-close').addEventListener('click', () => dialog.close())

const transcript = $('.voice-transcript')
const status = $('.voice-status')
const input = $('.agent-ask input')
$('.agent-ask').addEventListener('submit', (e) => {
  e.preventDefault()
  const q = input.value.trim()
  if (!q) return
  answer(route(q))
  transcript.textContent = 'You asked: “' + q + '”'
  input.value = ''
})

/* Voice input concept, recognition stays in the browser, nothing is stored. */
const voiceBox = $('.voice-agent')
const voiceBtn = $('.voice-toggle')
const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition
if (Recognition) {
  recognition = new Recognition()
  recognition.lang = 'en-US'
  recognition.interimResults = false
  recognition.continuous = false
  recognition.onstart = () => {
    voiceBox.classList.add('listening')
    voiceBtn.setAttribute('aria-pressed', 'true')
    status.textContent = 'Listening. Speak your FUTÉ question.'
  }
  recognition.onend = () => {
    voiceBox.classList.remove('listening')
    voiceBtn.setAttribute('aria-pressed', 'false')
  }
  recognition.onerror = () => (status.textContent = 'Voice input is unavailable. No audio was stored.')
  recognition.onresult = (e) => {
    const heard = e.results[0][0].transcript
    transcript.textContent = 'You said: “' + heard + '”'
    status.textContent = 'Voice received locally.'
    answer(route(heard))
  }
}
voiceBtn.addEventListener('click', () => {
  if (!recognition) {
    status.textContent = 'Voice input needs a compatible browser. No audio is stored in this prototype.'
    return
  }
  try {
    recognition.start()
  } catch {
    recognition.stop()
  }
})

/* Supplied narration */
const audio = $('#fute-voiceover')
const vo = $('.voiceover-toggle')
const clock = $('.audio-clock')
const setPlaying = (on) => {
  vo.classList.toggle('is-playing', on)
  vo.setAttribute('aria-pressed', on)
  $('.voiceover-icon', vo).textContent = on ? 'Ⅱ' : '▶'
  $('span:nth-child(2)', vo).textContent = on ? 'Pause FUTÉ introduction' : 'Play FUTÉ introduction'
}
vo.addEventListener('click', async () => {
  if (!audio.paused) {
    audio.pause()
    setPlaying(false)
    return
  }
  setPlaying(true)
  try {
    await audio.play()
  } catch {
    setPlaying(false)
    clock.textContent = 'Playback unavailable'
  }
})
audio.addEventListener('timeupdate', () => {
  if (Number.isFinite(audio.duration))
    clock.textContent = Math.floor(audio.currentTime) + 's / ' + Math.ceil(audio.duration) + 's'
})
audio.addEventListener('ended', () => {
  audio.currentTime = 0
  setPlaying(false)
  clock.textContent = 'Voiceover ready'
})
