/************ If (koşullarla) calismak ********/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else


// İf user name exist then you print the name on screen
// İf (userName.length > 0) {consolo.log(userName)} else {console.log("bilgi yok")}


// let userName="medetcan"
// if (userName.length > 0 ){
//     let y=document.querySelector("#name").innerHTML= userName + "deneme"
//     document.querySelector("#name").style.color="red"
// }

//let userName=prompt("Kullanici adinizi giriniz", "Yalnızca karakter")


/*if (userName.length > 0 & isNaN(userName)){
    let writeName=document.querySelector("#name").innerHTML=userName
    document.querySelector("#name").style.color="red"
}*/



// if (person != null){
//     let writePerson=document.querySelector("#name").innerHTML= ` 
//     <h1 style="background-color: red ;" >Hello ${person} welcome to our new website </h1>
//     `
// }

// let person=prompt("Type your username", "Harry Potter")
// if (isNaN(person)){
//     let write=document.querySelector("#name")
//     write.innerHTML+= "" + person
//}

// let userName=prompt("Write your user name", "use just letters")
// if (isNaN(userName) && userName.length > 0 ){
//     let write=document.querySelector("#name").innerHTML=userName

// }
// let userName=prompt("kullanici ismini giriniz")
// if (userName.length > 0 ){  //if kismi her zmaan dogruysa calisir.
//     console.log(`Kullanici İsminiz: ${userName}`)
// } 
// else {
//     console.log("bilgi yok")
// }

// if (userName){  // bu şekilde direk true ise yi vermiş oluyorum
//     console.log(` Kullanici bilginiz: ${userName}`)
// }else 
//     console.log("bilgi yok")


/*let x= 2
let y=7 
if (x>y){
    console.log(`${x} sayisi ${y} sayisindan büyüktür`)
}
else console.log(`${x} sayisi ${y} sayisindan küçüktür`)*/


let note=document.querySelector("#name")

let vize="80"
let final="60"
let dönemSonu= (vize*0.3 + final*0.7) 
console.log(dönemSonu)
if (dönemSonu <= 30){
    note.innerHTML= dönemSonu + " ff - kaldi"
}
else if(dönemSonu >= 31 && dönemSonu <= 49 ) {
    note.innerHTML= dönemSonu + " dc - sorumlu gecti"
}
else if(dönemSonu >= 50 && dönemSonu <=74){
    note.innerHTML=dönemSonu + " cc - geçti"
} 
else if(dönemSonu >=75 && dönemSonu >=100){
    note.innerHTML=dönemSonu + " aa - başarıyla geçti"
}


let randomNumber= Math.floor(Math.random()*10)
console.log(randomNumber)
let clickBtn=document.querySelector("#btn").addEventListener("click", fnc)
function fnc(){
    let myGues=document.querySelector("#input").value;
    if ( myGues==randomNumber && myGues != null) alert("Congragulations your gues true")
    else if( myGues == "") alert("please write something")
    else if ( myGues !== randomNumber) alert("Your gues wrong number:"+ randomNumber +" Try again")
}

// if (myGues === randomNumber && myGues != null ) alert("bildin");
// else if( myGues == "") alert("boş girdiniz")
// else if ( myGues == null ) alert("vazgeçtiniz")
// else if ( myGues !== randomNumber) alert("yankış bildiniz tekrar deneyin" + randomNumber)