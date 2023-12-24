"use client" // This file is client-side only because we are using hooks/
import Loader from "./components/Loader"; //import the loader component
import Hero from "./components/Hero";
import "@/styles/index.scss"
import styles from "./page.module.scss";

import { useLayoutEffect, useState } from "react"; //runs before the browser paints 
import { gsap } from "gsap" // Import the Timeline type from gsap

export default function Home() {
	const [loading, setLoading] = useState(false); //setLoading is a function that changes the state of loading to know if we done or not
	const [timeline, setTimeline] =  useState<any>(null); //set a timeline and add it to the state and pass it as a prop

	useLayoutEffect(() => {   //runs the moment the browser paints the first time
		const context = gsap.context(() => {
			const tl  = gsap.timeline({ //timelines are for sequencing animations 
				onComplete: () => setLoading(true) //when done then set loading to true
			});

			setTimeline(tl); // set the timeline to the tl
		});
		return () => context.revert(); //
	}, []);

  return (
	<main className={styles.main}>
		{loading ? null : <Loader timeline={timeline}/>}
		<Hero />
	</main>
  )
}
