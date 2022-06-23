import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const DOM = {
	headerSubtitles: gsap.utils.toArray('.header__subtitle'),
	sections: gsap.utils.toArray('.section'),
	headerDots: gsap.utils.toArray('.dot')
}

export default function toggleHeaderSubtitleAndDots() {
	let configs = {
		duration: 0.3,
		ease: 'power2.out'
	}

	DOM.headerSubtitles.forEach((subtitle, index) => {
		ScrollTrigger.create({
			// markers: true,
			trigger: DOM.sections[index + 1],
			start: 'top 25%',
			end: 'bottom 25%',
			onEnter: () => {
				gsap.to(subtitle, { y: '0', ...configs })
				DOM.headerDots[index].classList.add('theme--background')
			},
			onLeaveBack: () => {
				gsap.to(subtitle, { y: '100%', ...configs })
				DOM.headerDots[index].classList.remove('theme--background')
			},
			onLeave: () => gsap.to(subtitle, { y: '-100%', ...configs }),
			onEnterBack: () => gsap.to(subtitle, { y: '0', ...configs })
		})
	})
}
