import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

exports.formSvgIx = () => {
  const formSvgTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_form',
      start: 'top 60%',
    },
  })

  formSvgTl.from('[svg-name="form-circle"], .form-svg-circle, .circle-form', {
    scale: 0,
    transformOrigin: '50% 50%',
    stagger: { from: 'random', amount: 1 },
  })
  // .from('.form-svg-circle', { y: 0, x: '50%' }, '<')

  const formContentTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.form_col-1',
      start: 'top 75%',
      end: 'bottom 100%',
      scrub: 1,
    },
  })

  formContentTl.from('.form_col-1 .text-color-alternate .char', {
    color: '#fff',
    stagger: { each: 1 },
    ease: 'power2.out',
  })
}
