import { baseApi } from './baseApi'

export const getReqresResource = async (url) => {
	const res = await fetch(`${baseApi}${url}`)

	if (!res.ok) {
		throw new Error(`Could not fetch ${url} received ${res.status}`)
	}

	return res.json()
}
