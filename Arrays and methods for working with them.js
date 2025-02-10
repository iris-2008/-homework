
function mySlice(arr, start, end) {
	let newArr = []

	if (end < 0) {
		end = arr.length + end
	}
	if (start >= arr.length || end <= start) {
		console.log(newArr)
		return newArr
	}
	for (let i = 0; i < arr.length; i++) {
		if (start <= i) {
			newArr.push(arr[i])
			if (i === end - 1) {
				break
			}
		}
	}

	return newArr
}


function myIndexOf(arr, item, from = 0) {
	if (from < 0) {
		from = 0
	}

	if (from >= arr.length) {
		return -1
	}

	for (let i = from; i < arr.length; i++) {
		// Начинаем цикл с from
		if (arr[i] === item) {
			return i
		}
	}
	return -1
}


function myIncludes(arr, item, from = 0) {
	if (from < 0) {
		from = Math.max(0, arr.length + from)
	}

	for (let i = from; i < arr.length; i++) {
		if (arr[i] === item) {
			return true
		}
	}
	return false
}

