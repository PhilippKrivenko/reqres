export const numberToArray = (number = 0) => {
	const array = []

	for (let count = 1; count <= number; count++) {
		array.push(count)
	}

	return array
}
