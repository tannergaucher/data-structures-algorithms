/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

*/

function palindrome(str) {
  // 1. remove non alpha-numeric with a regex
  // 2. push to 2 arrays
  // 3. iterate arrays, 1 from left, 1 from right, compare for equality

  const forwards = []
  const backwards = []

  str.split('').map(x => {
    forwards.push(x)
    backwards.push(x)
  })

  return forwards === backwards
}

palindrome('1 eye for of 1 eye')

module.exports = palindrome
