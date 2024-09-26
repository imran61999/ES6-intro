const max = Math.max(8, 56, 45, 754,0);
console.log(max);
let arr = [8, 7, 5, 45, 34, 63, 57, 3];
const arraymax =Math.max(...arr);
console.log(...arr);
console.log(arraymax);

// use spread operator to copy
const friends = [7, 5 , 6, 5];
const bondhu =friends;
bondhu.push(8);
console.log(bondhu);
console.log(friends);

const dosto =[friends];
console.log(dosto);
