function game() {
	const computer1 = Math.floor(Math.random() * 100)

	let guessed = false
	let minNumber = 0
	let maxNumber = 100
	let estimatedNumber = 50
	console.log(computer1)

	for (let i = 0; !guessed; i++) {
		console.log(`Компьютер 2: Пробую число ${estimatedNumber}.`)

		if (estimatedNumber > computer1) {
			console.log('Компьютер 1: Меньше.')
			maxNumber = estimatedNumber - 1
			estimatedNumber = Math.floor((minNumber + maxNumber) / 2)
		} else if (estimatedNumber < computer1) {
			console.log('Компьютер 1: Больше.')
			minNumber = estimatedNumber + 1
			estimatedNumber = Math.floor((minNumber + maxNumber) / 2)
		} else {
			console.log('Компьютер 1: Угадал!')
			guessed = true
		}
	}
}

game()
