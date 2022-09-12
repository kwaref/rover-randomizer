import axios from 'axios'
import { API_KEY } from './index'

const getMaxsol = setMaxSol => {
	const maxSol = {}
	const queries = [
		`https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=${API_KEY}`,
		`https://api.nasa.gov/mars-photos/api/v1/manifests/opportunity?api_key=${API_KEY}`,
		`https://api.nasa.gov/mars-photos/api/v1/manifests/spirit?api_key=${API_KEY}`,
	]
	axios.all(queries.map(query => axios.get(query))).then(response => {
		maxSol.curiosity = response[0].data.photo_manifest.max_sol
		maxSol.opportunity = response[1].data.photo_manifest.max_sol
		maxSol.spirit = response[2].data.photo_manifest.max_sol
		setMaxSol(maxSol)
	})
}

export default getMaxsol
