// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector


let div=document.getElementsByTagName("div")
console.log(div.app.innerHTML)
 // bu adımlarla console div içerisinde yazanı yazdırabildim

let second=document.getElementById("app").innerHTML
second.innerHTML+=" denemek için yapayrum"  //hello worlde ekledi ve yazdı..
console.log(second) // bu şekilde hello world'e çok daha hızlı ulaştık.

second.innerHTML="içerik tamamen değişti"
console.log(second)

document.getElementById("btn-1").addEventListener("click", fnc1)
function fnc1 (){
    document.getElementById("app").style.color="green"
}
document.getElementById("btn-2").addEventListener("click", fnc2)
function fnc2(){
    document.getElementById("app").style.color="orange"
}

