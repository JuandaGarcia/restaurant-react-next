import GoogleIcon from './Icons/GoogleIcon'
import GithubIcon from './Icons/GithubIcon'
import FacebookIcon from './Icons/FacebookIcon'
import useAuth from 'hooks/useAuth'
import s from './AuthButton.module.scss'

type Props = {
	type: 'google' | 'github' | 'facebook'
}

const AuthButton = ({ type }: Props) => {
	const { googleAuth, githubAuth, facebookAuth } = useAuth()

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
		facebook: {
			name: 'Facebook',
			Icon: FacebookIcon,
			onClick: facebookAuth,
			className: s.facebook,
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
