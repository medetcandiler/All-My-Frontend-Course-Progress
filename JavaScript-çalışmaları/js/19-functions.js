//**** FUNCTİONS*/
// function helloworld(){
//     let x=document.querySelector("#info");
//     x.innerHTML="deeddede";
//     x.style.backgroundColor="red"
// }
// function hello(){
//     console.log("Merhaba Dunya!")
//     helloworld()
// }

/*********setInterval ile her 3 saniyede bir konsola yazı yazdırma pratiği  arrow function syntax */
// setInterval(()=> {
//     console.log("bu bir interval function denemesidir")
// },3000)
// let x=document.getElementById("info")
// setInterval(function(){
//     x.innerHTML="red"
// },3000)


/************* another sytax of setInterval usage */
// let myInterval2=setInterval(helloworld,1000)
// let myInterval = setInterval(hello, 1000)  //1000 ms 1 sn

/***********ternary operatör ile fonksiyon içinde koşul pratiği */
// let userName="2"
// let age="15"
// function userCheck(){   // check availibily to age to get a driver license
//     let allowOrNot= (userName && age>=18 ) ? "ehliyet alabilir" : (!userName) ? "kullanici adi yok" : (!(isNaN(userName))) ?  "rakam girmeyiniz" : (!(age>=18)) ? "ehliyet alamaz" : ""
//     console.log(allowOrNot)
// }
// userCheck()
//let setInterval3=setInterval(userCheck, 1000)

//**************setTimeout pratiği asenkron yapı */
// function fnc1(){
//     console.log("1")
// }
// function fnc2(){
//     // setTimeout(function(){
//     //     console.log("2")
//     // },1000)
//     console.log(2,typeof(2))
// }
// function fnc3(){
//     console.log("3")
// }
// fnc1()
// fnc2()
// fnc3()

// function fnc1(){
//     console.log(1)

// }
// let x=setTimeout(fnc2,3000)
// function fnc2(){
//     console.log(2)
    
// }
// function fnc3(){
//     console.log(3)
// }

// fnc1()
// fnc2()
// fnc3()

/********her 3 saniyeda konsola adım yazılır vooa süper bişi pay attention to sytax of setTimeout  */
// let myFunction=() => 
// setTimeout(()=>{
//     console.log("medos")
// },3000)
// myFunction()

/************************ setTimeout ile her 2 saniyede input yok edip geri getirme alıştırması */
// let denemek=document.querySelector("#input")
// setTimeout(() => {
//     denemek.classList.add("d-none")
// }, 2000);
// setTimeout(() => {
//     denemek.classList.replace("d-none", "d-block")
// }, 4000);
// setTimeout(() => {
//     denemek.classList.replace("d-block","d-none")
// }, 6000);


//*********  ternary operatör ile arrow function kullanım pratiği */
// let helloWorld= () => console.log("asdf")
// helloWorld()

// let experience=prompt("kac yıllık",4)
// let developer= experience<5 ? ()=> alert("düşükyıl") : () => alert("çokyıl")

// developer()


/************ block scope  cannot use outside of the condition */
//let x="5"
//if (x>2) {
//    let reachInfo=document.querySelector("#info");
//    reachInfo.innerHTML="x > 2 " + x
//}
//let denemek2 = ()=> console.log(reachInfo)  // we got an error from this function because reachInfo not defined 
//denemek2()   

/**** setTimeout pratik tekrar etmeyi unutma */
// let fnc1= () => console.log(1);
// let fnc2 = setTimeout(()=>
//     console.log(2),2000
// );
// let fnc3= () => console.log(3);
// fnc1()
// fnc3()

/*************** FUNCTİON SEQUENCE burada sequence yapıyı görebilirsin ekranda sadece second() fonksiyonu yazıyor */
// let x= (some) => document.querySelector("#info"); 
// let first= () => x("ilk");
// let second= () => x("son");
// first()
// second()


/**************MUTLAKA TEKRAR ET  FUNCTİON SEQUENCE */
// let myDisplayer= (some) => document.querySelector("#info").innerHTML= some;
// let myCalculator= (num1, num2) =>  {let sum= num1 + num2 ;
// return sum;}

// let result= myCalculator(15, 15)
// myDisplayer(result);

