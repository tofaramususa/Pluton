import styles from './style.module.scss'

export default function Hero () {
	return (<div className={styles.hero}>
				<div className="hero__content">
				  <h1 className="hero__title" data-animation="text-reveal">
					A digital
					<span> design</span> and <span>technology company</span> working
					in <span> Harare & Dubai</span>. We build <span> great software</span>, create
					<span> amazing digital experiences</span>, and are shaping the
					<span> stories of tomorrow</span>.
				  </h1>
				  <a href="/" className="button button--dark">
					<span>
					  <span>See our work</span>
					</span>
					<svg width="8" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
					  <path d="M7.157 1.172a.5.5 0 0 0-.5-.5h-4.5a.5.5 0 0 0 0 1h4v4a.5.5 0 0 0 1 0v-4.5Zm-5.803 6.01L7.01 1.525 6.303.818.646 6.475l.708.707Z" fill="#fff"/>
					</svg>
				  </a>
				</div>
	</div>)
}