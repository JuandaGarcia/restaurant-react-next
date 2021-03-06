import s from './Banner.module.scss'
import Link from 'next/link'

const Banner = () => {
	return (
		<section className={s.banner}>
			<img
				className={s.banner__img}
				src="/img/headerimage.png"
				alt="Offer Image"
			/>
			<div className={s.banner__content}>
				<p className={s.banner__content__title}>$0 delivery for 30 days!</p>
				<p className={s.banner__content__text}>
					$0 delivery fee for orders over $10 for 30 days
				</p>
				<Link href="/">
					<a className={s.banner__content__link}>Learn more</a>
				</Link>
			</div>
		</section>
	)
}

export default Banner
