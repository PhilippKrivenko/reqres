export default class ReqresService {
	_apiBase = 'https://reqres.in/api'

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`)

		if (!res.ok) {
			throw new Error(`Could not fetch ${url} received ${res.status}`)
		}

		return res.json()
	}

	getUsers = async ({ page, perPage }) => {
		const res = await this.getResource(
			`/users?page=${page}&per_page=${perPage}`
		)

		return {
			data: res.data.map(this._transformUser),
			pageInfo: this._transformPageInfo(res),
		}
	}

	getUser = async (userId) => {
		const res = await this.getResource(`/users/${userId}`)

		return this._transformUser(res.data)
	}

	postUser = async (newUser) => {
		const res = await fetch(`${this._apiBase}/users?delay=3`, {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})

		if (!res.ok) {
			throw new Error(`Could not fetch received ${res.status}`)
		}

		return res.json()
	}

	_transformPageInfo = (pageInfo) => {
		return {
			currentPage: pageInfo.page,
			perPage: pageInfo.per_page,
			totalPer: pageInfo.total,
			totalPages: pageInfo.total_pages,
		}
	}

	_transformUser = (user) => {
		return {
			id: user.id,
			email: user.email,
			firstName: user.first_name,
			lastName: user.last_name,
			avatar: user.avatar,
		}
	}
}
