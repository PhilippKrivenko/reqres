import React from 'react'

const SearchPanel = ({ onSearchChange }) => {
	return (
		<input
			type="text"
			placeholder="type to search"
			onChange={onSearchChange}
		/>
	)
}

export default SearchPanel
