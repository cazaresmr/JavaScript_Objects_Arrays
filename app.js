console.log("Hello World!\n==========\n")

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n")

const numbers = [2, 22, 12, 17, 18, 39, 129]
let sum = 0
function arraySum(numbers) {
	numbers.forEach((number, index) => {
		sum = sum + numbers[index]
	})
	return sum
}

console.log(arraySum(numbers))

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n")

const book = {}
book.title = "1984"
book.pages = 304
book.readCount = 3
book.info = function () {
	let statement = `I have read all ${book.pages} pages of George Orwell's "${book.title}" at least ${book.readCount} times.`
	console.log(statement)
}
console.log(book.info())
