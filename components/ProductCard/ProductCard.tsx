import Product from 'utils/types/Product'
import Image from 'next/image'
import s from './ProductCard.module.scss'
import useCart from 'hooks/useCart'

type Props = {
	product: Product
}

const ProductCard = ({ product }: Props) => {
	const { addToCart } = useCart()

	return (
		<div className={s.product_card} title={product.name}>
			<div className={s.product_card__photo}>
				<Image
					src={product.image}
					alt={`${product.name} Image`}
					className={s.product_card__photo__img}
					height={226}
					width={440}
				/>
				<span className={s.product_card__photo__text}>{product.time}</span>
			</div>
			<h3 className={s.product_card__title}>{product.name}</h3>
			<div className={s.product_card__info}>
				<div>
					<span className={s.product_card__info__qualification}>
						{product.qualification}
					</span>
					<span className={s.product_card__info__price}>$ {product.price}</span>
				</div>
				<button
					onClick={() => addToCart(product, true)}
					className={s.product_card__info__button}
				>
					Add
				</button>
			</div>
		</div>
	)
}

export default ProductCard
