import ProductCard from 'components/ProductCard/ProductCard'
import useRestaurant from 'hooks/useRestaurant'
import Product from 'utils/types/Product'
import s from './ProductsList.module.scss'

type Props = {
	products: Product[]
}
const ProductsList = ({ products }: Props) => {
	const { loadingProducts, errorProducts } = useRestaurant()

	return (
		<ul className={s.products}>
			{loadingProducts ? (
				'Loading'
			) : errorProducts ? (
				'Error'
			) : products.length ? (
				<>
					{products.map(product => (
						<li key={product.id}>
							<ProductCard product={product} />
						</li>
					))}
				</>
			) : (
				'No products available'
			)}
		</ul>
	)
}

export default ProductsList
