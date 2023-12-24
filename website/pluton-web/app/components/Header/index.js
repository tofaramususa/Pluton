import Menu from './Menu'
import styles from './header.module.scss'
import Logo from './Logo'

export default function Header () {
	return (<div className={styles.main_header}>
	<Logo />
	<Menu />
	</div>)
}