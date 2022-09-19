
/*
Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/
function checkCashRegister(price, cash, cid) {
    const change = cash - price;
    
    let obj={};
    obj.status="INSUFFICIENT_FUNDS";
    
    let currency={};
    currency.penny=0.01;
    currency.nickel=0.05;
    currency.dime=0.1;
    currency.quarter=0.25;
    currency.dollar=1;
    currency.five_dollar=5;
    currency.ten_dollar=10;
    currency.twenty_dollar=20;
    currency.hundred_dollar=100;
    let noChange=()=>{
     
        let sum=0;
        
        return sum!==change;

    }
    /*
if(noChange(change)){
    obj.change=[];
    return obj;
}
else if(change==cash){
    obj.status="CLOSED";
    obj.change=[];
}
else{
    obj.status="OPEN";
}
*/
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

    return cid;
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));