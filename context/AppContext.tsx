import { createContext, useEffect, FC, useReducer, Dispatch } from 'react'
import { User, onAuthStateChanged, getAuth } from 'firebase/auth'
import { IUserState, userInitialState, userReducer } from './states/userState'
import { firebaseApp } from 'config/firebase'
import {
	cartActionType,
	cartInitialState,
	cartReducer,
	ICartState,
} from './states/cartState'
import {
	IRestaurantState,
	restaurantActionType,
	restaurantInitialState,
	restaurantReducer,
} from './states/restaurantState'

type FirebaseUser = User | null

type IContext = {
	userState: IUserState
	cartState: ICartState
	cartDispatch: Dispatch<cartActionType>
	restaurantState: IRestaurantState
	restaurantDispatch: Dispatch<restaurantActionType>
}

export const Context = createContext({} as IContext)

export const AppContextProvider: FC = ({ children }) => {
	const [userState, userDispatch] = useReducer(userReducer, userInitialState)
	const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState)
	const [restaurantState, restaurantDispatch] = useReducer(
		restaurantReducer,
		restaurantInitialState
	)

	const handleUser = (user: FirebaseUser) =>
		user
			? userDispatch({ type: 'logged-in', payload: user })
			: userDispatch({ type: 'not-logged-in' })

	useEffect(() => {
		const auth = getAuth(firebaseApp)
		const unsubscribe = onAuthStateChanged(auth, handleUser)

		return () => unsubscribe()
	}, [])

	return (
		<Context.Provider
			value={{
				userState,
				cartState,
				cartDispatch,
				restaurantState,
				restaurantDispatch,
			}}
		>
			{children}
		</Context.Provider>
	)
}
