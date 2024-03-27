import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

exports.secondFoldIx = () => {
  const secondFoldTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_cert',
      start: 'top 60%',
    },
  })

  const middlePath = document.querySelector('[position="middle"]')
  const middlePathLength = middlePath.getTotalLength()
  const leftBottomPath = document.querySelector('[position="left-bottom-line"]')
  const leftBottomPathLength = leftBottomPath.getTotalLength()
  const rightBottomPath = document.querySelector(
    '[position="right-bottom-line"]'
  )
  const rightBottomPathLength = rightBottomPath.getTotalLength()

  // Get all top left curves SVGs
  const leftCurve1 = document.querySelector('[position="left-curve-1"]')
  const leftCurve1Length = leftCurve1.getTotalLength()
  const leftCurve2 = document.querySelector('[position="left-curve-2"]')
  const leftCurve2Length = leftCurve2.getTotalLength()
  const leftCurve3 = document.querySelector('[position="left-curve-3"]')
  const leftCurve3Length = leftCurve3.getTotalLength()

  // Get all top right curves SVGs
  const rightCurve1 = document.querySelector('[position="right-curve-1"]')
  const rightCurve1Length = rightCurve1.getTotalLength()
  const rightCurve2 = document.querySelector('[position="right-curve-2"]')
  const rightCurve2Length = rightCurve2.getTotalLength()
  const rightCurve3 = document.querySelector('[position="right-curve-3"]')
  const rightCurve3Length = rightCurve3.getTotalLength()

  const svgTl = gsap.timeline({
    defaults: { duration: 0.5, ease: 'power2.out' },
  })
  svgTl
    .from(middlePath, { strokeDashoffset: -middlePathLength })
    .from(leftBottomPath, { strokeDashoffset: -leftBottomPathLength }, '<60%')
    .from(rightBottomPath, { strokeDashoffset: -rightBottomPathLength }, '<')
    .from(leftCurve1, { strokeDashoffset: -leftCurve1Length })
    .from(rightCurve1, { strokeDashoffset: -rightCurve1Length }, '<')
    .from(leftCurve3, { strokeDashoffset: -leftCurve3Length })
    .from(rightCurve3, { strokeDashoffset: -rightCurve3Length }, '<')
    .from(leftCurve2, { strokeDashoffset: -leftCurve2Length })
    .from(rightCurve2, { strokeDashoffset: -rightCurve2Length }, '<')

  secondFoldTl
    .from('.cert_content_title .line', {
      opacity: 0,
      y: -20,
      stagger: { amount: 0.3 },
    })
    .from(
      '[second-fold-para] .line',
      {
        opacity: 0,
        y: -20,
        stagger: { amount: 0.3 },
      },
      '<45%'
    )
    .from(
      '[button-wrapper]',
      {
        opacity: 0,
        y: -20,
        stagger: { amount: 0.3 },
      },
      '<45%'
    )
    .from(
      '[bubble-wrapper] .circle',
      {
        opacity: 0,
        scale: 0.7,
        stagger: { from: 'random', amount: 1 },
      },
      '<45%'
    )
    .add(svgTl, '<50%')
}
