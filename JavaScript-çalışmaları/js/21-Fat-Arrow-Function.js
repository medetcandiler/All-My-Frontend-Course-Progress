/********factorial sample */
// // function factorial(n=""){
// //     if (n<0) {
// //         return -1
// //     }
// //     else if ( n == 0 || n == 1){
// //         return 1
// //     }
// //     else {
// //         return n * factorial(n-1)
// //     }
// // }
// // let result = factorial()
// // document.querySelector("#deneme").innerHTML= result
// // console.log(""==0)



function hello(firstName){
    console.log(` Merhaba ${firstName}`)
}
hello("medetcan")

const greeting= (firstName)=> {console.log(`Hi! ${firstName}`)}
greeting("meddo")
/* as you see you can you fat arrow function without phrantesis but there is a one requirement for that if there is only one parameter and only one statament.. */  
const greeting2=firstName => console.log(`greeting2 ${firstName}`)
greeting2("aybis")
/*in below sample we try to create fat arrow function without phrantesis but it did not work because it did not obey the above rules*/ 
// const greeting3= firstName, lastName => console.log(`Hello! ${firstName} ${lastName}`)

const greeting4= (firstName, lastName) => console.log(`Hello: ${firstName},${lastName}`)
greeting4("meddo","diler")

const greeting5= (firstName, lastName)=> {
    
}

// without return function cannont return result outside  of the function
function medet(n){
    let info =` merhaba medet:${n}`
    
}
let x=medet("sadewqqwe")
console.log(medet("123"))
console.log(x)

const aybis= n => {
    let y= ` burasi mustur ${n}`
    return y
}
let deneme=aybis("123123123")
console.log(deneme)

let myList= (arr1, arr2)=>{
    let result= arr1.concat(arr2);
    console.log(result)
    return result
}
myList([1,2,3],[1,2,5,6])

const feedTheCat= (cat)=> {
    if(cat === "hungry"){
        return "feed the cat"
    }
    else {
        return "Do not feed the cat"
    }
}
console.log(feedTheCat(""))


/******** practice for fat arrow functions */
let text="";
const myFavoriteSeries= ["breaking bad", "prison break", "the ring of power", "sherlock holmes"];
myFavoriteSeries.forEach(myFunction);
document.querySelector("#deneme").innerHTML= text ;

function myFunction(item, index){
    text += index + ": "+ item + "<br>";
}


let sum=2;
let myNumbers=[44, 56, 65, 45, 23, 45]
myNumbers.forEach(addition)
let writeHtml=document.querySelector("#deneme").innerHTML= sum ;
function addition(item){
    sum+=` ,${item} ` 
}ß