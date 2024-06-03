console.log("EXERCISE 1:\n==========\n");
// Exercise 1: The Sum of an Array

const numbers = [2, 22, 12, 17, 18, 39, 129];
let sum = 0;
function arraySum(numbers) {
  numbers.forEach((number, index) => {
    sum += numbers[index];
  });
  return sum;
}

console.log(arraySum(numbers));

console.log("\n");
console.log("EXERCISE 2:\n==========\n");
// Exercise 2: Favorite Book

const book = {};
book.title = "1984";
book.author = "George Orwell";
book.pages = 304;
book.haveRead = true;
book.readCount = 3;
book.info = function () {
  return `I have read all ${this.pages} pages of "${this.title}" by ${this.author} ${this.readCount} times.`;
};

console.log(book.info());

console.log("\n");
console.log("EXERCISE 3:\n==========\n");
// Exercise 3: Reverse a String

let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
  words[i] = words[i].split("").reverse().join("");
}
sentence = words.join(" ");
console.log(sentence);

console.log("\n");
console.log("EXERCISE 4:\n==========\n");
// Exercise 4: Parse a CSV

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function parseCSV(csv) {
  const rows = csv.split("\n");
  const headers = rows[0].split(",");
  const result = [];

  for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split(",");
    const obj = {};

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = values[j];
    }

    result.push(obj);
  }

  return result;
}

console.log(parseCSV(csvData));
