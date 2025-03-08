const marval=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

// marval.push(dc)//not a good method to add different arrays

// console.log(marval)

// const allheros=marval.concat(dc)//very good method but we need to declare a new variables to do that
// console.log(allheros)

// //excellent and widely used method

// const alheros1=[...marval,...dc]
// console.log(alheros1)

// //if the situation is having multiple arrays in the single array 

// const anotherarray=[1,2,3,[4,5,6],7,[6,[4,5]]]

// const anotherarray2=anotherarray.flat(Infinity)
// console.log(anotherarray2)

//more things to learn

console.log(Array.isArray("Hrisabh"))
console.log(Array.from("Hrisabh"))
console.log(Array.from({name:"Hrisabh"}))// very interetsing cas fopr the interviews

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))