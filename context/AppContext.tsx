import { createContext, useEffect, FC, useReducer } from 'react'
import { User, onAuthStateChanged, getAuth } from 'firebase/auth'
import { IUserState, userInitialState, userReducer } from './states/userState'
import { firebaseApp } from 'config/firebase'

type FirebaseUser = User | null

interface IContext {
	userState: IUserState
}

export const Context = createContext({} as IContext)

export const AppContextProvider: FC = ({ children }) => {
	const [userState, userDispatch] = useReducer(userReducer, userInitialState)

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
			}}
		>
			{children}
		</Context.Provider>
	)
}
