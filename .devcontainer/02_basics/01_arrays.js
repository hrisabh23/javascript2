//arrays

//declaration
const arr=[0,1,2,3,4]
// const arr2=["Hrisabh","Khushi"]
// const arr3=new Array(1,2,3,4)

//methods in arrays

//push and pop is same like stack that it will add/delete data from the last 
//unshift and shift will add/delete data from the first of the array

// arr.push(6)
// arr.pop()

// arr.unshift(3)
// arr.shift()

// console.log(arr.includes(9))//it will say true or false whether 9 is present in the arr or not


const newarr=arr.join()

console.log(arr)
console.log(newarr)

/*slice=it will not hamper the original array it will only return the value that
is given inside the square brackets excluding the last index*/

/*splice=it will hamper the original array and will return the the sliced array*/

const myar1=arr.slice(1,3)
console.log(myar1)
console.log("B",arr)

const myar2=arr.splice(1,3)
console.log("C",arr)
console.log(myar2)
