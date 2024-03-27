import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

exports.sectionStepsIx = () => {
  const sectionStepsTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.steps-wrapper',
      start: 'top 60%',
    },
  })

  sectionStepsTl
    .from('.steps-title h2 .line', {
      opacity: 0,
      y: -20,
      stagger: { amount: 0.5 },
    })
    .from(
      '.steps-title .text-size-large',
      {
        opacity: 0,
        y: -20,
        stagger: { amount: 0.5 },
      },
      '<40%'
    )
    .from(
      '.step-item',
      {
        opacity: 0,
        y: -20,
        stagger: { amount: 1 },
      },
      '<80%'
    )
}
