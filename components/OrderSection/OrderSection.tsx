import s from './OrderSection.module.scss'

const OrderSection = () => {
	return (
		<section className={s.order_section}>
			<h2 className={s.order_section__title}>
				My 😎
				<br />
				Order
			</h2>
		</section>
	)
}

export default OrderSection
