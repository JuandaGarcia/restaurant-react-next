import Banner from 'components/Banner/Banner'
import Header from 'components/Header/Header'
import Modal from 'components/Modal/Modal'
import OrderSection from 'components/OrderSection/OrderSection'
import type { NextPage } from 'next'
import s from 'styles/Home.module.scss'

const Home: NextPage = () => {
	return (
		<div className={s.home}>
			<div className={s.home__content}>
				<Header />
				<Banner />
			</div>
			<OrderSection />
		</div>
	)
}

export default Home
