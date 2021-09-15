import { User } from 'firebase/auth'

type FirebaseUser = User | null

export interface IUserState {
	user: FirebaseUser
	loadingUser: boolean
}

export const userInitialState: IUserState = {
	user: null,
	loadingUser: true,
}

type actionType =
	| {
			type: 'logged-in'
			payload: User
	  }
	| { type: 'not-logged-in' }

export const userReducer = (
	state: IUserState,
	action: actionType
): IUserState => {
	switch (action.type) {
		case 'logged-in':
			return {
				...state,
				user: action.payload,
				loadingUser: false,
			}
		case 'not-logged-in':
			return {
				...state,
				user: null,
				loadingUser: false,
			}
		default:
			return state
	}
}
