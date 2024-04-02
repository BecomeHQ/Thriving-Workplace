import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

exports.approachIx = () => {
  const textProgressBars = document.querySelectorAll('[text-block-progress]')

  textProgressBars.forEach((itemProgress) => {
    const approachTl = gsap.timeline({
      scrollTrigger: {
        trigger: itemProgress,
        start: 'top center',
        onLeaveBack: () => {
          approachTl.reverse()
        },
      },
    })

    approachTl.from(itemProgress, { width: 0, duration: 1 })
  })
}
