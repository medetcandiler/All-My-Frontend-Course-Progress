// object ve array destructuring nasil kullanilir
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
let demoDOM=document.querySelector('#demo')
let setting={
    userName:'meddo',
    password:'badPassword',
    isActive:false,
    ip:'127.x.x.x',
    serverName:'diler.org',
    domainName:'medet@diler.org'
}

let passwords = setting.password 
console.log('older destructure way ', passwords)
let userNamesis= setting.userName
console.log('older destructure way ', userNamesis)

//***********OBJE ICINDEKI BILGILERIN TEK SEFERDE CIKARILMASI
//let userName= setting.userName  primitive way to reach object properties
//demoDOM.innerHTML= userName
//RENAME && DESTRUCTIRING

let { userName: user, password, isActive, serverName: serverIp,...restist} = setting
demoDOM.innerHTML=password + user
console.log( user,password, isActive, serverIp, 'values of object properties')

 // if we change the name of property when using destructiring it means renamed the decleration we need to use new name to reach them if we use first name of property we come across error.
 //we use destructiring with let decleration it means we cannot use them later because they are declerad with let keyword


//************* Obje icindeki bazi bilgilerin cikarilmasi */
let{userName:user2, password:pass, isActive:isActv, ip:serverIp2, ...restOfIt}= setting
console.log(user2, pass, isActv)

//objectin destructiring ile kopyalanmasi
let setting2= setting
setting2.newProperty='added'
console.log(setting, setting2, setting===setting2)
// objects addressed by refference not by value. primitive data types addressed by value not by refference.  I mean refference cannot be coppied. 
// it means when we refference an object to new declaration they carry exactly the same features. when you change one of them by adding new property both of them are affected by changes. 
//However there is a way to copy objects(also array objects) to new declaration by using {...Object} / [...Array] these commands allow us to copy objects.
// it means whenever we change coppy object it doesn't affect root object.

let setting3={...setting} // it copies the root object here and whenever we change setting3 properties values or add new value it does not affect root object
console.log(setting3===setting, setting3, setting)
setting3.afterCopy='new property added'
console.log('setting3: ',setting3,' setting:',setting ) 

let notes=[60, 20, 40, 50, 23]
let newNotes= notes 
console.log('notes===newNotes ?? ', notes===newNotes)
console.log('notes: ', notes,' newNotes', newNotes)
newNotes[notes.length-1]=34
console.log(notes, newNotes) // same thing because arrays are originally an object.
//they are addressed by refference not by value. 

myNotes=[...notes] // it allows us to copy notes to myNotes. whenever we change item of the new myNotes array it does not affect root notes array.
myNotes[0]=100
console.log('notes:', notes, 'myNotes:', myNotes)

let [firstScore, secondScore, ...others]= notes // if I forger to add (...) to the others it is became a thirh of array item.
demoDOM.innerHTML= ` my average not is ${(firstScore+secondScore)/2}`
console.log(others, firstScore, secondScore)

function sum(){
    for(let i=0; i<arguments.length; i++){

    }
}

//function 
//rest parameter (...)
//it allows a function to treat an indefinite number of arguments as an array 

function myFnc(...arguments){
    let sum=0
    for(let x of arguments){
        sum += x
    }
    return sum
}
console.log(myFnc(1, 2, 3, 4,5,6, 7, 8, 9), 'sum function')

const subtraction=(sayilar)=>{
    return num1 - num2
}
const sayilar={
    sayi1: 5,
    sayi2: 3
}
let {sayi1:num1, sayi2:num2}= sayilar
console.log(subtraction(sayilar))



// PRACTICE AREA 

let mySettings={
    userNames:'meddo',
    passs:'badPassword',
    isActives:false,
    ip:'127.x.x.x',
    serverNames:'diler.org',
    domainNames: {
        id3:'132.00.00.xx',
        servers:'diler.org'
    }
}

let denemek= {...mySettings} // copy way 
denemek.userNames= ' alirliarrs'
console.log(denemek);
console.log(mySettings);

let denemek2=Object.assign({}, mySettings) // another coppy way
denemek2.userNames='denemeksdfsddsf'
console.log(denemek2, 'denemekl2', mySettings);


let scores=[1, 2, 3, 4, 5]
scores2= JSON.parse(JSON.stringify(scores)) // way of copy 
scores2[Math.floor(scores2.length/2)]= 12
console.log(scores2);
console.log(scores);



const person={
    name: 'aybis',
    age:  33,
    languages: {
        native: 'englusg',
        secong: 'trksh'
    }
}

const person2={
    name: 'medet',
    age:  26,
    favoriteFood:'tiramisu',
    languages: {
        native: 'eng',
        second: 'tr'
    }
}

function printSth({name, age, favoriteFood='pizza'}){
    console.log(name, age, favoriteFood);
}


printSth(person2)

function fncWithRest(...arg){
    let number=0
    let x=4
    for(let x of arg){
        number += x
    }
    document.querySelector('#demo').innerHTML=number
}

fncWithRest(1, 3, 4, 5 ,6 )

