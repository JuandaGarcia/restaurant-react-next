import GoogleIcon from './Icons/GoogleIcon'
import GithubIcon from './Icons/GithubIcon'
import s from './AuthButton.module.scss'
import useAuth from 'hooks/useAuth'
import { ButtonHTMLAttributes } from 'react'

type Props = {
	type: 'google' | 'github'
}

const AuthButton = ({ type }: Props) => {
	const { googleAuth, githubAuth } = useAuth()

	const providers = {
		google: {
			name: 'Google',
			Icon: GoogleIcon,
			onClick: googleAuth,
			className: '',
		},
		github: {
			name: 'Github',
			Icon: GithubIcon,
			onClick: githubAuth,
			className: s.github,
		},
	}

	const { name, Icon, onClick, className } = providers[type]

	return (
		<button
			onClick={onClick}
			className={`${s.auth_btn} ${className}`}
			type="button"
		>
			<Icon className={s.auth_btn__icon} />
			Sign in with {name}
		</button>
	)
}

export default AuthButton
