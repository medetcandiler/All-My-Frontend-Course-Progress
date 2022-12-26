// ********** Karsilastirma Operatorleri ve Mantiksal Operatorler **********
// https://www.w3schools.com/js/js_comparisons.asp

let price=100
//COMPARİSON OPERATORS
// equal to --> ==   (eşitse)
console.log( price == 1)  //false
console.log( price == 100)  //true 


// equal value and equal type to --> ===   (hem değeri hemde türü eşitse)
console.log(price === 100) // true 
let price2="100"
console.log(price2 === 100) // false  price2 is string 100 is number these not equal type to .


// not equal to --> !=  (eşit değilsee ..)
console.log(price != 1)
let user="medet"
console.log(user != "guest")  // returns true bacause user not equal to guest
//yukarıda yapmak istediğim misafir olmayanlara true döndürmek..
let user2="guest"
console.log( user2 != "guest") //returns false because user2 equal to guest


//Less than "<"
console.log(price<100) //returns false because price not less than 100

//less than or equal to "<="
console.log(price<=100) //returns true because price equal to 100


//greater than ">"
console.log(price>100) // returns false because price not grater than 100

//greater than ">="
console.log(price>=100) //returns true because price equal to 100


// LOGİCAL OPERATORS
//"&&" and     (ve)
console.log(price>50 && price===Number(100))
console.log(price && user != "guest" ) //returns true because price and user not equal to guest 
console.log(price>=50 && user != "guest")  //true

price=0
console.log(price>0 && user!="guest") //false because price not greater than 0
 

// "||" or   (veya)
console.log(price>0 || user != "guest") // returns true because one of them is true in or logical operator


// ! NOT  (DEĞİL / TERSİ )
price=75
user="guest"
console.log(price > 0 && !user == "guest" ) // returns false because user not equal to guest
console.log(!user=="guest") // false  (kullanıcı user değilse)
console.log(user=="guest") // true 



//practice 
console.log(!!2) //true
console.log(!!"deneme") //true
console.log(!2)   //false 
console.log(!"deneme")  //false 



//check voters age 

// let btn=document.querySelector("#btn").addEventListener("click", myFnc)
// function myFnc(){
//     let voteable;
//     let age=Number(document.querySelector("#age").value)
//     if (isNaN(age)){
//         voteable.innerHTML = " input not a number"
//     }
//     else {
//         voteable.innerHTML = (age >= 18) ? "enoug to":"young to"
//     }
//     document.querySelector("#demo").innerHTML=voteable
// }


function myFnc(){
    let voteable=document.querySelector("#demo")
    let age=document.querySelector("#age").value
    if (isNaN(age)){
        voteable.innerHTML= "rakam yaz"
    }
    else {
        voteable.innerHTML = (age < 18 ) ? "too young" : " too old"
    }
    
    


}

