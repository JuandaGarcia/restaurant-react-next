import { Context } from 'context/AppContext'
import { ChangeEvent, useContext, useEffect, useRef } from 'react'

const useRestaurant = () => {
	const { restaurantState, restaurantDispatch } = useContext(Context)
	const {
		products,
		categories,
		loadingProducts,
		loadingCategories,
		errorProducts,
		errorCategories,
		openMenu,
		search,
		search_result,
	} = restaurantState

	const getData = async () => {
		await getCategories()
		await getProducts()
	}

	const getCategories = async () => {
		restaurantDispatch({
			type: 'init-request',
			payload: 'categories',
		})
		try {
			const res = await fetch('/data/categories.json')
			const data = await res.json()
			restaurantDispatch({ type: 'set-categories', payload: data })
		} catch (error) {
			restaurantDispatch({
				type: 'error',
				payload: { type: 'categories', error: error },
			})
		}
	}

	const getProducts = async () => {
		restaurantDispatch({ type: 'init-request', payload: 'products' })
		try {
			const res = await fetch('/data/products.json')
			const data = await res.json()
			restaurantDispatch({ type: 'set-products', payload: data })
		} catch (error) {
			restaurantDispatch({
				type: 'error',
				payload: { type: 'products', error: error },
			})
		}
	}

	const toggleMenu = () => {
		restaurantDispatch({ type: 'toggle-menu' })
	}

	const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
		restaurantDispatch({ type: 'search', payload: event.target.value })
	}

	return {
		products,
		categories,
		loadingProducts,
		errorProducts,
		loadingCategories,
		errorCategories,
		openMenu,
		toggleMenu,
		getData,
		search,
		handleChangeSearch,
		search_result,
	}
}

export default useRestaurant
