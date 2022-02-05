function telephoneCheck(str){
    const myRegEx = /^((1\s*)(([(]\d{3}[)])|(\d{3}))|([(]\d{3}[)])|(\d{3}))(\s*|\-)\d{3}(\-|\s*)\d{4}$/g
    if (myRegEx.test(str)) {
      return true;
    }
    else {
      return false;
    }
  }
  console.log(telephoneCheck("1 555-555-5555"))
  //telephoneCheck("555-555-5555");