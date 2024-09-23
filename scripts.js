// ALAB 308.5.1: Creating Reusable Functions

// Part 1: Thinking Functionally

//Take an array of numbers and return the sum.
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

//Take an array of numbers and return the average.
function average(numbers) {
  return sum(numbers) / numbers.length;
}
//Take an array of strings and return the longest string.
function longestString(strings) {
  let longest = "";
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longest.length) {
      longest = strings[i];
    }
  }
  return longest;
}

//Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringsLongerThan(strings, length) {
  let longStrings = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > length) {
      longStrings.push(strings[i]);
    }
  }
  return longStrings;
}
//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function countUp(n) {
  if (n > 1) {
    countUp(n - 1);
  }
  console.log(n);
}

countUp(5);

//Part 2: Thinking Methodically
// When functions are built into objects, like Arrays, they are referred to as “methods” of those objects. Many methods, including Array methods, require “callback functions” to determine their behavior.
// For the tasks below, use the following data to test your work:
// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// Use callback functions alongside Array methods to accomplish the following:
// Sort the array by age.
// Filter the array to remove entries with an age greater than 50.
// Map the array to change the “occupation” key to “job” and increment every age by 1.
// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.

const people = [];
people.push({ id: "42", name: "Bruce", occupation: "Knight", age: "41" });
people.push({ id: "48", name: "Barry", occupation: "Runner", age: "25" });
people.push({ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" });
people.push({ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" });
people.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// Sort the array by age.
people.sort((a, b) => b.age - a.age);
console.log(people);
// Filter the array to remove entries with an age greater than 50.
const under50 = people.filter((person) => person.age <= 50);
console.log(under50);

// Map the array to change the “occupation” key to “job” and increment every age by 1.
const newPeople = people.map((person) => {
  return {
    id: person.id,
    name: person.name,
    job: person.occupation,
    age: parseInt(person.age) + 1,
  };
});
console.log(newPeople);

// Use the reduce method to calculate the sum of the ages.
const totalAge = people.reduce(
  (total, person) => total + parseInt(person.age),
  0
);
console.log(totalAge);
