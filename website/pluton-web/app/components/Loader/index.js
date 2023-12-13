import React, { useEffect, useRef } from "react";
import { words } from "./data";
import styles from "./Loader.module.scss";
import { collapseWords, introAnimation, progressAnimation } from "./animations";

export default function Loader({timeline}) 
{
	const loaderRef = useRef(null); //information that persists between renders, useState causes re-rendering on update
	const progressRef = useRef(null);
	const progressNumberRef = useRef(null);
	const wordGroupRef = useRef(null);

	useEffect(() => { //this runs once at the start
		timeline && //we checking if there's a timeline
		timeline
		.add(introAnimation(wordGroupRef)) //then we add to that timeline animations, we add the introAnimation
		.add(progressAnimation(progressRef, progressNumberRef), 0)
		 .add(collapseWords(loaderRef), "-=1")
	  }, [timeline]); //why is the timeline in the array

	  return (
	   <div className={styles.loader__wrapper}>
		<div className={styles.loader__progressWrapper}>
		  <div  className={styles.loader__progress} ref={progressRef}></div>
		  <span className={styles.loader__progressNumber} ref={progressNumberRef}>0</span>
		</div>
		<div className={styles.loader} ref={loaderRef}> {/* wrapper for all the words */}
		  <div className={styles.loader__words}>
			<div className={styles.loader__overlay}></div>
			<div ref={wordGroupRef}>
			  {words.map((word, index) => { //creating a span for every word in the array
				return (
				  <span key={index} className={styles.loader__word}>
					{word}
				  </span>
				);
			  })}
			</div>
		  </div>
		</div>
	  </div>
	  );
} 
