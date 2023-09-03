import { createUser } from './create'

describe('createUser', () => {
	test('Корректное значение', async () => {
		const newUser = {
			name: 'Leanne Graham',
			username: 'Bret',
			email: 'Sincere@april.biz',
		}

		const res = await createUser(newUser)

		expect(res.createdAt).toBeDefined()
	})

	test('Ошибка', async () => {
		try {
			await createUser()
		} catch (error) {
			expect(error.message).toBe('error')
		}
	})
})
