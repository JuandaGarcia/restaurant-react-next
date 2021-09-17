import CategoryItem from 'components/CategoryItem/CategoryItem'
import ProductsList from 'components/ProductsList/ProductsList'
import useRestaurant from 'hooks/useRestaurant'
import s from './CategoriesAndProducts.module.scss'

const CategoriesAndProducts = () => {
	const { categories, loadingCategories, errorCategories, products } =
		useRestaurant()

	return (
		<main>
			<div className={s.categories_and_products__header}>
				<h2 className={s.categories_and_products__header__title}>
					Restaurant 🍔
				</h2>
				<label className={s.categories_and_products__header__select}>
					<span>Delivery:</span>
					<select className={s.categories_and_products__header__select__input}>
						<option value="now">Now</option>
					</select>
				</label>
			</div>
			<div className={s.categories_and_products__categories}>
				{loadingCategories ? (
					'Loading'
				) : errorCategories ? (
					'Error'
				) : categories.length ? (
					<>
						{categories.map((category, i) => (
							<CategoryItem
								key={category.id}
								category={category}
								defaultChecked={i === 0}
							/>
						))}
					</>
				) : (
					'No categories available'
				)}
			</div>
			<ProductsList products={products} />
		</main>
	)
}

export default CategoriesAndProducts
