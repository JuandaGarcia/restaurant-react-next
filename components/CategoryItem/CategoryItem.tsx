import React from 'react'
import Category from 'utils/types/Category'
import s from './CategoryItem.module.scss'

type Props = {
	category: Category
}

const CategoryItem = ({ category }: Props) => {
	return (
		<label className={s.category_item} title={category.name}>
			<input className={s.category_item__input} type="radio" name="category" />
			<div className={s.category_item__item}>
				<div className={s.category_item__item__circle}>
					<img
						className={s.category_item__item__circle__img}
						src={category.icon}
						alt={category.name}
					/>
				</div>
				<span className={s.category_item__item__name}>{category.name}</span>
			</div>
		</label>
	)
}

export default CategoryItem
