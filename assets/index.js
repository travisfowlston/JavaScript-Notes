// JavaScript Array Notes
// array = A variable like structure that can hold more than 1 value

let numbers = [2, 1, 3, 9, 10, 7, 6, 8, 4, 5];

// numbers.sort((a, b) => (a - b)); = sorts the array in numerical order
// numbers.sort((a, b) => (b - a)); = sorts the array in reverse numerical order

let fruits = ["apple", "orange", "grape", "pineapple", "cherry", "banana"];

// fruits.sort(); = sorts the array in alphabetical order
// fruits.sort().reverse(); = sorts the array in reverse alphabetical order
// fruits.push("cucumber"); = adds element to the end of the array
// fruits.pop(); = removes last element of the array
// fruits.unshift("cucumber"); = adds element to the beginning of the array
// fruits.shift(); = removes first element of the array
// fruits.length; = gets the total number of elements in the array
// fruits.indexOf("apple"); = finds the index of the element, returns -1 if no index is found

// forEach() = used to iterate over the elements of an array and apply a specified function (callback) to each element.
// array.forEach(callback)
// element, index, array are provided

// map() = accepts a callback and applies it to each element in the array, then returns a new array with the results.

// filter() = creates a new array with all elements that pass the test implemented by the provided function.

// reduce() = applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

// This is a for loop that prints out each element in the array
/* for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
} */

// filter() method example
/* const filteredFruit = fruits.filter((fruit) => fruit.length > 5) // filters the array and returns a new array with elements that have a length greater than 5
console.log(filteredFruit)
// This is a function that deletes a fruit from the array using the filter method
function deleteFruit(index) {
  fruits = fruits.filter((_, i) => i !== index);
}
deleteFruit(1); */

// This is a function that adds a fruit to the array using the push method
/* function addFruit(fruit) {
  fruits.push(fruit);
} 
addFruit("cucumber");
addFruit("pear");
addFruit("grapefruit"); */

// foreach() method example
/* fruits.forEach((fruit) => console.log(fruit.charAt(0).toUpperCase() + fruit.slice(1))); // Capitalizes the first letter of each element in the array by passing in an element from the fruits array (such as apple) and console logging the first letter capitalized and the rest of the word sliced by getting the index of the first letter and slicing the rest of the word. Does not return a new array.

fruits.forEach(capitalize) // Executes a callback function on each element in the array. Change the callback to the function you want to execute.
fruits.forEach(display); // Displays the elements in the array

function display(element) {
  console.log(element);
}
function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}
function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
} */

// map() method example
/* const capitalizeFruit = fruits.map((fruit) => fruit.charAt(0).toUpperCase() + fruit.slice(1)); // Capitalizes the first letter of each element in the array and returns a new array
console.log(capitalizeFruit); */

// reduce() method example
/* const sum = numbers.reduce((previousNum, number) => previousNum + number); // Adds all the numbers in the array and returns the sum
console.log(sum.toFixed(2)); // Rounds the sum to 2 decimal places */

// console.log(fruits);
// console.log(numbers);

// This is a conditional statement that checks if the array has greater than or equal to 5 elements
/* if (fruits.length >= 5) {
  console.log("That's a lot of fruit!");
} else {
  console.log("That's not a lot of fruit, perhaps consider getting some more!");
} */
