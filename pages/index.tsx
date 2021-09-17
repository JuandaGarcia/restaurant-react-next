import Banner from 'components/Banner/Banner'
import CategoriesAndProducts from 'components/CategoriesAndProducts/CategoriesAndProducts'
import Header from 'components/Header/Header'
import OrderSection from 'components/OrderSection/OrderSection'
import SearchResult from 'components/SearchResult/SearchResult'
import SEO from 'components/SEO/SEO'
import useRestaurant from 'hooks/useRestaurant'
import { useEffect, useRef } from 'react'
import s from 'styles/Home.module.scss'

const Home = () => {
	const { getData, search } = useRestaurant()
	const getDataRef = useRef(getData)

	useEffect(() => {
		getDataRef.current()
	}, [])

	return (
		<div className={s.home}>
			<SEO />
			<div className={s.home__content}>
				<Header />
				{search ? (
					<SearchResult />
				) : (
					<>
						<Banner />
						<CategoriesAndProducts />
					</>
				)}
			</div>
			<OrderSection />
		</div>
	)
}

export default Home
