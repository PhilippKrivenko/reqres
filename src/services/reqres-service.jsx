export default class ReqresService {
	_apiBase = 'https://reqres.in/api'

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`)

		if (!res.ok) {
			throw new Error(
				`Could not fetch ${url} received ${res.status}`
			)
		}

		return res.json()
	}

	getAllUsers = async () => {
		const res = await this.getResource('/users/')

		return {
			data: res.data.map(this._transformUser),
			pageInfo: this._transformPageInfo(res),
		}
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
