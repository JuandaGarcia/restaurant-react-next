import ProductsList from 'components/ProductsList/ProductsList'
import useRestaurant from 'hooks/useRestaurant'
import s from './SearchResult.module.scss'

const SearchResult = () => {
	const { search_result, search } = useRestaurant()
	return (
		<>
			<h2 className={s.search_result__title}>Search result for: {search}</h2>
			<ProductsList products={search_result} />
		</>
	)
}

export default SearchResult
