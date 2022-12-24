//************ css class eklemek ve cikartmak */

let greeting=document.querySelector("#deneme")
console.log(greeting.classList)  // greeting id si olan h1 in classı varm ı yokmu ya baktık
greeting.classList.add("text-primary") // class ekledik  
greeting.classList.add("title")  // 2 adet classı ayrı ayrı eklememize gerek yok 
greeting.classList.add("btn", "bg-secondary", "third-class")  // 3 clası tek classlist.add ile ekledik 
console.log(greeting) // console yazdıırıp kontrol ettik ve eklendiğini gördük. 

//peki içerisinden nasıl class sileceğiiz hadi öğrenelim ..

console.log(greeting.classList.remove("third-class")) // third classı sildim..

//eğer remova yaparken classı yanlış yazarsak sadece silmez hata vermez !!!!!!

//mesela kullanıcı tıkladığında class ekliceğiz yada removelayacağız gibi fonksiyonlarla çalışacağız


let midChild=document.querySelector("#list>li:nth-child(5)")
console.log(midChild.innerHTML)
midChild.innerHTML="deneme"

midChild.classList.add("txt-color","fs-xl")
midChild.classList.remove("txt-color")


//todolist tekrar
// let reachOl=document.querySelector("#list>li")

// function myFunction(){
//     let reachTxt=document.querySelector("#input")
//     let newLi=document.createElement("li")
//     newLi.textContent=reachTxt.value
//     reachOl.append(newLi)
//     reachTxt.value=""
// }