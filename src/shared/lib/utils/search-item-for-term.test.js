import { searchItemForTerm } from './search-item-for-term'

const items = [
	{ name: 'Leanne Graham', username: 'Bret' },
	{ name: 'Ervin Howell', username: 'Antonette' },
	{ name: 'Ervin Howell', username: 'Antonette' },
	{ name: 'Clementine Bauch', username: 'Samantha' },
	{ name: 'Patricia Lebsack', username: 'Karianne' },
]

describe('searchItemForTerm', () => {
	test('Поиск по полному совпадению', () => {
		expect(searchItemForTerm(items, 'name', 'Leanne Graham')).toEqual([
			{ name: 'Leanne Graham', username: 'Bret' },
		])
		expect(searchItemForTerm(items, 'name', 'Ervin Howell')).toEqual([
			{ name: 'Ervin Howell', username: 'Antonette' },
			{ name: 'Ervin Howell', username: 'Antonette' },
		])
	})

	test('Поиск по частичному совпадению', () => {
		expect(searchItemForTerm(items, 'name', 'Lea')).toEqual([
			{ name: 'Leanne Graham', username: 'Bret' },
		])
		expect(searchItemForTerm(items, 'name', 'Erv')).toEqual([
			{ name: 'Ervin Howell', username: 'Antonette' },
			{ name: 'Ervin Howell', username: 'Antonette' },
		])
	})

	test('Тест на регистронезависимость', () => {
		expect(searchItemForTerm(items, 'name', 'lea')).toEqual([
			{ name: 'Leanne Graham', username: 'Bret' },
		])
	})

	test('Пустой поиск', () => {
		expect(searchItemForTerm(items, 'name', '')).toEqual([
			{ name: 'Leanne Graham', username: 'Bret' },
			{ name: 'Ervin Howell', username: 'Antonette' },
			{ name: 'Ervin Howell', username: 'Antonette' },
			{ name: 'Clementine Bauch', username: 'Samantha' },
			{ name: 'Patricia Lebsack', username: 'Karianne' },
		])
	})
})
