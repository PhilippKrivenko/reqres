export const searchItemForTerm = (items, itemTerm, term) => {
	if (term.length === 0) {
		return items
	}
	return items.filter((item) =>
		item[itemTerm].toLowerCase().includes(term.toLowerCase())
	)
}
