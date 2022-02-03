function palindrome(arr){
    var fixedArr = "";
    fixedArr=transform(arr);
    var lowerLimit = 0;
    var upperLimit = fixedArr.length-1;
    if (fixedArr.length == 0){
        return true // i read that an empty string is considered a palyndrome
    }
    return check(fixedArr,lowerLimit,upperLimit);
}
function transform(arr){
    const myRegex = /[^A-Za-z0-9]/g;
    return arr.replace(myRegex,"").toLowerCase();
}

function check(arr,l,u){
    if (l==u){
        return true
    }
    if (arr[l]!=arr[u]){
        return false
    }
    if (l<u+1){
        return check(arr,l+1,u-1)
    }
    return true
}
palindrome("eye");