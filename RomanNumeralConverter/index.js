function convertToRoman(num) {
    let roman='';
    let number = num;
    while(number>0){
       if(number>=1000){
        console.log('es mayor a 1000');
        number = number - 1000;
        roman = roman + 'M';
       }else if(number>=900){
        number = number - 900;
        roman = roman + 'CM';
       }else if(number>=500){
        number = number - 500;
        roman = roman + 'D';
       }else if(number>=400){
        number = number - 400;
        roman = roman + 'CD';
       }else if(number>=100){
        number = number - 100;
        roman = roman + 'C';
       }else if(number>=90){
        number = number - 90;
        roman = roman + 'XC';
       }else if(number>=50){
        number = number - 50;
        roman = roman + 'L';
       }else if(number>=40){
        number = number - 40;
        roman = roman + 'XL';
       }else if(number>=10){
        number = number - 10;
        roman = roman + 'X';
       }else if(number>=9){
        number = number - 9;
        roman = roman + 'IX';
       }else if(number>=5){
        number = number - 5;
        roman = roman + 'V';
       }else if(number>=4){
        number = number - 4;
        roman = roman + 'IV';
       }else if(number>=1){
        number = number - 1;
        roman = roman + 'I';
       }
    }
    return roman;
}