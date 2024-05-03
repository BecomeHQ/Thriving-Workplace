import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

exports.sectionBenefitLastContainerIx = () => {
  const tl = gsap.timeline({
    defaults: {
      duration: 0.7,
      opacity: 0,
      ease: 'power3.out',
    },
    scrollTrigger: {
      trigger: '.benefits_why-wrapper',
      start: 'top 70%',
      //   markers: true,
    },
  })

  let staggerChange = '<'
  // Let animation run continously on Mobile
  if (window.innerWidth < 500) {
    staggerChange = '>'
  }

  tl.from('.benefits_why-wrapper h2', { y: '20px' })
    .from('.benefits_col-2', { y: '20px' }, '<40%')
    .from(
      '.benefits_col-1 div',
      { y: '-20px', stagger: { amount: 0.6 } },
      '<40%'
    )
    .from(
      '.benefits_col-3 div',
      { y: '-20px', stagger: { amount: 0.6 } },
      staggerChange
    )
}
