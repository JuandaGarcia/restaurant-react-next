import { useRef } from 'react'
import { Dispatch, SetStateAction, FC, useEffect } from 'react'
import s from './Modal.module.scss'

interface Props {
	show?: boolean
	close: Dispatch<SetStateAction<boolean>> | Function
	title: string
}

const Modal: FC<Props> = ({ show = true, title, close, children }) => {
	const modalRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const closeOnEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				close(false)
			}
		}

		if (show) {
			document.body.addEventListener('keydown', closeOnEsc)
		} else {
			document.body.removeEventListener('keydown', closeOnEsc)
		}

		return () => {
			document.body.removeEventListener('keydown', closeOnEsc)
		}
	}, [show, close])

	useEffect(() => {
		if (show) {
			modalRef.current?.focus()
		}
	}, [show])

	return show ? (
		<div className={s.modal}>
			<div aria-live="assertive" role="dialog" className={s.modal__content}>
				<div className={s.modal__content__header}>
					<h2
						tabIndex={0}
						ref={modalRef}
						className={s.modal__content__header__title}
					>
						{title}
					</h2>
					<button
						aria-label="Close modal"
						className={s.modal__content__header__exit}
						onClick={() => close(false)}
					></button>
				</div>
				{children}
			</div>
			<div
				role="button"
				aria-label="Close modal"
				onClick={() => close(false)}
				className={s.modal__overlay}
			></div>
		</div>
	) : null
}

export default Modal
