const palindrome = require('./palindromeChecker')

// palindrome returns true
test(`expect palindrome to return true`, () => {
  expect(palindrome('racecar').toBe(true))
})

// non palindrome returns false
test(`expect non palindrome to return false`, () => {
  expect(palindrome('tanner').toBe(false))
})

// palindrome with non-alpha numeric chars returns true

// palindrome with mixed cases returns true

// palindrome with spaces returns true
