import { Context } from 'context/AppContext'
import { useContext } from 'react'
import { toast } from 'react-hot-toast'
import Product from 'utils/types/Product'

const useCart = () => {
	const { cartState, cartDispatch } = useContext(Context)
	const { products, total } = cartState

	const addToCart = (product: Product, notification: boolean = false) => {
		cartDispatch({ type: 'add-to-cart', payload: product })
		notification && toast.success(`Added ${product.name}`)
	}

	const removeFromCart = (product: Product) =>
		cartDispatch({ type: 'remove-from-cart', payload: product })

	return { addToCart, removeFromCart, products, total }
}

export default useCart
