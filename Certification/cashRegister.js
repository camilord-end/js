function checkCashRegister(price, cash, cid) {
    let change=cash-price;
    if (cidTotalMoney(cid)<change){
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    return change;
  }
  function cidTotalMoney(cid){
      if (cid.length==1){
          return cid[0][1];
      }
      if (cid.length>1){
          return cid[0][1] + cidTotalMoney(cid.slice(1));
      }
  }
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  console.log(cidTotalMoney([["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
  