import React from 'react'
import { useDispatch } from 'react-redux'
import { searchPanel } from '../../store/reqresSlice'

const SearchPanel = () => {
	const dispatch = useDispatch()

	const onSearchChange = (event) => {
		event.preventDefault()
		const term = event.target.value

		dispatch(searchPanel(term))
	}

	return (
		<input
			type="text"
			placeholder="type to search"
			onChange={onSearchChange}
		/>
	)
}

export default SearchPanel
