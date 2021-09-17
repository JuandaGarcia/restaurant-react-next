import { Context } from 'context/AppContext'
import { useContext } from 'react'
import { toast } from 'react-hot-toast'
import { errorConfigTop } from 'config/toast'
import {
	GoogleAuthProvider,
	GithubAuthProvider,
	FacebookAuthProvider,
	signInWithPopup,
	getAuth,
	signOut as signOutAuth,
} from 'firebase/auth'
import { firebaseApp } from 'config/firebase'

const useAuth = () => {
	const { userState } = useContext(Context)
	const { user, loadingUser } = userState
	const auth = getAuth(firebaseApp)

	const googleAuth = async () => {
		try {
			const googleProvider = new GoogleAuthProvider()
			await signInWithPopup(auth, googleProvider)
		} catch (error: any) {
			toast.error(error.message, errorConfigTop)
		}
	}

	const githubAuth = async () => {
		try {
			const githubProvider = new GithubAuthProvider()
			await signInWithPopup(auth, githubProvider)
		} catch (error: any) {
			toast.error(error.message, errorConfigTop)
		}
	}

	const facebookAuth = async () => {
		try {
			const facebookProvider = new FacebookAuthProvider()
			await signInWithPopup(auth, facebookProvider)
		} catch (error: any) {
			toast.error(error.message, errorConfigTop)
		}
	}

	const signOut = async () =>
		await signOutAuth(auth).catch(error =>
			toast.error(error.message, errorConfigTop)
		)

	return {
		user,
		loadingUser,
		googleAuth,
		githubAuth,
		facebookAuth,
		signOut,
	}
}

export default useAuth
