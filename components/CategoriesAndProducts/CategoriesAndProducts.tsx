import CategoryItem from 'components/CategoryItem/CategoryItem'
import ProductCard from 'components/ProductCard/ProductCard'
import useRestaurant from 'hooks/useRestaurant'
import s from './CategoriesAndProducts.module.scss'

const CategoriesAndProducts = () => {
	const {
		categories,
		products,
		loadingCategories,
		loadingProducts,
		errorCategories,
		errorProducts,
	} = useRestaurant()

	return (
		<section>
			<div className={s.categories_and_products__header}>
				<h2 className={s.categories_and_products__header__title}>
					Restaurnat 🍔
				</h2>
			</div>
			<form className={s.categories_and_products__categories}>
				{loadingCategories ? (
					'Loading'
				) : errorCategories ? (
					'Error'
				) : categories.length ? (
					<>
						{categories.map(category => (
							<CategoryItem key={category.id} category={category} />
						))}
					</>
				) : (
					'No categories available'
				)}
			</form>
			<ul className={s.categories_and_products__products}>
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
		</section>
	)
}

export default CategoriesAndProducts
