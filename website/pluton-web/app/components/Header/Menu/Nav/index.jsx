import React from "react";
import { Links } from "./data"; //Questions why does links have to be an object, why dont we put extension  at the end of data
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { FooterLinks } from "./data";

const perspective = {
	initial: {
		opacity: 0,
		visibility: 'hidden',
		rotateX: 90,
		translateY: 80,
		translateX: -20,
	},
	enter: (i) => ({
		translateY: 0,
		translateX: 0,
		visibility: 'visible',
		opacity: 1,
		transition: {
			duration: 0.35,
			opacity: {duration: 0.35},
			delay: 0.5 + i * 0.15,
			ease: [.215,.61,.355,1]
		},
		rotateX: 0,
	}),
	exit: {
		opacity: 0,
		transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1]}
	}
}

const slideIn = {
	initial: {
		opacity: 0,
		y: 20, 
	},
	enter: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,  
			delay: 0.75 + i * 0.15},
	}),
	exit: {
		opacity: 10,
		transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1]}
	}
}
export default function index() {
	return (
		<div className={styles.nav}>
			<div className={styles.body}> 
			{
				Links.map ( (link, index) => {
					return (
						<div key={index}  className={styles.linkContainer}>
					<motion.div 
					variants={perspective}
					custom={index}
					animate="enter" //happens as soon as a component is mounted
					exit="exit" //when we unmount the component
					initial="initial" //starting values
					>
						<a href={link.href}> {link.title}</a>
						</motion.div>
						</div>
					)
				}
				)
			}
			</div>
		</div>
	);
}