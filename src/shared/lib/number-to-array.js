export const numberToArray = (number) => {
	const array = []

	for (let count = 1; count <= number; count++) {
		array.push(count)
	}

	return array
}
