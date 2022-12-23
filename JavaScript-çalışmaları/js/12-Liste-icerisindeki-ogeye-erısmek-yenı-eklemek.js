// let lastChild=document.querySelector("#list>li:last-child ")
// console.log(lastChild.innerHTML)

// lastChild.classList.add("deneme") // class ekledim 
// console.log(lastChild)

// lastChild.innerHTML+=("eklendi1")

// let firstChild=document.querySelector("#list>li:first-child") //first-child eklemen gerekli değil zaten ilkini seçer
// console.log(firstChild)
// firstChild.innerHTML+=("değiştirdim hehe")

//how to use append()

// let myUl=document.querySelector("ul#list")
// console.log(myUl)

// let langs=["CSS", "HTML", "TYPESCRİPT"]
// console.log(langs)

// let a= langs.map(lang=>{
//     let newLi=document.createElement("li");
//     newLi.textContent= lang;
//     return newLi;

// })
// myUl.append(...a)

let myUl=document.querySelector("#list")
console.log(myUl)
let newLi=document.createElement("li")
newLi.innerHTML="yeni li elementi eklendi"
//myUl.append(newLi) // ul listemin sonuna ekleme yaptı 
myUl.prepend(newLi)  // ul listemin ilk sırasına ekleme yaptı 

// let myUl=document.querySelector("#list")
// let typeOfBirds = ["kanarya", "güvercin", "medet"] 
// let deneme=typeOfBirds.map(typeOfBirds=>{
//     let newLi=document.createElement("li")
//     newLi.textContent= typeOfBirds
//     return newLi;
// })

// myUl.prepend(...deneme)   





