import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Types and erases each phrase in turn.
 * With prefers-reduced-motion it simply returns the first phrase (no animation).
 * `words` must be a stable array (define it outside the component).
 */
export default function useTypewriter(words) {
  const reduce = useReducedMotion()
  const [text, setText] = useState('')

  useEffect(() => {
    if (reduce) return undefined

    let wordIndex = 0
    let charIndex = 0
    let deleting = false
    let timer

    const tick = () => {
      const word = words[wordIndex]

      if (!deleting) {
        charIndex += 1
        setText(word.slice(0, charIndex))

        if (charIndex === word.length) {
          deleting = true
          timer = setTimeout(tick, 1700)
          return
        }
        timer = setTimeout(tick, 75)
      } else {
        charIndex -= 1
        setText(word.slice(0, charIndex))

        if (charIndex === 0) {
          deleting = false
          wordIndex = (wordIndex + 1) % words.length
          timer = setTimeout(tick, 320)
          return
        }
        timer = setTimeout(tick, 34)
      }
    }

    timer = setTimeout(tick, 700)
    return () => clearTimeout(timer)
  }, [words, reduce])

  return reduce ? words[0] : text
}
