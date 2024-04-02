import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

exports.benefitsIx = () => {
  const benefitsBlock = document.querySelector('.benefits-wrapper_v2')

  if (benefitsBlock) {
    const benefitsNavItems = document.querySelectorAll('.benefits_nav-item')
    const benefitsItems = document.querySelectorAll('.benefits_item')
    const benefitsImages = document.querySelectorAll('.benefits_image')
    const benefitsIndicator = document.querySelector('.benefits_indicator')

    let benefitsCount = benefitsItems.length

    let benefitsScrollTrigger = gsap.to(benefitsBlock, {
      scrollTrigger: {
        trigger: benefitsBlock,
        start: '54% center',
        end: '+=2000',
        pin: true,
        scrub: true,
        refreshPriority: 2,
        onUpdate: (self) => {
          // Determine which benefit item has to be active based on the current progress
          let index = Math.floor(self.progress * benefitsCount)

          if (index < benefitsCount) {
            // Remove .is-active class from all items
            benefitsItems.forEach((item) => item.classList.remove('is-active'))
            benefitsImages.forEach((item) => item.classList.remove('is-active'))
            benefitsNavItems.forEach((item) =>
              item.classList.remove('is-active')
            )

            // Add is-active to current active element
            benefitsItems[index].classList.add('is-active')
            benefitsImages[index].classList.add('is-active')
            benefitsNavItems[index].classList.add('is-active')
          }

          // Update the feature indicator's height
          benefitsIndicator.style.width = `${self.progress * 100}%`
        },
      },
      duration: 1,
    }).scrollTrigger

    // Function to scroll to a specific index
    const scrollToFeature = (index) => {
      // Calculate the progress based on index
      let progress = index / (benefitsItems.length - 1) // Normalize progress between 0 and 1
      // Scroll to the calculated position within the ScrollTrigger's start and end range
      benefitsScrollTrigger.scroll(
        benefitsScrollTrigger.start +
          progress *
            (benefitsScrollTrigger.end - benefitsScrollTrigger.start - 100)
      )
    }

    // Attach click event listeners to feature items
    benefitsNavItems.forEach((item, index) => {
      item.addEventListener('click', () => scrollToFeature(index))
    })
  }
}