//*******sample 2 */
// let myDisplayer= (some) => document.querySelector("#info").innerHTML=some;
// let myCalculator= (num1, num2) => {let x= num1 ** num2 ;
//     myDisplayer(x)
// }
// myCalculator(2,5)

/*******CALLBACK  */
// function myDisplayer(some){
//     document.querySelector("#info").innerHTML= some
// }
// function myCalculator(num1, num2, myCallback){
//     let sum= num1 - num2 ;
//     myCallback(sum);
// }
// myCalculator(5, 5, myDisplayer)

// function topla(sayi1, sayi2){
//     return sayi1+sayi2
// }
// let sonuc= topla(2,5) 
// document.querySelector("#info").innerHTML=sonuc
// function carp(sayi1,sayi2){
//     sayi1*sayi2
// }
// let result= carp(2,5)
// document.querySelector("#info").innerHTML=result  //undefined döner çünkü return ifadesi eklenmedi 

/********arrow function usage practice */
// let multiply= (num1, num2) => num1*num2;
// let info=document.querySelector("#info")
// info.innerHTML=multiply(2,5)

// let multiply2= function (num1, num2) {
//         num1 * num2
// }
// info.innerHTML=multiply2(2,8)  

/***********experience egzersiziii */
// let experience=prompt("tecrübeni yaz","4")
// let degerlendirme = (experience>5) ? () => document.querySelector("#info").innerHTML=`yeterli` : () => document.querySelector("#info").innerHTML="ahhhh"
// degerlendirme()

let pow= (x, n) => x ** n ;
let info=document.querySelector("#info")
info.innerHTML=pow(2,0)

function pow2(x, n){
    let result = 1;
    for (let i=0; i < n ; i++){
        result*= x
    }
    return result
}

(pow(2,6))


let myFnc100= function(num1, num2){
    let x = num1 * num2
    if (num1<num2){
        let a= num2
        console.log(x)
    }
    
}
myFnc100(2,5)


//*****code blocks */ /*** if, for, while gibi dönfülerde değişkenelri code blockları arasında tanımlar ve sadece oralarda ulaşılabilir olurlar. */
{
    let message="hello"
    console.log(message)
}
//console.log(message)  // ulaşamadık çünkü message değişkeni code bloğu içerisinde yazılmış 

/****if döngüsü içindeki parametreye dışarıdan ulaşmayı deneyelim mi ?? */
if (true){
    let myAge=30
    let theirAge=66
    switch(true){
        case(myAge>theirAge):
            console.log("yaşın büyük");
            break;
        case (myAge<theirAge):
            console.log("yaşın küçün");
            break;
    }
}
//console.log(myAge) // hata verdi çünkü if yapısı içerisinde declare etmiştim dışarıdan myAge e ulaşamadım 

//Neden bir fonksiyon içerisinde bir scope daha açma ihtiyacı duyabiliriz? part1 ve part2 sadece alınan parametrenin değiştirilmesi ile alakalı iki tane değer. str parametresini değiştirdikten sonra bizim artık part1 ve part2 ye ihtiyacımız yok. Bu kısmı ayrı bir scope içerisine alarak ilerde oluşabilecek bir bug ı önlemiş olabiliriz. Mesela, Scope içerisinde olmasa idi hala fonksiyon bodysinde istediğimiz yerde kullanabilir ve daha sonra gelip orayı değiştireceğimiz zaman hali hazırdaki kodu bozabilirdik gibi.

let strings=(str) => {
    let part1=str.slice(0,3);
    let part2=str.slice(3);
    str= part1.toUpperCase()+ part2
    document.querySelector("#info").innerHTML=str
}
strings("medetcandiler")


//  Nested Functions ( İç içe fonksiyonlar ) JavaScript'te yaygın olarak kullandığımız bir yapı. Bir Fonksiyon içerisinde başka bir fonksiyonu tanımladığımız zaman buna nested functions yapısı diyoruz aslında

function programDetayi(bootcamp, organizasyon){
    const tumProgram= ()=> bootcamp + "" + organizasyon;
    console.log("234" + tumProgram())
}

let sayacArtir= ()=> {
    let sayac=0;
    return function(){
        return sayac++ ;
    };
}


console.log()


