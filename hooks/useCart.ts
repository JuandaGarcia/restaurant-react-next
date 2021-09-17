import { Context } from 'context/AppContext'
import { useContext } from 'react'
import { toast } from 'react-hot-toast'
import confetti from 'canvas-confetti'
import Product from 'utils/types/Product'
import useRestaurant from './useRestaurant'

const useCart = () => {
	const { cartState, cartDispatch } = useContext(Context)
	const { toggleMenu } = useRestaurant()
	const { products, total } = cartState

	const addToCart = (product: Product, notification: boolean = false) => {
		cartDispatch({ type: 'add-to-cart', payload: product })
		notification && toast.success(`Added ${product.name}`)
	}

	const removeFromCart = (product: Product) =>
		cartDispatch({ type: 'remove-from-cart', payload: product })

	const pay = () => {
		cartDispatch({ type: 'reset' })
		toggleMenu()
		confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.6 },
		})
	}

	return { addToCart, removeFromCart, products, total, pay }
}

export default useCart
