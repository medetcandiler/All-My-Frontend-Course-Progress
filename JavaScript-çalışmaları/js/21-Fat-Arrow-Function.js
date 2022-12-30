// function greeting(){
//     let writeIn=document.querySelector("#deneme")
//     writeIn.innerHTML = "Hoşgeldiniz"
//     return writeIn
// }


const greeting= (firstName) => {console.log(` hoşgeldinz ${firstName}`)}
// fat arrow functionlar otomatikman return ifadesi varmış gibi çalışırlar. 

greeting("medet")

// // tek parametreyse parantez olmadan yazabilirim veee,
// //tek satır kod ise süslü parantez olmadan yazabilirim ..
const greeting2= firstName => console.log(` hOŞGELDİN ${firstName}`)
greeting2("Lorem") 



function greeting5(firstName , lastName){
    let x=document.querySelector("#deneme")
    x.innerHTML=`welcome ${firstName} ${lastName}`
}
function getInput(myCallBack , myCallBack2){
    let x=prompt("kulalnici git")
    let y=prompt("soyadını gir")
    myCallBack(x, y)

}

getInput(greeting5)





// function factorial(n=""){
//     if (n<0) {
//         return -1
//     }
//     else if ( n == 0 || n == 1){
//         return 1
//     }
//     else {
//         return n * factorial(n-1)
//     }
// }
// let result = factorial()
// document.querySelector("#deneme").innerHTML= result

// console.log(""==0)

