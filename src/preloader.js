import { gsap } from 'gsap'

exports.preloaderIx = () => {
  const preloaderTl = gsap.timeline({ defaults: { ease: 'power1.inOut' } })

  preloaderTl
    .set('.preloader-wrapper', { display: 'flex' })
    .fromTo(
      '.stripe',
      {
        width: '0',
      },
      { width: '100%', duration: 1, stagger: { amount: 1, from: 'random' } }
    )
    .to('.preloader-wrapper', { opacity: 0 })
    .set('.preloader-wrapper', { display: 'none' })
    .from(
      '.header_icon, .get-link',
      { y: '-40', opacity: 0, duration: 1, ease: 'power3.out' },
      '-=0.3'
    )
    .from(
      '.section_hero .container-large',
      {
        y: '40',
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      },
      '<40%'
    )
}
