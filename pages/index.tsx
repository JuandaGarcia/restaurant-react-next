import Banner from 'components/Banner/Banner'
import CategoriesAndProducts from 'components/CategoriesAndProducts/CategoriesAndProducts'
import Header from 'components/Header/Header'
import OrderSection from 'components/OrderSection/OrderSection'
import s from 'styles/Home.module.scss'

const Home = () => {
	return (
		<div className={s.home}>
			<div className={s.home__content}>
				<Header />
				<Banner />
				<CategoriesAndProducts />
			</div>
			<OrderSection />
		</div>
	)
}

export default Home
