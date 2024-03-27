import { gsap } from 'gsap'

exports.buttonHoverInteraction = function () {
  gsap.set('[button-clip-wrapper]', {
    xPercent: -50,
    yPercent: -50,
    scale: 0,
    opacity: 0,
  })
  // Get all buttons and elements and call the moveAndScale function for each pair
  let buttons = document.querySelectorAll('[button]')
  let buttonClips = document.querySelectorAll('[button-clip-wrapper]')

  // Function to handle movement within each button
  function moveAndScale(button, buttonClip) {
    function calculateScaleValue() {
      let buttonRect = button.getBoundingClientRect()
      // Calculate Scale Value for each button Start
      let buttonCenterX = buttonRect.left + buttonRect.width / 2
      let buttonCenterY = buttonRect.top + buttonRect.height / 2

      Math.getDistance = function (x1, y1, x2, y2) {
        let xs = x2 - x1,
          ys = y2 - y1
        xs *= xs
        ys *= ys
        return Math.sqrt(xs + ys)
      }

      let radius = Math.getDistance(
        buttonRect.left,
        buttonRect.top,
        buttonCenterX,
        buttonCenterY
      )
      let fullWidth = radius * 2
      let percentIncrease = fullWidth / 100
      return percentIncrease

      // Calculate Scale Value for each button End
    }

    let xTo = gsap.quickTo(buttonClip, 'x', { duration: 0.1, ease: 'power3' })
    let yTo = gsap.quickTo(buttonClip, 'y', { duration: 0.1, ease: 'power3' })

    function moveHandler(e) {
      let buttonRect2 = button.getBoundingClientRect()
      let mouseX = e.clientX - buttonRect2.left
      let mouseY = e.clientY - buttonRect2.top

      // Boundary conditions
      let maxX = button.offsetWidth
      let maxY = button.offsetHeight

      // Ensure the mouse position stays within the bounds of the button
      mouseX = Math.max(0, Math.min(mouseX, maxX))
      mouseY = Math.max(0, Math.min(mouseY, maxY))
      // console.log(mouseX, mouseY)

      xTo(mouseX)
      yTo(mouseY)
    }
    button.addEventListener('mouseenter', () => {
      let percentIncrease = calculateScaleValue()
      window.addEventListener('mousemove', moveHandler)
      let tl = gsap
        .timeline()
        .to(buttonClip, { scale: percentIncrease + 1, duration: 0.5 })
        .to(buttonClip, { opacity: 1, duration: 0 }, 0)
    })

    button.addEventListener('mouseleave', () => {
      let tl = gsap
        .timeline()
        .to(buttonClip, { scale: 0, duration: 0.3 })
        .to(buttonClip, { opacity: 0, duration: 0 })
      window.removeEventListener('mousemove', moveHandler)
    })
  }

  buttons.forEach((button, index) => {
    moveAndScale(button, buttonClips[index])
  })
}
