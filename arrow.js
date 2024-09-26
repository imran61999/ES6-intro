function add(a , b){
    const result=  a+b;
    return result;
}

// function expression or nam nai bole etake annonymas function bole.
const add2 = function(a , b){
    return a+b;
}

// arrow function
const add3= (a, b) => a+b;
const add4 = (num1 , num2, num3) => num1 + num2 + num3 ;

const sum4 = add4(4, 90, 8 );
console.log(sum4);