module.exports = function toReadable(number) {
	let one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	let two = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	let three = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
	let res = []

	let arrNum = number.toString().split('')

	if (arrNum.length === 3) {
		for (let i = 0; i < arrNum.length; i++) {
			const element = arrNum[i];
			if (i == 0) {
				res.push(one[element] + ' hundred')
			}
			if (i == 1) {
				if (arrNum[i] == '1') {
					res.push(three[arrNum[i + 1]])
					i = i + 2
				} else {
					res.push(two[element])
				}

			}
			if (i == 2) {
				if (element == '0') {
					continue
				}
				res.push(one[+element]);
			}

		}
	}

	if (arrNum.length === 2) {
		if (number >= 10 && number < 20) {
			res.push(three[arrNum[1]])
		} else if (number % 10 == 0) {
			res.push(two[arrNum[0]])
		} else {
			for (let i = 0; i < arrNum.length; i++) {
				const element = arrNum[i];
				if (i == 0) {
					res.push(two[element])
				} else {
					res.push(one[element])
				}
			}
		}
	}

	if (arrNum.length === 1) {
		for (let i = 0; i < arrNum.length; i++) {
			const element = arrNum[i];
			res.push(one[+element]);
		}
	}

	return res.filter(item => item !== '').join(' ').trim()


}