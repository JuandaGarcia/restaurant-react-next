import GoogleIcon from './GoogleIcon'
import s from './AuthButton.module.scss'
import useAuth from 'hooks/useAuth'
import { ButtonHTMLAttributes } from 'react'

const AuthButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
	const { googleAuth, githubAuth } = useAuth()

	return (
		<button
			{...props}
			onClick={githubAuth}
			className={s.auth_btn}
			type="button"
		>
			<GoogleIcon className={s.auth_btn__icon} />
			Sign in with Google
		</button>
	)
}

export default AuthButton
