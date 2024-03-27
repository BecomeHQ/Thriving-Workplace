console.log('TWC World')

import { buttonHoverInteraction } from './buttonHover'
import { secondFoldIx } from './second-fold'
import { rocketIx } from './rocket'
import { fourthFoldIx } from './fourth-fold'
import { formSvgIx } from './form-svg'
import { sectionCertIx } from './section-cert'
import { sectionStepsIx } from './section-step'

window.addEventListener('DOMContentLoaded', (event) => {
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

  /**
   * 2nd Fold Ix Start
   */

  secondFoldIx()

  /**
   * 2nd Fold Ix End
   */

  /**
   * Rocket Iteraction START
   */

  rocketIx()

  /**
   * Rocket Iteraction END
   */

  /**
   * Fourth Fold Ix START
   */

  fourthFoldIx()

  /**
   * Fourth Fold Ix END
   */

  /**
   * Form Svg Ix START
   */

  formSvgIx()

  /**
   * Form Svg Ix END
   */

  sectionCertIx()
  sectionStepsIx()
})
