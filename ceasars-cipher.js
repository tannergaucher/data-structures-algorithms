// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

function rot13(str) {
  let answer = ''
  const cipher = {
    A: { deciphered: 'N' },
    B: { deciphered: 'O' },
    C: { deciphered: 'P' },
    D: { deciphered: 'Q' },
    E: { deciphered: 'R' },
    F: { deciphered: 'S' },
    G: { deciphered: 'T' },
    H: { deciphered: 'U' },
    I: { deciphered: 'V' },
    J: { deciphered: 'W' },
    K: { deciphered: 'X' },
    L: { deciphered: 'Y' },
    M: { deciphered: 'Z' },
    N: { deciphered: 'A' },
    O: { deciphered: 'B' },
    P: { deciphered: 'C' },
    Q: { deciphered: 'D' },
    R: { deciphered: 'E' },
    S: { deciphered: 'F' },
    T: { deciphered: 'G' },
    U: { deciphered: 'H' },
    V: { deciphered: 'I' },
    W: { deciphered: 'J' },
    X: { deciphered: 'K' },
    Y: { deciphered: 'L' },
    Z: { deciphered: 'M' },
    ' ': { deciphered: ' ' },
  }

  for (let letter in str) {
    const cipheredLetter = str[letter]
    answer += cipher[cipheredLetter].deciphered
  }

  return answer
}

rot13('SERR PBQR PNZC')
