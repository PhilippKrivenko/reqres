import { numberToArray } from './number-to-array'

describe('numberToArray', () => {
	test('Корректное значение', () => {
		expect(numberToArray(2)).toEqual([1, 2])
	})

	test('Не передали значение', () => {
		expect(numberToArray()).toEqual([])
	})

	test('Отрицание', () => {
		expect(numberToArray(2)).not.toEqual([1, 2, 3])
	})
})
