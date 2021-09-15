import { useEffect, useState } from 'react'
import Category from 'utils/types/Category'
import Product from 'utils/types/Product'

const useRestaurant = () => {
	const [categories, setCategories] = useState<Category[]>([])
	const [loadingCategories, setLoadingCategories] = useState(true)
	const [errorCategories, setErrorCategories] = useState<null | any>(null)

	const [products, setProducts] = useState<Product[]>([])
	const [loadingProducts, setLoadingProducts] = useState(true)
	const [errorProducts, setErrorProducts] = useState<null | any>(null)

	useEffect(() => {
		const getData = async () => {
			await getCategories()
			await getProducts()
		}
		getData()
	}, [])

	const getCategories = async () => {
		setLoadingCategories(true)
		try {
			const res = await fetch('/data/categories.json')
			const data = await res.json()
			setCategories(data)
			setLoadingCategories(false)
		} catch (error) {
			setErrorCategories(error)
			setLoadingCategories(false)
		}
	}

	const getProducts = async () => {
		setLoadingProducts(true)
		try {
			const res = await fetch('/data/products.json')
			const data = await res.json()
			setProducts(data)
			setLoadingProducts(false)
		} catch (error) {
			setErrorProducts(error)
			setLoadingProducts(false)
		}
	}

	return {
		categories,
		products,
		loadingCategories,
		errorCategories,
		loadingProducts,
		errorProducts,
	}
}

export default useRestaurant
