import { useState } from 'react'

const useRestaurant = () => {
	const [categories, setCategories] = useState([])
	const [loadingCategories, setLoadingCategories] = useState(true)
	const [errorCategories, setErrorCategories] = useState([])

	const [products, setProducts] = useState([])
	const [LoadingProducts, setLoadingProducts] = useState(true)
	const [ErrorProducts, setErrorProducts] = useState([])

	return {
		categories,
		products,
	}
}

export default useRestaurant
