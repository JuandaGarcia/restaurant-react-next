import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import { AppContextProvider } from 'context/AppContext'
import { Toaster } from 'react-hot-toast'
import { globalConfig } from 'config/toast'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppContextProvider>
			<Component {...pageProps} />
			<Toaster
				position="bottom-center"
				reverseOrder={false}
				toastOptions={globalConfig}
			/>
		</AppContextProvider>
	)
}
export default MyApp
