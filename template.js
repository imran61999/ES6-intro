const a= 90;
const  b= 80;
// normal use
const result = "the sum of" + ' '+ a + ' and ' + b +' is ' + ( a+b) ;
console.log(result);
// template use
const math = `The sum of ${a} and ${b} is ${a+b}`;
console.log(math);