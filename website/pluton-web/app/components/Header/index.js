import Menu from './Menu'
import styles from './header.module.scss'
import Logo from './Logo'





export default function Header () {
	return (<div className={styles.header}>
	<Logo />
	<Menu />
	</div>)
}