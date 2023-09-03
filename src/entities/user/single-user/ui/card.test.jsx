import { render, screen } from '@testing-library/react'

import { Card } from './card'

describe('Card component', () => {
	const data = {
		id: 2,
		email: 'sdvxc@reqres.in',
		firstName: 'Janet',
		lastName: 'Weaver',
		avatar: 'https://reqres.in/img/faces/2-image.jpg',
	}

	test('Card render', () => {
		// render(<Card user={data} />)
		// screen.debug()
		// const firstName = screen.getByRole('img')
		// expect(firstName).toBeInTheDocument()
	})
})
