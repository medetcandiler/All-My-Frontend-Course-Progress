//************ css class eklemek ve cikartmak */

let greeting=document.querySelector("#deneme")
console.log(greeting.classList)  // greeting id si olan h1 in classı varm ı yokmu ya baktık
greeting.classList.add("text-primary") // class ekledik  
greeting.classList.add("title")  // 2 adet classı ayrı ayrı eklememize gerek yok 
greeting.classList.add("btn", "bg-secondary", "third-class")  // 3 clası tek classlist.add ile ekledik 
console.log(greeting) // console yazdıırıp kontrol ettik ve eklendiğini gördük. 

//peki içerisinden nasıl class sileceğiiz hadi öğrenelim ..

console.log(greeting.classList.remove("third-class"))

