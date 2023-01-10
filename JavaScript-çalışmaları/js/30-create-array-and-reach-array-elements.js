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
console.log('concat',newArray)
newArray+=[domain, isActive]
console.log('+=',newArray)
newArray=[domain]
document.querySelector('#info').innerHTML= newArray

let username='medetcan diler'
console.log('split method', username.split())


const reverseStr=(str)=>{
    let stringToArr=str.split('') // splits a string into array
    let reverseArr=stringToArr.reverse()  // reverse an array 
    let arrtoStr=reverseArr.join('') // returns an array as string
    return arrtoStr
}
console.log(reverseStr('aybiis'))

let items=['deneme', 'array', 'olusturuldu']
let newItems=items.concat(username)
console.log(newItems,'-----')
//document.querySelector('#info').innerHTML= newItems+'====='+ newItems.length

let arrToString=newItems.join()
console.log(arrToString, typeof arrToString)


let emptyArr=[];
let addItems=emptyArr.concat('deneme  yaptiim')
//document.querySelector('#info').innerHTML+= addItems

let x=[1, 2, 3, 4, 5, 6, 7]
// array icindeki elemen/ oge sayisini olcmek
console.log(x.length)

// document.querySelector('#info').innerHTML+=' '+ x.length

//*********** call the first element of array
const firstElement=myArr[0]
console.log(firstElement)
// document.querySelector('#info').innerHTML= firstElement


//************ call the last element of array */
console.log(x.slice(-1), typeof x )
console.log('call the last element of array', x[x.length-1])

//******** call the mid element of array */
x=[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('reach the middle element of array', x[Math.floor(x.length/2)])

/******** degisken icindeki bilginin array olup olmadigi kontrolu  */
console.log('checking if it is an array ', typeof x)  // object olarak gosteriyorr.isimize yaramadi

console.log(Array.isArray(x)) // (x array.isArray) if x is an array it returns true.

//************* Hangileri isArray -> returns true */

console.log('[] :',Array.isArray([]))
console.log('1 :' ,Array.isArray(1))
console.log('true :' ,Array.isArray(true))




// let name='medetcan'
// let email='medetdiler@gmail.com'

// let DOMAIN=email.slice(email.indexOf('@')+1)
// document.querySelector('#info').innerHTML= DOMAIN



let arr=[1, 2, ['bir', 'iki', 'uc'], 6]

for(let i=0; i < arr.length ; i++){
    console.log(arr[i],'for loop', typeof arr)
}
console.log(arr[2][3])  // array icindeki arraya ulasma yontemi [icerdeki arrayin index sayisi][icerdeki arrayin kacinci elemaninin indexi]

let denemeArr=[1, 2, 3, 4, 5 ,6]
// denemeArr.forEach((item, index)=> {
//     console.log(item)
// })

let myCars=['bmw', 'toyota', 'suzuki', [1, 2, 3, 4]]
let text=''
// myCars.forEach(myFnc)
// function myFnc(item, index){
//     text += index + ': ' + item + '<br>'
// }
myCars.forEach((items, index) => {
    text+=index+': ' +items + '<br>'
});
document.querySelector('#info2').innerHTML= text

let months=['january', 'februrary', 'march', 'april', 'may ']
console.log(months[months.length-1]) // last element of months array
console.log(months[0]) // first element of months array
console.log(months[Math.floor(months.length/2)])




//RECAP WHAT I HAVE LEARNT 

let myFavoriteAnimals=['butterfly', 'cat', 'dog', 'snake'];
for (let i=0; i < myFavoriteAnimals.length ; i++){
    document.querySelector('#info2').innerHTML += i+': '+myFavoriteAnimals[i]+'<br>';
}

let myFavCars=['bmw', 'mercedes', 'hyundayi',[2, 3, 4, 5], 'suzuki']
console.log(myFavCars[3][2]) 

let text2='';
myFavoriteAnimals.forEach((item, index) => {
    document.querySelector('#info').innerHTML+= index+ ': '+ item+'<br>'
});

console.log(myFavCars[Math.floor(myFavCars.length/2)])
console.log(myFavCars[myFavCars.length-1])

let compare=[]
let compare2=compare
console.log(compare == compare2)





