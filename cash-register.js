/* 
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
  var change = cash - price

  const money = {
    'ONE HUNDRED': { value: 100, index: 8 },
    TWENTY: { value: 20, index: 7 },
    TEN: { value: 10, index: 6 },
    FIVE: { value: 5, index: 5 },
    ONE: { value: 1, index: 4 },
    QUARTER: { value: 0.25, index: 3 },
    DIME: { value: 0.1, index: 2 },
    NICKEL: { value: 0.05, index: 1 },
    PENNY: { value: 0.01, index: 0 },
  }

  while (change > 0) {
    for (let denomination in money) {
      if (change >= money[denomination].value) {
        //  update cid
        // console.log('change', change, 'CID', cid)
        cid[money[denomination].index][1] -= money[denomination].value
        //   decrement change
        change -= money[denomination].value
        // console.log('change', change, 'CID', cid)
        break
      }
    }
  }

  return change
}

checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
])
