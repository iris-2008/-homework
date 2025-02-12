function stringСorrection(str) {
	return str.toLowerCase()
}

function truncateString(str, maxLength) {
	if (str.length <= maxLength) {
		return str
	}

	let lastSpaceOrPunctuation = -1
	const punctuationMarks = ['.', ',', '!', '?', ':', ';', '/']
	for (let i = maxLength - 1; i >= 0; i--) {
		if (str[i] === ' ' || punctuationMarks.includes(str[i])) {
			lastSpaceOrPunctuation = i
			break
		}
	}

	if (lastSpaceOrPunctuation !== -1) {
		return str.substring(0, lastSpaceOrPunctuation + 1) + '...'
	} else {
		return str.substring(0, maxLength) + '...'
	}
}

function isSubstring(str1, str2) {
	return str1.includes(str2) || str2.includes(str1)
}
