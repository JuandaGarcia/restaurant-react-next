import AuthButton from 'components/AuthButton/AuthButton'
import Modal from 'components/Modal/Modal'
import OrderItem from 'components/OrderItem/OrderItem'
import useAuth from 'hooks/useAuth'
import useCart from 'hooks/useCart'
import useRestaurant from 'hooks/useRestaurant'
import { useEffect, useState } from 'react'
import s from './OrderSection.module.scss'

const OrderSection = () => {
	const { user, signOut } = useAuth()
	const { openMenu } = useRestaurant()
	const { toggleMenu } = useRestaurant()
	const { products, total, pay } = useCart()
	const [openModalSignIn, setOpenModalSignIn] = useState(false)
	const [openModalCheckout, setOpenModalCheckout] = useState(false)

	useEffect(() => {
		user && setOpenModalSignIn(false)
		!user && setOpenModalCheckout(false)
	}, [user])

	const payment = () => {
		pay()
		setOpenModalCheckout(false)
	}

	return (
		<>
			<Modal
				show={!user && openModalSignIn}
				title="Sign In"
				close={setOpenModalSignIn}
			>
				{' '}
				<div className={s.order_section__auth_modal}>
					<AuthButton type="facebook" />
					<AuthButton type="google" />
					<AuthButton type="github" />
				</div>
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
				<button onClick={payment} className={s.order_section__total__button}>
					Pay
				</button>
			</Modal>
			<section className={`${s.order_section} ${openMenu && s.active}`}>
				<div className={s.order_section__header}>
					<button
						onClick={toggleMenu}
						className={s.order_section__header__close}
						aria-label="Close Order section"
					></button>
					<div className={s.order_section__header__user}>
						{user ? (
							<div className={s.order_section__header__user__profile}>
								<span className={s.order_section__header__user__profile__name}>
									{user.displayName}
								</span>
								<img
									className={s.order_section__header__user__profile__img}
									src={user.photoURL || '/img/user.jpg'}
									alt={user.displayName || 'User Photo'}
									width={40}
									height={40}
								/>
								<button
									className={s.order_section__header__user__profile__button}
									onClick={signOut}
									aria-label="Log out"
								></button>
							</div>
						) : (
							<button
								className={s.order_section__header__user__button}
								onClick={() => setOpenModalSignIn(true)}
							>
								Sign in
							</button>
						)}
					</div>
				</div>
				<h2 className={s.order_section__title}>
					My 😎
					<br />
					Order
				</h2>
				<div className={s.order_section__address}>
					{user ? (
						<>
							<div className={s.order_section__address__section}>
								<span>65 St Marks Ave</span>
								<span className={s.order_section__address__section__action}>
									Edit
								</span>
							</div>
							<div className={s.order_section__address__section}>
								<div className={s.order_section__address__section}>
									<span
										className={s.order_section__address__section__clock}
									></span>
									<span>35 min</span>
								</div>
								<span className={s.order_section__address__section__action}>
									Choose time
								</span>
							</div>
						</>
					) : (
						<p className={s.order_section__address__login}>
							Login to enter your address
						</p>
					)}
				</div>
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
		</>
	)
}

export default OrderSection
