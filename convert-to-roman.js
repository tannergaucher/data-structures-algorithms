/*
Convert the given number to a roman numeral. 
All roman numerals should be given in upper case.
*/

// function convertToRoman(num) {
//   let answer = ''
//   const arr = [
//     { value: 1000, numeral: 'M' },
//     { value: 500, numeral: 'D' },
//     { value: 100, numeral: 'C' },
//     { value: 50, numeral: 'L' },
//     { value: 10, numeral: 'X' },
//     { value: 5, numeral: 'V' },
//     { value: 1, numeral: 'I' },
//   ]

//   while (num >= 0) {
//     // iterate arr
//     for (let obj in arr) {
//       // concat numeral to answer
//       if (num >= arr[obj].value) {
//         // subtract value from num
//         answer += arr[obj].numeral
//         num += arr[obj].value
//       }
//     }
//   }

//   return answer
// }

// convertToRoman(36)
