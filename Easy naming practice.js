function calculateSum(arrNubers) {
	let arrSum = 0
	arrNubers.forEach(element => {
		arrSum += element
	})
	return arrSum
}

let topCustomersArr = [10000, 20000, 30000]
console.log(calculateSum(topCustomersArr))
