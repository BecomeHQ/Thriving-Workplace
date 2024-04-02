console.log('TWC World')

import { gsap } from 'gsap'

import { buttonHoverInteraction } from './buttonHover'
import { secondFoldIx } from './second-fold'
import { rocketIx } from './rocket'
import { fourthFoldIx } from './fourth-fold'
import { formSvgIx } from './form-svg'
import { sectionCertIx } from './section-cert'
import { sectionStepsIx } from './section-step'
import { preloaderIx } from './preloader'
import { benefitsIx } from './section-benefits'
import { approachIx } from './section-approach'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.set('.page-wrapper', {
    opacity: 1,
  })
  // Split Type
  let typeSplit

  function runSplitType() {
    typeSplit = new SplitType('[text-split]', {
      types: 'lines, words, chars',
      tagName: 'span',
    })
  }

  runSplitType()

  //Run the code when window width changes
  let windowWidth = window.innerWidth
  window.addEventListener('resize', function () {
    if (windowWidth !== window.innerWidth) {
      windowWidth = window.innerWidth
      typeSplit.revert()
      runSplitType()
    }
  })

  /**
   * Hover Ix on links & buttons START
   */

  // runs only on desktop

  if (window.innerWidth > 991) {
    buttonHoverInteraction()
  }

  /**
   * Hover Ix on links & buttons END
   */

  // Keep all functions in order to avoid conflicts between multiple independent scrolltriggers

  secondFoldIx()
  approachIx()
  rocketIx()

  fourthFoldIx()

  preloaderIx()
  benefitsIx()
  sectionStepsIx()
  sectionCertIx()
  formSvgIx()
})
