import React from 'react'

const SearchPanel = ({ onSearch }) => {
	return <input type="text" placeholder="type to search" onChange={onSearch} />
}

export default SearchPanel
