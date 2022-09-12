import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import mars from '../../images/mars.svg'

const Polaroid = ({ id, img_src, earth_date, camera, rover }) => {
	return (
		<div className='bg-white flex flex-col max-w-lg  shadow-2xl h-fit relative drop-shadow-[5px_10px_4px_rgba(185,28,28,1)]'>
			<div className='flex justify-center px-px pt-px'>
				<LazyLoadImage placeholderSrc={mars} src={img_src} effect='blur' className='w-full ' />
			</div>
			<div className='flex w-full p-2 '>
				<div className='grid w-full grid-cols-2'>
					<p className='font-bold text-orange-700'>
						Picture Id: <span className='text-red-400'>{id}</span>
					</p>
					<p className='font-bold text-orange-700'>
						Rover: <span className='text-red-400'>{rover.name}</span>
					</p>
					<p className='font-bold text-orange-700'>
						Date: <span className='text-red-400'>{earth_date}</span>
					</p>
					<p className='font-bold text-orange-700'>
						Camera: <span className='text-red-400'>{camera.name}</span>
					</p>
				</div>
			</div>
			<a
				href={img_src}
				download
				target='_blank'
				className='absolute flex items-center justify-center text-red-800 border-2 border-red-800 rounded-full w-7 h-7 right-3 bottom-3'
				rel='noreferrer'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={3}
					stroke='currentColor'
					className='w-4 h-4'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
					/>
				</svg>
			</a>
		</div>
	)
}

export default Polaroid
