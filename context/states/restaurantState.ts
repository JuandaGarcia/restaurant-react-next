import Category from 'utils/types/Category'
import CartItem from 'utils/types/CartItem'
import Product from 'utils/types/Product'

export interface IRestaurantState {
	products: Product[]
	categories: Category[]
	loadingCategories: boolean
	loadingProducts: boolean
	errorCategories: null | any
	errorProducts: null | any
	openMenu: boolean
	search: string
	search_result: Product[]
}

export const restaurantInitialState: IRestaurantState = {
	products: [],
	categories: [],
	loadingCategories: true,
	loadingProducts: true,
	errorCategories: null,
	errorProducts: null,
	openMenu: false,
	search: '',
	search_result: [],
}

export type restaurantActionType =
	| {
			type: 'set-products'
			payload: Product[]
	  }
	| {
			type: 'set-categories'
			payload: Category[]
	  }
	| {
			type: 'init-request'
			payload: 'products' | 'categories'
	  }
	| {
			type: 'error'
			payload: { type: 'products' | 'categories'; error: any }
	  }
	| {
			type: 'toggle-menu'
	  }
	| {
			type: 'search'
			payload: string
	  }

export const restaurantReducer = (
	state: IRestaurantState,
	action: restaurantActionType
): IRestaurantState => {
	switch (action.type) {
		case 'set-products':
			return {
				...state,
				products: action.payload,
				loadingProducts: false,
			}
		case 'set-categories':
			return {
				...state,
				categories: action.payload,
				loadingCategories: false,
			}
		case 'init-request':
			if (action.payload === 'products') {
				return {
					...state,
					errorProducts: null,
					loadingProducts: true,
				}
			} else {
				return {
					...state,
					errorCategories: null,
					loadingCategories: true,
				}
			}
		case 'error':
			if (action.payload.type === 'products') {
				return {
					...state,
					errorProducts: action.payload.error,
					loadingProducts: false,
				}
			} else {
				return {
					...state,
					errorCategories: action.payload.error,
					loadingCategories: false,
				}
			}
		case 'toggle-menu':
			return {
				...state,
				openMenu: !state.openMenu,
			}
		case 'search':
			const newResult = state.products.filter(project => {
				return project.name.toLowerCase().includes(action.payload.toLowerCase())
			})
			return {
				...state,
				search: action.payload,
				search_result: newResult,
			}
		default:
			return state
	}
}
