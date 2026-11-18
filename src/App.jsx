import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, LayoutGroup, MotionConfig, motion } from 'framer-motion'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)

function IntroAnimation({ onComplete }) {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const expandTimer = setTimeout(() => setExpanded(true), 800)
    const finishTimer = setTimeout(onComplete, 2300)

    return () => {
      clearTimeout(expandTimer)
      clearTimeout(finishTimer)
    }
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#040c08]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        layoutId="anusha-name"
        transition={{ layout: { type: 'spring', stiffness: 65, damping: 18 } }}
        animate={{ fontSize: expanded ? 'clamp(2.5rem, 6vw, 5rem)' : '5rem' }}
        className="whitespace-nowrap font-extrabold tracking-tight text-[#effaf3]"
      >
        {expanded ? (
          <>
            Anusha A <span style={{ color: '#4ade80' }}>Shet</span>
          </>
        ) : (
          'AS'
        )}
      </motion.h1>
    </motion.div>
  )
}

function Portfolio() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  // Skip the intro entirely for people who prefer reduced motion.
  const [introFinished, setIntroFinished] = useState(prefersReducedMotion)
  const finishIntro = useCallback(() => setIntroFinished(true), [])

  return (
    <MotionConfig reducedMotion="user">
      <LayoutGroup>
        <AnimatePresence mode="sync">
          {!introFinished ? (
            <IntroAnimation key="intro" onComplete={finishIntro} />
          ) : (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Portfolio />
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </MotionConfig>
  )
}
