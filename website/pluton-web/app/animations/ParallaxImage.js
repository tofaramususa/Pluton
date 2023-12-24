import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default class ParallaxImage {
	constructor( { imageSection })
	{
		this.section = imageSection; //assign the section to local variable
		this.image = this.section.querySelector('img'); //get the element with img tag
		this.heightOffset = this.image.offsetHeight - this.section.offsetHeight; //calculate the offset between section and image
		// console.log(this.heightOffset);
		// this._animate();
	}

	// _animate() {
	// 	gsap.fromTo(
	// 		this.image, 
	// 		{
	// 		y: -this.heightOffset,
	// 	}, 
	// 	{
	// 		scrollTrigger: {
	// 			trigger:  this.section,
	// 			start: 'top bottom',
	// 			end: 'bottom top',
	// 			markers: true,
	// 			scrub: true,
	// 		},
	// 		y: 0,
	// 		ease: 'none',
	// 	})
	// }
}