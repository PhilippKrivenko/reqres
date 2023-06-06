export default class ReqresService {
	_apiBase = 'https://reqres.in/api'

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`)

		if (!res.ok) {
			throw new Error(
				`Could not fetch ${url} received ${res.status}`
			)
		}

		return await res.json()
	}

	getUsers = async () => {
		const res = await this.getResource('/users?page=2')

		return res.data.map(this._transformUsers).slice()
	}

	_transformUsers = (user) => {
		return {
			id: user.id,
			email: user.email,
			firstName: user.first_name,
			lastName: user.last_name,
			avatar: user.avatar,
		}
	}
}
