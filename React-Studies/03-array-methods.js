const users=[{
    name:'medet',
    age:18
},
{
    name:'aybis',
    age:26
},
{
    name:'demos',
    age: 45
},
{
    name:'medet',
    age: 55
}]

/*
push
map
find
filter
some
every
include
*/

// push method adds a new element at the end of an array 
// users.push('ayse')
// users.push('dilara')
// console.log(users)



//**** map() methods create a new array from a calling function for ever array element... Map does not change the original array ..

// for( let i=0 ; i < users.length ; i++){
//     console.log(users[i])
// }

// let newUsers= users.map( ({name, age}, i) => console.log(name, 'names', age, 'ages', 'index:', i))


//*****find() method returns the value of first element that passes a test.  
// let findIt= users.find(element => element.name === 'medet' && element.age >= 20)
// console.log(findIt)

//**** filter() method creates a new array filled with elemenet that pass a test provided by a function 

// let filtered= users.filter( ({name,age}) => name == 'medet' && age>= 30)
// console.log(filtered)

//*****some() method if some elements are passed the test provided by function it returns true otherwise it returns false. 

// let isInclude=users.some( ({age}) => age > 60 )
// console.log(result)


// ****** every() method returns true if all elements are passed the test provided by function. otherwise it returns false

// let result= users.every( ({age}) => age >20)
// console.log(result)



// **** the include() method returns true if an array contains a specified value . it returns false if the value is not found

const fruits=['apple', 'orange', 'grape', 'peach', 'banana']

let isInclude= fruits.includes('mago')
console.log(isInclude)

