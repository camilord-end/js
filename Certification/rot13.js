function rot13(str) {
    if (!(/[A-Z]/).test(str[0]) && str.length>0){    
        return str[0] + rot13(str.slice(1))
    }
    if (!(/[A-Z]/).test(str[0]) && str.length==1 ){     
        return str[0] 
    }
    if (str.length>0 && str[0].charCodeAt()>77){
        return String.fromCharCode(str[0].charCodeAt(0)-13)+ rot13(str.slice(1));
    }
    if (str.length==1 && str[0].charCodeAt()>77){
        return String.fromCharCode(str[0].charCodeAt(0)-13)
    }
    if (str.length>0 && str[0].charCodeAt()<78){
        return String.fromCharCode(str[0].charCodeAt(0)+13)+ rot13(str.slice(1));
    }
    if (str.length>0 && str[0].charCodeAt()<78){
        return String.fromCharCode(str[0].charCodeAt(0)+13)
    }
    return str
  }
  console.log(rot13("SERR YBIR?"))
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
 