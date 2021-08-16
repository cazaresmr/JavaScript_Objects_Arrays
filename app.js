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

/*
let withReduce = numbers.reduce((sum, value) => {
  return sum += value;
});

console.log(withReduce);
*/

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n")

const book = {};
book.title = "1984";
book.pages = 304;
book.readCount = 3;
book.info = function () {
	return `I have read all ${this.pages} pages of George Orwell's "${this.title}" at least ${this.readCount} times.`
}

book.info();