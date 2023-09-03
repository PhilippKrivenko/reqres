import { useState } from 'react'

export const useSearch = (initialTerm) => {
	const [term, setTerm] = useState(initialTerm)

	const onSearch = (e) => setTerm(e.target.value)

	return [term, onSearch]
}
