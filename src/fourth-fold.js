import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

exports.fourthFoldIx = () => {
  const fourthFoldTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_benchmark',
      start: 'top 60%',
    },
  })

  fourthFoldTl
    .from('.benchmark-left h2', { opacity: 0, y: -20, duration: 0.5 })
    .from(
      '.benchmark-left .line',
      {
        opacity: 0,
        y: -20,
        duration: 0.6,
        stagger: { amount: 0.5 },
      },
      '<70%'
    )
    .from(
      '.benchmark-left .button',
      { opacity: 0, y: -20, duration: 0.5 },
      '<70%'
    )
    .from(
      '[path-name="rectangle"]',
      {
        width: 0,
        duration: 2,
        ease: 'power3.out',
      },
      0
    )
}
