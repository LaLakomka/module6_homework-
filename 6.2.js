function getNums(num) {
  if (num > 1000) {
    return "Данные не верны"
  }
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0){
      return "сложное число"
    } 
  } 
  
  if (num > 1) {
      return "простое";
  }
}


console.log(getNums(6))