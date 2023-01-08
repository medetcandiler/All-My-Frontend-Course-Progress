//work with arrays and reach array elements

//create an array
let domain='kodluyoruz'
let isActive=false
let myArr=[1, 2, 3, domain, isActive]
console.log(myArr)

// myArr += ['burasi', 'mustur', 'yolu'] 
// myArr = ['burasi', 'mustur', 'yolu'] 
// console.log(myArr) we cannot add new array element our main array with these methods

let mySecondArr=[5, 6, 7, 8]
let newArray=myArr.concat(mySecondArr)
console.log(newArray)

let emptyArr=[] // empty list
let x=emptyArr.concat(['denemek', 'guseldir'])
console.log(x)

// array icindeki elemen/ oge sayisini olcmek
console.log(x.length)

// document.querySelector('#info').innerHTML+=' '+ x.length
const firstElement=myArr[0]
document.querySelector('#info').innerHTML= firstElement

// let fname='medetcan'
// let surName='diler'

// let camelName= fname.charAt(0).toUpperCase()+ fname.slice(1)
// document.querySelector('#info').innerHTML=camelName


