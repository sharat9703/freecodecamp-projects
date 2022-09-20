
/*
Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available {name:

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value:e for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value:e of the change key.
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
*/function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    
    let obj={};
    
    
    let currency=[
    {name:"PENNY", value:0.01},
    {name:"NICKEL", value:0.05},
    {name:"DIME", value:0.1},
    {name:"QUARTER", value:0.25},
    {name:"ONE", value:1},
    {name:"FIVE", value:5},
    {name:"TEN", value:10},
    {name:"TWENTY", value:20},
    {name:"ONE HUNDRED", value:100}
    ];
    
  currency.reverse();
//Syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
let cash_register = cid.reduce(function(accumulator, current) {
    accumulator.total = accumulator.total+current[1];
    accumulator[current[0]] = current[1];
    return accumulator;
    }, {total: 0});

if(cash_register.total==change){
        obj.status="CLOSED";
        obj.change=cid;
       return obj;
    }
    else if(cash_register.total<change){
        obj.status="INSUFFICIENT_FUNDS";
        obj.change=[];
       return obj;
    }
    let arrOfChange = currency.reduce((accumulator,current)=>{
        let value = 0;
        while(cash_register[current["name"]]>0 && change>=current["value"]){
            change -= current["value"];
            cash_register[current["name"]]-=current["value"];
            
            value+=current["value"];
            
            change= Math.round(change*100)/100;
        }
        if(value>0){
         accumulator.push([current["name"],value]);
        }
        return accumulator;
    },[]);

    
    

   if(arrOfChange.length<1||change>0){
    obj.status="INSUFFICIENT_FUNDS";
    obj.change=[];
  return obj;
    }
    
        obj.status="OPEN";
        obj.change=arrOfChange; 
        return obj;   
}
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));