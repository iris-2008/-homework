function getSortedFieldsByValue(obj) {

	const numericFields = Object.entries(obj)
		.filter(([key, value]) => typeof value === 'number')
		.map(([key, value]) => ({ key, value }))

	numericFields.sort((a, b) => b.value - a.value)

	return numericFields.map(item => item.key)
}
