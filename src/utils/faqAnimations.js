import { gsap } from 'gsap'

export function openFaq(panelEl, iconEl) {
  if (!panelEl || !iconEl) return null
  gsap.killTweensOf([panelEl, iconEl])

  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
  tl.set(panelEl, { willChange: 'height,opacity' })
    .fromTo(panelEl, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.45 })
    .to(iconEl, { rotate: 45, duration: 0.3 }, '<')
    .set(panelEl, { clearProps: 'willChange' })
  return tl
}

export function closeFaq(panelEl, iconEl) {
  if (!panelEl || !iconEl) return null
  gsap.killTweensOf([panelEl, iconEl])

  const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })
  tl.set(panelEl, { willChange: 'height,opacity' })
    .to(panelEl, { height: 0, opacity: 0, duration: 0.4 })
    .to(iconEl, { rotate: 0, duration: 0.3 }, '<')
    .set(panelEl, { clearProps: 'willChange' })
  return tl
}


