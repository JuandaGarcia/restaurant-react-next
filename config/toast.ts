import { ToastOptions } from 'react-hot-toast/dist/core/types'

export const globalConfig: ToastOptions = {
	position: 'top-center',
	duration: 3000,
	style: {
		borderRadius: '50px',
	},
}
export const errorConfigTop: ToastOptions = {
	position: 'top-center',
	icon: '🍟',
}
export const errorConfigBottom: ToastOptions = {
	position: 'bottom-center',
	icon: '🍟',
}
