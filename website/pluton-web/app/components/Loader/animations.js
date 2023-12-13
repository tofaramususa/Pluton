import gsap from "gsap";

import  CSSPlugin  from 'gsap/all'

gsap.registerPlugin(CSSPlugin)
//Question: how is progress animation working --> 
//How is the timing of both animations calculated working together

export const introAnimation = (wordGroupRef) => { //use for each word, move it down
	const tl = gsap.timeline(); //create and return a timeline

	tl.to(wordGroupRef.current,{ 
		yPercent: -80, //move the word up in the span
		duration: 5, //duration of the animation
		ease: "power3.inOut" //how it will happen
	}); //ref is an object and we need to actual element so we use current
	return tl;
}

export const progressAnimation = (progressRef, progressNumberRef) => { //use for the progress bar
	const tl = gsap.timeline();

	tl.to(progressRef.current,{
		scaleX: 1,
		duration: 5,
		ease: "power3.inOut",
	}).to(progressNumberRef.current,{ 
		x: '100vw',
		duration: 5,
		ease: "power3.inOut",
	},
	"<"
	).to(progressNumberRef.current,{
		textContent: 100,
		duration: 5.5,
		roundProps: "textContent",
	},
	"<").to(progressRef.current,{
		y: 24,
		autoAlpha: 0,
	})
	return tl;
}

export const collapseWords = (loaderRef) => { //for the collapse to mark the path and close the words off
	const tl = gsap.timeline();

	tl.to(loaderRef.current, {
		"clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
		duration: 3,
		ease: "expo.inOut"
	});
	return tl;
}
