let rango = /[a-z0-9]/ig;
/* function palindrome(str) {
  const result = str.toLowerCase().match(rango);
  console.log(result)
  const resultInv = [];
  let validador = false;
  result.forEach(element => {
    resultInv.unshift(element)
  });
  console.log(resultInv)
  for(let i=0;i<result.length;i++){
    if(result[0]===resultInv[0]){
      validador = true;
    }
  }
  return validador
} */
const Palindrome = (str) =>{
  const result = str.toLowerCase().match(rango);
  let validator = false;
  console.log(result.length)
  for(let i=0;i<result.length;i++){
    if(result[i]===result[result.length-1-i]){
      validator = true;
    }else{
      validator = false;
      break;
    }
  }
  return validator
}
console.log(Palindrome("eye"));
