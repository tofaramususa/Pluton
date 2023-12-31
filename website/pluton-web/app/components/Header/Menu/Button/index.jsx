import React from "react";
import styles from "./style.module.scss";
import { motion } from 'framer-motion';

export default function Button({isActive, setIsActive}) {
	return (
		<div onClick={() => setIsActive(!isActive)} className={styles.menu_button}>
			<motion.div 
			className={styles.slider}
			animate={{top: isActive ? "-100%" : "0"}} //is button active then animate the change to -100% else animate to 0
			transition={{duration: 0.5, ease: [0.76, 0, 0.24, 1]}}
			>
			<div className={styles.el}>
				<PerspectiveText label="Menu"/>
			</div>
			<div className={styles.el}>
				<PerspectiveText label="Close"/>
			</div>
			</motion.div>
		</div>
	)
}

function PerspectiveText({label})
{
	return (
		<div className={styles.perspectiveText}>
			<p className="no-p-style">{label}</p>
			<p className="no-p-style">{label}</p>
		</div>
	)
}