// referenced this solution to Chhaian Pin's algorithm, but i modified some parts of it.

function checkCashRegister (price, cash, cid) {
    const currencyAmount = {
      "PENNY": .01,
      "NICKEL": .05,
      "DIME": .10,
      "QUARTER": .25,
      "ONE": 1.00,
      "FIVE": 5.00,
      "TEN": 10.00,
      "TWENTY": 20.00,
      "ONE HUNDRED": 100.00
    }
  
    let totalCid = cid.reduce((acc, val) => acc + val[1], 0).toFixed(2)
    let change = cash - price;
    let changeArray = [];
  
    function getOpenChange(){
      for (let element of cid.reverse()) {
      let changePlaceholder = [element[0], 0];
      while (change >= currencyAmount[element[0]] && element[1] > 0) {
        changePlaceholder[1] += currencyAmount[element[0]];
        element[1] -= currencyAmount[element[0]];
        change -= currencyAmount[element[0]];
        change = change.toFixed(2);
      }
      if (changePlaceholder[1] > 0) changeArray.push(changePlaceholder)
    }}
  
    if (change.toFixed(2) === totalCid) {
      return { status: "CLOSED", change: cid };
    } else if (change > totalCid) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      getOpenChange()
      return change > 0? { status: "INSUFFICIENT_FUNDS", change: [] } : { status: "OPEN", change: changeArray};
    } 
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))