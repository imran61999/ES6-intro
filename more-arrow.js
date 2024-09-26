const diference = (x ,y) => x - y;
const multiply = (x , y) => x * y;

const getAge= (person) => person.age;
const student = {name: 'imran' , age: 25};
const age = getAge(student);
console.log(age);

const getThird = (num) => num[2];
const result = getThird([8, 5, 3, 7, 23, 45]);
console.log(result);