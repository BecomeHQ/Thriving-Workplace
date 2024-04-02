import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

exports.rocketIx = () => {
  const rocketTriggers = document.querySelectorAll('.rocket-svg')

  rocketTriggers.forEach((rocketTrigger) => {
    const rocketPath = rocketTrigger.querySelector('[svg-name="rocket"]')
    const rocketTl = gsap.timeline({
      scrollTrigger: {
        trigger: rocketTrigger,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        refreshPriority: 1,
      },
    })

    rocketTl.to(rocketPath, { rotation: 360, transformOrigin: '50% 50%' })
  })
}
