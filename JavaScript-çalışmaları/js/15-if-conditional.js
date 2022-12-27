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


// let note=document.querySelector("#name")

// let vize="80"
// let final="60"
// let dönemSonu= (vize*0.3 + final*0.7) 
// console.log(dönemSonu)
// if (dönemSonu <= 30){
//     note.innerHTML= dönemSonu + " ff - kaldi"
// }
// else if(dönemSonu >= 31 && dönemSonu <= 49 ) {
//     note.innerHTML= dönemSonu + " dc - sorumlu gecti"
// }
// else if(dönemSonu >= 50 && dönemSonu <=74){
//     note.innerHTML=dönemSonu + " cc - geçti"
// } 
// else if(dönemSonu >=75 && dönemSonu >=100){
//     note.innerHTML=dönemSonu + " aa - başarıyla geçti"
// }






// if (myGues === randomNumber && myGues != null ) alert("bildin");
// else if( myGues == "") alert("boş girdiniz")
// else if ( myGues == null ) alert("vazgeçtiniz")
// else if ( myGues !== randomNumber) alert("yankış bildiniz tekrar deneyin" + randomNumber)


// //Kod satırını buraya ekleyiniz.
// let weight=prompt("Kütlenizi giriniz","75 ")
// let height=prompt("Boyunuzu giriniz","1.72")

// let vki= weight / (height ** 2)


// if (vki<18.5) alert(`Vücut kitle indexiniz: ${vki}değerleriniz düşüktür` )
// else if (vki>= 18.5 && vki<=24.9) alert(`Vücut kitle indexiniz: ${vki} normal değerdesiniz`)
// else if ( vki >= 25 && vki <= 29.9) alert(`Vücut kitle indexiniz: ${vki} kilolusunuz`)
// else if ( vki >=30) alert(`Vücut kitle indexiniz: ${vki} aşırı kilolusunuz`)



//Kod satırını buraya ekleyiniz.



// function vkiHesapla(boy, kilo) {
//     let vki= kilo / (boy * boy)
//     if(vki<18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
//     if(vki>= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
//     if(vki>= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
//     if(vki>= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
// }

// vkiHesapla(1.78,75) 

// function getIdWriteInfo(id, info){
//     let domObject=document.querySelector(`#${id}`)
//     domObject.innerHTML= info
// }

// function myFcn(userName, lastName){
//     let info= ` My name is ${userName} and surname is ${lastName}`
//     return info
// }
// let denemek1=myFcn("medetcan", "diler")

// let myAge="28 yaşında bir gencim"
// let myProfession=`<strong style="background-color:red;">I'm a mechanical engineer</strong>`
// getIdWriteInfo("deneme", denemek1)

// const createNumbeR= (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// console.log(createNumbeR(50,99))





// function fnc(){
//     let randomNumber= Math.floor(Math.random()*10)
//     let myGues=document.querySelector("#input").value
//     if (myGues == randomNumber) alert(`tebrikler bildiniz say: ${randomNumber}`);
//     else if ( myGues !== randomNumber) alert(`Tekrar deneyiniz Sayı ${randomNumber} idi`);
//     else if ( myGues == "") alert(`boş giriş yaptınız`)
// }

// let clickBtn=document.querySelector("#btn").addEventListener("click", fnc)
// function fnc(){
//     let randomNumber= Math.floor(Math.random()*10)
//     let myGues=document.querySelector("#input").value;
//     if ( myGues==randomNumber) alert("Congragulations your gues true")
//     else if( myGues == "") alert("please write something")
//     else if ( myGues !== randomNumber) alert("Your gues wrong number:"+ randomNumber +" Try again")
// }


// let vizeBtn=document.querySelector("#btn").addEventListener("click", vizeFnc)
// function vizeFnc(){
//     document.querySelector("#vize").value
// }
// let finalBtn=document.querySelector("#btn-2").addEventListener("click", finalFnc)
// function finalFnc(){
//     document.querySelector("#final").value
// }


// let ortalama= ( vizeBtn * 0.3) + ( finalBtn * 0.7)
// if (isNaN(ortalama) ) document.querySelector("#deneme").innerHTML=` lütfen rakam olarak git `
// else if ( ortalama <= 50 ) document.querySelector("#deneme").innerHTML= ` malesef sınıfta kaldın puan ortalaman ${ortalama}`
// else if ( ortalama >50 && ortalama<=100 ) document.querySelector("#deneme").innerHTML=` Tebrikler başarıyla geçtin not ortalaman ise : ${ortalama}`


// var ogrVizeNot = 45; // Bu kod satırını değiştiriniz. 
// var ogrFinalNot = 60; // Bu kod satırını değiştiriniz. 

// var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

// if(ogrOrtalama > 0 && ogrOrtalama < 30) {
//   console.log("Not ortalamanız: " +ogrOrtalama + " KALDINIZ(FF).");
// }

// else if(ogrOrtalama > 31 && ogrOrtalama < 49) {
//   console.log("Not ortalamnız: " +ogrOrtalama + " DC - KOŞULLU ");
// }

// else if(ogrOrtalama > 50 && ogrOrtalama < 84) {
//   console.log("Not ortalamnız: " +ogrOrtalama + " CC - GEÇTİNİZ ");
// }

// else if(ogrOrtalama > 85 && ogrOrtalama <= 100) {
//   console.log("Not ortalamnız: " +ogrOrtalama + " AA - GEÇTİNİZ ");
// }


 let userName=prompt("kullanici adinizi giriniz", "medetcan")
 let age=prompt("yasiniz:")

 if (!(isNaN(userName))) {
    console.log("lütfen isnizi karakterlerle giriniz")
 } 
 else if ( isNaN(age)){
    console.log("yaşınızı rakamlarla giriniz")
 }
 else if(userName && age >= 18 ) {
    console.log("ehliyet alabilirsiniz")
 }
 else if (age < 18){
    let necTime=( 18-age)
    console.log(` ehliyet alamazsınız beklemeniz gereken sene : ${necTime}`)
 }















    