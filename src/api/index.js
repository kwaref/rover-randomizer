import axios from 'axios'

const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1'
export const API_KEY = 'QAdoCVsYXPqUhs1RV9fcMfrT9c7ZFhAjjhuFoz8d'

const rovers = ['curiosity', 'spirit', 'opportunity']

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min
}

const index = async (setPhotos, maxSol = { curiosity: 3589, opportunity: 5111, spirit: 2208 }, setRetrieving) => {
	const num = getRndInteger(4, 7)
	const pic = []
	const queries = []
	while (queries.length < num) {
		const pos = getRndInteger(0, 3)
		const rover = rovers[pos]
		const sol = getRndInteger(1, maxSol[rover])
		queries.push(`${BASE_URL + '/rovers/' + rover + '/photos?sol=' + sol + '&api_key=' + API_KEY}`)
	}
	axios.all(queries.map(query => axios.get(query))).then(data => {
		data.forEach(item => {
			if (item.data.photos.length > 0) {
				const pos = getRndInteger(0, item.data.photos.length)
				pic.push(item.data.photos[pos])
			}
		})
		setPhotos(pic)
		setRetrieving(false)
	})
}

export default index
