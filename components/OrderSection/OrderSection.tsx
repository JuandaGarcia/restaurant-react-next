import AuthButton from 'components/AuthButton/AuthButton'
import Modal from 'components/Modal/Modal'
import OrderItem from 'components/OrderItem/OrderItem'
import useAuth from 'hooks/useAuth'
import useCart from 'hooks/useCart'
import { useEffect, useState } from 'react'
import s from './OrderSection.module.scss'

const OrderSection = () => {
	const { user, signOut } = useAuth()
	const { products, total } = useCart()
	const [openModalSignIn, setOpenModalSignIn] = useState(false)
	const [openModalCheckout, setOpenModalCheckout] = useState(false)

	useEffect(() => {
		user && setOpenModalSignIn(false)
		!user && setOpenModalCheckout(false)
	}, [user])

	return (
		<section className={s.order_section}>
			<Modal
				show={!user && openModalSignIn}
				title="Sign In"
				close={setOpenModalSignIn}
			>
				<AuthButton />
			</Modal>
			<Modal
				show={user !== null && openModalCheckout}
				title="Checkout"
				close={setOpenModalCheckout}
			>
				<div className={s.order_section__total__checkout}>
					<span>Total:</span>
					<span className={s.order_section__total__checkout__price}>
						${total}
					</span>
				</div>
				<button className={s.order_section__total__button}>Pagar</button>
			</Modal>
			<div className={s.order_section__user}>
				{user ? (
					<div className={s.order_section__user__profile}>
						<span className={s.order_section__user__profile__name}>
							{user.displayName}
						</span>
						<img
							className={s.order_section__user__profile__img}
							src={user.photoURL || '/img/user.jpg'}
							alt={user.displayName || 'User Photo'}
							width={40}
							height={40}
						/>
						<button
							className={s.order_section__user__profile__button}
							onClick={signOut}
							aria-label="Log out"
						></button>
					</div>
				) : (
					<button
						className={s.order_section__user__button}
						onClick={() => setOpenModalSignIn(true)}
					>
						Sign in
					</button>
				)}
			</div>
			<h2 className={s.order_section__title}>
				My 😎
				<br />
				Order
			</h2>
			<div className={s.order_section__address}></div>
			<div className={s.order_section__products}>
				{products.length ? (
					<ul className={s.order_section__products__list}>
						{products.map(item => (
							<li key={item.product.id}>
								<OrderItem cartItem={item} />
							</li>
						))}
					</ul>
				) : (
					<p className={s.order_section__products__text}>
						The shopping cart is empty 🥑
					</p>
				)}
			</div>
			<div className={s.order_section__total}>
				<span>Total:</span>
				<span className={s.order_section__total__price}>${total}</span>
			</div>
			<div className={s.order_section__checkout}>
				<div>
					<p className={s.order_section__checkout__text}>Persons: 1</p>
					{!user && (
						<button
							onClick={() => setOpenModalSignIn(true)}
							className={s.order_section__checkout__text__auth}
						>
							Sign in to continue ⛔️
						</button>
					)}
				</div>
				<button
					disabled={!products.length || !user}
					className={s.order_section__checkout__button}
					onClick={() => setOpenModalCheckout(true)}
				>
					Checkout
				</button>
			</div>
		</section>
	)
}

export default OrderSection
