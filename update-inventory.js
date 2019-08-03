/*
Convert the given number to a roman numeral. 
All roman numerals should be given in upper case.
*/

function convertToRoman(num) {
  const answer = ''
  const obj = {
    1000: 'M',
    500: 'D',
    100: 'X',
    50: 'L',
    10: 'X',
    1: 'I',
  }

  for (let val in obj) {
    console.log(obj[val])
    if (num >= obj[val]) {
      console.log('foo')
    }
  }
}

convertToRoman(36)
