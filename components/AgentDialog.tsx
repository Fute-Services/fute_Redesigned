'use client'

import { useEffect, useRef, useState } from 'react'
import { useAgent } from './AgentProvider'
import { VOICEOVER_SRC } from './media'

const CHOICES = [
  ['location', 'Why this place?'],
  ['spaces', 'What suits me?'],
  ['next', 'What next?'],
] as const

type SpeechRecognitionLike = {
  lang: string
  interimResults: boolean
  continuous: boolean
  start: () => void
  stop: () => void
  onstart: (() => void) | null
  onend: (() => void) | null
  onerror: (() => void) | null
  onresult: ((event: { results: { [index: number]: { [index: number]: { transcript: string } } } }) => void) | null
}

export default function AgentDialog() {
  const { answer, setAnswerKey } = useAgent()
  const dialogRef = useRef<HTMLDialogElement>(null)

  /* Voice input concept — recognition stays in the browser, nothing is stored. */
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null)
  const [listening, setListening] = useState(false)
  const [voiceStatus, setVoiceStatus] = useState('Voice input concept — no audio is stored.')
  const [transcript, setTranscript] = useState('')

  /* Supplied narration. */
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [clock, setClock] = useState('Voiceover ready')

  useEffect(() => {
    const w = window as unknown as {
      SpeechRecognition?: new () => SpeechRecognitionLike
      webkitSpeechRecognition?: new () => SpeechRecognitionLike
    }
    const Recognition = w.SpeechRecognition || w.webkitSpeechRecognition
    if (!Recognition) return

    const recognition = new Recognition()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.continuous = false
    recognition.onstart = () => {
      setListening(true)
      setVoiceStatus('Listening — speak your FUTÉ question.')
    }
    recognition.onend = () => setListening(false)
    recognition.onerror = () => setVoiceStatus('Voice input is unavailable. No audio was stored.')
    recognition.onresult = (event) => {
      const heard = event.results[0][0].transcript
      setTranscript('You said: “' + heard + '”')
      setVoiceStatus('Voice received locally — select a pathway to continue.')
    }
    recognitionRef.current = recognition

    return () => {
      recognition.onstart = recognition.onend = recognition.onerror = null
      recognition.onresult = null
    }
  }, [])

  const toggleVoice = () => {
    const recognition = recognitionRef.current
    if (!recognition) {
      setVoiceStatus('Voice input needs a compatible browser. No audio is stored in this prototype.')
      return
    }
    try {
      recognition.start()
    } catch {
      recognition.stop()
    }
  }

  const toggleVoiceover = async () => {
    const audio = audioRef.current
    if (!audio) return
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
      setClock('Playback unavailable')
    }
  }

  return (
    <>
      <button
        className="agent-launch"
        type="button"
        aria-haspopup="dialog"
        aria-controls="fute-agent-dialog"
        onClick={() => dialogRef.current?.showModal?.()}
      >
        <span className="launch-orb" aria-hidden="true"></span>
        <span>Ask FUTÉ</span>
      </button>

      <dialog className="agent-dialog" id="fute-agent-dialog" ref={dialogRef} aria-labelledby="agent-dialog-title">
        <div className="agent-dialog-glass">
          <div className="agent-dialog-head">
            <div>
              <span className="tag">FUTÉ AI / concept prototype</span>
              <h2 id="agent-dialog-title">
                Your next
                <br />
                buyer question.
              </h2>
            </div>
            <button
              className="agent-close"
              type="button"
              aria-label="Close FUTÉ AI assistant"
              onClick={() => dialogRef.current?.close()}
            >
              ×
            </button>
          </div>
          <p className="agent-dialog-intro">A calm way to explore approved project information.</p>
          <div className="agent-dialog-options">
            {CHOICES.map(([key, label]) => (
              <button key={key} type="button" onClick={() => setAnswerKey(key)}>
                {label}
              </button>
            ))}
          </div>

          <div className={listening ? 'voice-agent listening' : 'voice-agent'}>
            <button className="voice-toggle" type="button" aria-pressed={listening} onClick={toggleVoice}>
              <span className="voice-mic" aria-hidden="true">
                ●
              </span>
              <span>Talk to FUTÉ</span>
            </button>
            <div className="voice-bars" aria-hidden="true">
              {Array.from({ length: 7 }, (_, i) => (
                <i key={i}></i>
              ))}
            </div>
            <p className="voice-status" aria-live="polite">
              {voiceStatus}
            </p>
            <p className="voice-transcript" aria-live="polite">
              {transcript}
            </p>
          </div>

          <div className="brand-audio">
            <div className="brand-audio-meta">
              <span>FUTÉ introduction</span>
              <span className="audio-clock">{clock}</span>
            </div>
            <button
              className={playing ? 'voiceover-toggle is-playing' : 'voiceover-toggle'}
              type="button"
              aria-controls="fute-voiceover"
              aria-pressed={playing}
              onClick={toggleVoiceover}
            >
              <span className="voiceover-icon" aria-hidden="true">
                {playing ? 'Ⅱ' : '▶'}
              </span>
              <span>{playing ? 'Pause FUTÉ introduction' : 'Play FUTÉ introduction'}</span>
              <span className="voiceover-wave" aria-hidden="true">
                {Array.from({ length: 9 }, (_, i) => (
                  <i key={i}></i>
                ))}
              </span>
            </button>
            <audio
              id="fute-voiceover"
              ref={audioRef}
              preload="metadata"
              src={VOICEOVER_SRC}
              onTimeUpdate={(e) => {
                const audio = e.currentTarget
                if (Number.isFinite(audio.duration)) {
                  setClock(Math.floor(audio.currentTime) + 's / ' + Math.ceil(audio.duration) + 's')
                }
              }}
              onEnded={(e) => {
                e.currentTarget.currentTime = 0
                setPlaying(false)
                setClock('Voiceover ready')
              }}
            />
          </div>

          <div className="agent-dialog-reply" aria-live="polite">
            {answer}
          </div>
          <p className="agent-dialog-note">
            Prototype interface only — connect it to approved project data before production.
          </p>
        </div>
      </dialog>
    </>
  )
}
