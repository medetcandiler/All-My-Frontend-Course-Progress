//**** FUNCTİONS*/
// function helloworld(){
//     let domObject=document.querySelector("#info")
//     domObject.innerHTML= "Hello World!"
// }
// function hello(){
//     console.log("Merhaba Dunya!")
//     helloworld()
// }

// let myInterval2=setInterval(helloworld,1000)
// let myInterval = setInterval(hello, 1000)  //1000 ms 1 sn

// hello()
//     let userName=""
//     let age="15"
// function userCheck(){   // check availibily to age to get a driver license
//     let allowOrNot= (userName && age>=18 ) ? "ehliyet alabilir" : (!userName) ? "kullanici adi yok" : (!(isNaN(userName))) ?  "rakam girmeyiniz" : (!(age>=18)) ? "ehliyet alamaz" : ""
//     console.log(allowOrNot)
// }
// let setInterval3=setInterval(userCheck, 1000)


function fnc1(){
    console.log("1")
}
function fnc2(){
    // setTimeout(function(){
    //     console.log("2")
    // },1000)
    console.log(2,typeof(2))
}
function fnc3(){
    console.log("3")
}

fnc1()
fnc2()
fnc3()

let helloWorld= () => console.log("asdf")
helloWorld()

let experience=prompt("kac yıllık",4)
let developer= experience<5 ? ()=> alert("düşükyıl") : () => alert("çokyıl")

developer()