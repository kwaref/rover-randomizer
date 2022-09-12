import React, { useEffect, useState } from 'react'
import PolaroidList from '../polaroids/PolaroidList'
import getData from '../../api'
import getMaxsol from '../../api/getMaxSol'

const DashboardScreen = () => {
	const [photos, setPhotos] = useState(null)
	const [maxSol, setMaxSol] = useState({})
	const [retrieving, setRetrieving] = useState(false)

	const refresh = () => {
		setRetrieving(true)
		setPhotos(null)
		getData(setPhotos, maxSol, setRetrieving)
	}

	useEffect(() => {
		getMaxsol(setMaxSol)
	}, [])

	return (
		<div className='flex justify-center'>
			<div className='fixed z-50 flex items-center justify-between w-full px-5 py-4 bg-white shadow-2xl md:justify-center'>
				<div className='items-center text-2xl font-bold text-center text-red-800 lg:text-3xl'>Mars' pictures!</div>
				<div
					className={`p-1 ml-5 text-red-800 border-4 border-red-800 rounded-full cursor-pointer group hover:scale-110 ${
						!photos && !retrieving && 'animate-pulse'
					}`}
					onClick={() => refresh()}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={3}
						stroke='currentColor'
						className={`w-10 h-10 ${retrieving && 'animate-spin'}`}>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3'
						/>
					</svg>
				</div>
			</div>

			{retrieving ? (
				<div className='h-screen'>
					<div className='flex items-center justify-center font-extrabold text-red-800 h-2/3 animate-ping'>
						Loading...
					</div>
				</div>
			) : (
				<PolaroidList pictures={photos} />
			)}
		</div>
	)
}

export default DashboardScreen
