import useCart from 'hooks/useCart'
import CartItem from 'utils/types/CartItem'
import s from './OrderItem.module.scss'

type Props = {
	cartItem: CartItem
}

const OrderItem = ({ cartItem }: Props) => {
	const { addToCart, removeFromCart } = useCart()

	return (
		<div className={s.order_item} title={cartItem.product.name}>
			<img
				className={s.order_item__img}
				src={cartItem.product.image}
				alt={`${cartItem.product.name} Image`}
			/>
			<div>
				<span className={s.order_item__title}>{cartItem.product.name}</span>
				<div className={s.order_item__quantity}>
					<button
						className={s.order_item__quantity__button}
						onClick={() => removeFromCart(cartItem.product)}
					>
						{cartItem.quantity === 1 ? (
							<span className={s.order_item__quantity__button__trash}></span>
						) : (
							'-'
						)}
					</button>
					<span>{cartItem.quantity}</span>
					<button
						className={s.order_item__quantity__button}
						onClick={() => addToCart(cartItem.product)}
					>
						+
					</button>
				</div>
			</div>
			<span className={s.order_item__price}>
				$ {(cartItem.product.price * cartItem.quantity).toFixed(2)}
			</span>
		</div>
	)
}

export default OrderItem
