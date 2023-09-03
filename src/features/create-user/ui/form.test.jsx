import { Form } from './form'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Form', () => {
	test('Shoot render', () => {
		render(<Form />)

		expect(screen.getByText(/first name/i)).toBeInTheDocument()
	})
})
