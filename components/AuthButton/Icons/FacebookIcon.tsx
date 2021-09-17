import { SVGProps } from 'react'

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width={24}
			height={24}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clipPath="url(#prefix__clip0)">
				<path fill="#1877F2" d="M.346.537h24v24h-24z" />
				<path
					d="M23.846 12.607c0-6.351-5.149-11.5-11.5-11.5s-11.5 5.149-11.5 11.5c0 5.74 4.205 10.498 9.703 11.36v-8.036H7.63v-3.324h2.92v-2.534c0-2.882 1.717-4.474 4.344-4.474 1.258 0 2.574.225 2.574.225v2.83h-1.45c-1.429 0-1.874.886-1.874 1.796v2.157h3.19l-.51 3.324h-2.68v8.036c5.498-.862 9.703-5.62 9.703-11.36z"
					fill="#fff"
				/>
			</g>
			<defs>
				<clipPath id="prefix__clip0">
					<path
						fill="#fff"
						transform="translate(.346 .537)"
						d="M0 0h24v24H0z"
					/>
				</clipPath>
			</defs>
		</svg>
	)
}

export default FacebookIcon
