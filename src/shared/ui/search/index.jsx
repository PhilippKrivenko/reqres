import React from 'react'

export const SearchPanel = ({ onSearch }) => {
	return (
		<input type='text' placeholder='type to search' onChange={onSearch} />
	)
}
