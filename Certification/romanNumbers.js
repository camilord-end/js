function convertToRoman(num) {
    if (num<1){
        return "";
    }
    if (num>999){
        return "M" + convertToRoman(num-1000);
    }
    if (num>899){
        return "CM" + convertToRoman(num-900);
    }
    if (num>499){
        return "D" + convertToRoman(num-500);
    }
    if (num>399){
        return "CD" + convertToRoman(num-400);
    }
    if (num>99){
        return "C" + convertToRoman(num-100);
    }
    if (num>89){
        return "XC"+ convertToRoman(num-90);
    }
    if (num>49){
        return "L"+ convertToRoman(num-50);
    }
    if (num>39){
        return "XL"+ convertToRoman(num-40);
    }
    if (num>9){
        return "X"+ convertToRoman(num-10);
    }
    if (num>8){
        return "IX";
    }
    if (num>4){
        return "V"+ convertToRoman(num-5);
    }
    if (num>3){
        return "IV"+ convertToRoman(num-4);
    }
    if (num>0){
        return "I"+convertToRoman(num-1);
    }
    return num;
   }  
   /* test */
   convertToRoman(36);