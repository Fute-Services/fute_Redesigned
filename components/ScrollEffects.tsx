'use client'

import { useEffect } from 'react'

/* Scroll-led reveals and the fine-pointer cursor aura — both reduced-motion safe. */
export default function ScrollEffects() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const blocks = Array.from(document.querySelectorAll('.reveal-block'))

    if (reduce || !('IntersectionObserver' in window)) {
      blocks.forEach((el) => el.classList.add('in-view'))
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
      )
      blocks.forEach((el) => observer.observe(el))
      return () => observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = matchMedia('(pointer: fine)').matches
    if (!fine || reduce) return

    const aura = document.querySelector<HTMLElement>('.cursor-aura')
    if (!aura) return

    const move = (e: PointerEvent) => {
      aura.style.left = e.clientX + 'px'
      aura.style.top = e.clientY + 'px'
      aura.classList.add('visible')
    }
    const leave = () => aura.classList.remove('visible')
    const enterAction = () => aura.classList.add('action')
    const leaveAction = () => aura.classList.remove('action')

    addEventListener('pointermove', move, { passive: true })
    addEventListener('pointerleave', leave)

    const targets = Array.from(
      document.querySelectorAll('a,button,summary,.triad-cell,.clients .logo-sheets figure'),
    )
    targets.forEach((el) => {
      el.addEventListener('pointerenter', enterAction)
      el.addEventListener('pointerleave', leaveAction)
    })

    return () => {
      removeEventListener('pointermove', move)
      removeEventListener('pointerleave', leave)
      targets.forEach((el) => {
        el.removeEventListener('pointerenter', enterAction)
        el.removeEventListener('pointerleave', leaveAction)
      })
    }
  }, [])

  return null
}
