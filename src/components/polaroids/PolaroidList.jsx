import React from 'react'
import Polaroid from './Polaroid'

const PolaroidList = ({ pictures }) => {
	return (
		<div className='py-6 bg-white sm:py-8 lg:py-12'>
			<div className='px-4 mx-auto max-w-screen-2xl md:px-8'>
				<div className='grid items-end justify-center gap-6 mt-20 sm:grid-cols-2 lg:grid-cols-3 md:gap-8'>
					{pictures && pictures.map((picture, index) => <Polaroid key={picture.id} {...picture} />)}
				</div>
			</div>
		</div>
	)
}

export default PolaroidList
