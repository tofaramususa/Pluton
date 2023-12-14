'use client' //to prevent errors and specify when we are using hooks and has to be rendered lclietnet side

import { React } from 'react';
import { useState } from 'react';
import Button from './Button';
import styles from './style.module.scss';
import Nav from './Nav';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
	open: {
		width: "97vw",
		height: "95vh",
		// "max-width": 480,
		// "max-height": 650,
		top: "-15px",
		right: "-15px",
		transition: {duration: 0.75, ease: [0.76, 0, 0.24, 1]}
	},
	closed: {
		width: 100,
		height: 40,
		top: "0px",
		right: "0px",
		transition: {duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1]}
	}
}

export default function Index () {

	const [isActive, setIsActive] = useState(false);
	return (
		<div className={styles.header}>
			<motion.div 
				className={styles.menu}
				variants={variants}
				animate={isActive ? "open" : "closed"}
				initial="closed"
				>
			<AnimatePresence>
			{isActive && <Nav />}
			</AnimatePresence>
			</motion.div>
			< Button isActive={isActive} setIsActive={setIsActive}/>
		</div>
	)
}