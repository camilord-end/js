function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    return giveChange(change,cid);
}
function cidTotalMoney(cid){
    if (cid.length==1){
        return cid[0][1];
    }
    if (cid.length>1){
        return cid[0][1] + cidTotalMoney(cid.slice(1));
    }
}
function giveChange(change, cid){
    let arrCurrency = [
        ["ONE HUNDRED", 100], 
        ["TWENTY", 20], 
        ["TEN", 10], 
        ["FIVE", 5], 
        ["ONE", 1], 
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]]
    const originalChange=change;
    var output = {
        status: '',
        change: []
    }
    cid.reverse();
    var result = [...arrCurrency];
    for(let i = 0; i<arrCurrency.length; i++){
        let returnMoney = 0; 
        let bill = cid[i][1]/arrCurrency[i][1]
        bill.toFixed(2);
        while(change.toFixed(2)>=arrCurrency[i][1] && bill>=1){
            change -= arrCurrency[i][1];
            returnMoney += arrCurrency[i][1];
            bill--;
        }
        if(returnMoney>0){
            if(returnMoney - Math.floor(returnMoney) !== 0){
                result[i][1]= returnMoney.toFixed(2)
                result[i][1] = parseFloat(result[i][1])
            }else{
                result[i][1]= returnMoney;
            }
        }
        else{
            result[i][1]= returnMoney;
        }
    }
    //having to put some decimals to avoid problems in operations
    let sumResult = 0;
    for(let i = 0; i<cid.length; i++){
        sumResult += result[i][1];
    }
    sumResult = sumResult.toFixed(2);

    if(cidTotalMoney(cid) < originalChange || sumResult < originalChange){
        output.status = 'INSUFFICIENT_FUNDS';
    }else if(cidTotalMoney(cid) == originalChange){
        output.status = 'CLOSED';
        output.change = cid;
    }else{
        let resultFiltered =[];
        for(let a = 0; a<result.length; a++){
            if(result[a][1]!==0){
                resultFiltered.push(result[a]);  
            } 
        }
        output.status = 'OPEN';
        output.change = resultFiltered;
    }
    return output;
}
//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))