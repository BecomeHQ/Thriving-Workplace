import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

exports.sectionCertIx = () => {
  const sectionCertTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_cert-logos',
      start: 'top 60%',
    },
  })
  const rocketSvgLine = document.getElementById('rocket-svg-2-line')
  const rocketSvgLineLength = rocketSvgLine.getTotalLength()
  const rocketSvgRocket = document.getElementById('rocket-svg-2-rocket')
  const rocketSvgRocketLength = rocketSvgRocket.getTotalLength()

  sectionCertTl
    .from('.section_cert-logos h2', { opacity: 0, y: 40, duration: 1.25 })
    .from(
      '.cert-logo, .button-custom',
      {
        scale: 0.6,
        opacity: 0,
        stagger: { from: 'random', amount: 2 },
      },
      '<30%'
    )
    .from(rocketSvgLine, {
      strokeDashoffset: -rocketSvgLineLength,
      duration: 2,
      ease: 'power1.out',
    })
    .from(rocketSvgRocket, {
      strokeDashoffset: -rocketSvgRocketLength,
      duration: 1,
      ease: 'power2.out',
    })
}
