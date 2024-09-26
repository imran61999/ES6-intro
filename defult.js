// default --> if value is not provided, take this as a default.
function add(num1=0  , num2 = 0){
    let sum = num1 + num2;
    console.log(num1 , num2 , sum);
}

// add(7 , 8);
// add(8 , );
add();

function fulname(first='' , last=''){
    const name = first + ' ' + last ; 
    console.log(name);
}
fulname();