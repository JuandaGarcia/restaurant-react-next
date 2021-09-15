import Link from 'next/link'
import s from './Header.module.scss'

const Header = () => {
	return (
		<header className={s.header}>
			<Link href="/">
				<a>
					<h1 className={s.header__logo}>Chukwudi</h1>
				</a>
			</Link>
			<input className={s.header__input} type="text" placeholder="Search" />
		</header>
	)
}

export default Header
