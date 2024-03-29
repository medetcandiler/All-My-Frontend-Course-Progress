// What is object ? How is created?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
let arrayObj=[1, 2, 3, 4];
let firstObject={
    fname:1
}
console.log('type of arrayObj:', typeof arrayObj);
console.log('type of firstObject:', typeof firstObject)

//patika.dev exercise sample
let countriesTalkSpanish={
    continent:'South America',
    language:'Spanish'
}
countriesTalkSpanish={
    language:'spanish',
    continent:'south america'
}

console.log(countriesTalkSpanish,' countiries talk spanish')

//create an object
// with new Object
let item1=new Object();
//with object literal
let item2={}
console.log('{} =>', typeof item2)
item1.fname='hayday'
item1.lname='dardar'
console.log('new Object() =>', typeof item1, item1)
//with
let montevideo=Object.create(countriesTalkSpanish) // it doesn't refference countriesTalkSpanish it just copy it prototyp properties
montevideo.capitalCity='montevideo'
console.log(montevideo, 'create an object by using Object.create()')

// Objects are addressed by refference noy by value. 
let x='medetcan'
let y = x 
document.querySelector('#demo2').innerHTML= y
y='new value'
console.log(y, x) // y='trabzon' , x='medetcan'

let object={
    fname:'medet',
    lname:'diler',
    age:'26'
}
let z=object
z.lname='diler yeni'
console.log(object, z) // if you changed to z.lname it affect main object because the objects addressed by refference not by value.

// CHECKING OF OBJECT AND PRIMITIVE DATAS ADRESSED METHOD
let str='medetcan'
let str2='medetcan'
console.log(str === str2, 'str == str2') // it returns true because primitive dates addressed by value 

let obj={fname:'medetcan'}
let obj2={fname:'medetcan'}
console.log(obj === obj2, 'obj == obj1') // even if they have exactly the same value it returs false because object addressed by refference not by value 

//objects consists of proporties and values 
// accessing js properties 
console.log(object.fname)
console.log(object['fname'])
a='fname'
console.log(object[a])  // all of them reach the fname value which is 'medet'

document.querySelector('#info').innerHTML= `person is ${object.age} and his last name is ${object.lname}`

// js for..in loop loops through the properties of object.
let text=''
for(let x in object){
    text += ` ${object[x]}`
    document.querySelector('#info').innerHTML= text
}

//adding new properties 
console.log('before adding new properties:', object)
object.mothername='demet'
object.fathername='sahin'
console.log('after adding properties:', object)

for(let properties in object){
    text+= ` ${object[properties]}`
    document.querySelector('#info').innerHTML=text
}

//deleting properties by using 'delete' keyword 
delete object.fathername
console.log('after deleting fathername property by using delete key', object)

// use delete keyword just on objects 

//nested objects 
let myObject={
    name:'medet',
    age:'diler',
    cars:{
        car1:'bmw',
        car2:'jeep',
        car3:'hyundai'
    }
}
console.log('------', myObject['cars']['car2'], myObject.cars.car2)
console.log(myObject) 
//to reach nested object element :
console.log(myObject.cars.car2) // return jeep  
console.log(myObject.cars['car1']) // return bmw

// nested arrays and objects 
let q = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
for(let x in myObj.cars){
    let a=myObj.cars[x].name;
    document.querySelector('#demo2').innerHTML+=  '<br><strong> ' + a + '</strong> <br>'
    for(let i in myObj.cars[x].models){
        let b=myObj.cars[x].models[i];
        document.querySelector('#demo2').innerHTML+= ' '+b
    }
}



for( let x in myObj){
    console.log('myobj deneme for...in-', x)
} // for..in with object 

let newArr=[1, 2, 3, 4, 5, 6]
for(let x in newArr){
    console.log('for in with array ==', newArr[x])
}// for..in with arrays return index numbers ----You must use person[x] in the loop.
//  person.x will not work (Because x is a variable).

for(let i in myObj.cars){
    q  += '<h1>' + myObj.cars[i].name + '</h1>'
    for(let k in myObj.cars[i].models){
        q+= `<p> ${myObj.cars[i].models[k]} </p>`
    }
}


document.querySelector('#demo').innerHTML=q

// what is this => in js the this refer to an object
//which object depends on how this is being invoked ( used or called)
// NOTE= this is not a variable. it is a keyword . you cannot change the value of this

const person={
    name:'aybis',
    lname:'erden',
    age:26,
    id:3434,
    fullName: function(){
        let fullName=` ${this.name.charAt(0).toUpperCase()+ this.name.slice(1)} ${this.lname.toUpperCase()}`
        return fullName
    }
} 
//fullName is an proporty  fullName() is an method returns the function
// we accessed our method by using person.fullName() 
// we can easily describe fullName() as a method of the person object, fullName as a property.
document.querySelector('#demo').innerHTML= person.fullName()


//USING Object.values() 
//any js object can be converted to array by using Object.values()

const newPerson={
    name:'mrt',
    lname:'diler',
    age:17,
    fullInfo: function(){
        let infoPerson=`the person is ${this.name} ${this.lname}. The person is ${this.age} years old`
        return infoPerson
    }
}
document.querySelector('#demo').innerHTML= newPerson.fullInfo()
const newPersonArr= Object.values(newPerson)
console.log(newPerson, 'object')
console.log(newPersonArr, 'our object converted to array by using Object.values()')

// USING JSON.stringfy()
// any js object can be converted to a string with js function JSON.stringfy()
const stringVersionOfObject= JSON.stringify(newPerson)
document.querySelector("#demo").innerHTML= stringVersionOfObject
console.log(stringVersionOfObject, typeof stringVersionOfObject, 'json.stringify function')

// Stringify dates 
// JSON.stringify converts dates in strings 
const dayObj={
    name:'medet',
    date: function(){ return new Date().getDay()}
}

// NOTE THAT JSON.stringify() does not stringify functions

// but also it is possibble to stringify array by usin JSON.stringify() function .
const array=[1, 2, 3, 4 ,5]
const arrayToString=JSON.stringify(array)
console.log('sample of stringifying array', arrayToString , typeof arrayToString)

