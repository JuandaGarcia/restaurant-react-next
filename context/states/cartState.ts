import CartItem from 'utils/types/CartItem'
import Product from 'utils/types/Product'

export interface ICartState {
	products: CartItem[]
	total: number
}

export const cartInitialState: ICartState = {
	products: [],
	total: 0,
}

export type cartActionType =
	| {
			type: 'add-to-cart' | 'remove-from-cart'
			payload: Product
	  }
	| { type: 'reset' }

export const cartReducer = (
	state: ICartState,
	action: cartActionType
): ICartState => {
	const isChangeAction =
		action.type === 'add-to-cart' || action.type === 'remove-from-cart'

	const index = isChangeAction
		? state.products.findIndex(item => item.product.id === action.payload.id)
		: 0

	const quantityController = (type: 'increase' | 'decrease') => {
		const newArray = state.products.map(item => {
			if (isChangeAction && item.product.id === action.payload.id) {
				return {
					product: action.payload,
					quantity: type === 'increase' ? item.quantity + 1 : item.quantity - 1,
				}
			} else {
				return item
			}
		})
		return newArray
	}

	const getTotal = (array: CartItem[]) =>
		parseFloat(
			array
				.reduce(
					(previousValue, currentValue) =>
						previousValue + currentValue.product.price * currentValue.quantity,
					0
				)
				.toFixed(2)
		)

	switch (action.type) {
		case 'add-to-cart':
			if (index !== -1) {
				const newProducts = quantityController('increase')
				return {
					...state,
					products: newProducts,
					total: getTotal(newProducts),
				}
			} else {
				const newProducts = [
					...state.products,
					{ product: action.payload, quantity: 1 },
				]
				return {
					...state,
					products: newProducts,
					total: getTotal(newProducts),
				}
			}
		case 'remove-from-cart':
			if (state.products[index].quantity > 1) {
				const newProducts = quantityController('decrease')
				return {
					...state,
					products: newProducts,
					total: getTotal(newProducts),
				}
			} else {
				const newProducts = state.products.filter(
					item => item.product.id !== action.payload.id
				)
				return {
					...state,
					products: newProducts,
					total: getTotal(newProducts),
				}
			}
		case 'reset':
			return {
				...state,
				products: [],
				total: 0,
			}
		default:
			return state
	}
}
