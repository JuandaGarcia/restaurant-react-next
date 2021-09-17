import useCart from 'hooks/useCart'
import useRestaurant from 'hooks/useRestaurant'
import Link from 'next/link'
import s from './Header.module.scss'

const Header = () => {
	const { toggleMenu, handleChangeSearch } = useRestaurant()
	const { products } = useCart()

	return (
		<header className={s.header}>
			<Link href="/">
				<a>
					<h1 className={s.header__logo}>Chukwudi</h1>
				</a>
			</Link>
			<button className={s.header__cart_buttom} onClick={toggleMenu}>
				<span className={s.header__cart_buttom__count}>{products.length}</span>
			</button>
			<input
				onChange={handleChangeSearch}
				className={s.header__input}
				type="text"
				placeholder="Search"
			/>
		</header>
	)
}

export default Header
