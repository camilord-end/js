function rot13(str) {
    if (!(/[A-Z]/).test(str[0]) && str.length>0){    
        return str[0] + rot13(str.slice(1))
    }
    if (!(/[A-Z]/).test(str[0]) && str.length==1 ){     
        return str[0] 
    }
    if ((/[A-Z]/).test(str[0]) && str.length>0 && str[0].charCodeAt(0)>77){
        return String.fromCharCode(str[0].charCodeAt(0)-13)+ rot13(str.slice(1));
    }
    if ((/[A-Z]/).test(str[0]) && str.length==1 && str[0].charCodeAt(0)>77){
        return String.fromCharCode(str[0].charCodeAt(0)-13)
    }
    if ((/[A-Z]/).test(str[0]) && str.length>0 && str[0].charCodeAt(0)<78){
        return String.fromCharCode(str[0].charCodeAt(0)+13)+ rot13(str.slice(1));
    }
    if ((/[A-Z]/).test(str[0]) && str.length>0 && str[0].charCodeAt(0)<78){
        return String.fromCharCode(str[0].charCodeAt(0)+13)
    }
    return str
  }
 