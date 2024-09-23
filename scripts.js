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
