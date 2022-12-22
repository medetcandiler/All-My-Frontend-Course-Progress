// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector


// let div=document.getElementsByTagName("div")
// console.log(div.app.innerHTML) 
//  // bu adımlarla console div içerisinde yazanı yazdırabildim

// let second=document.getElementById("app").innerHTML
// second.innerHTML+=" denemek için yapayrum"  //hello worlde ekledi ve yazdı..
// console.log(second) // bu şekilde hello world'e çok daha hızlı ulaştık.

// second.innerHTML="içerik tamamen değişti"
// console.log(second)

// document.getElementById("btn-1").addEventListener("click", fnc1)
// function fnc1 (){
//     document.getElementById("app").style.color="green"
// } // green butonuna tıklarsan yazı green olur 
// document.getElementById("btn-2").addEventListener("click", fnc2) 
// function fnc2(){
//     document.getElementById("app").style.color="orange"
// } // orange butona tıklarsan yazı orange olur 

// let link=document.querySelector("ul>li>a")  
// //link="değiştiremedim seni link"  // eğer buraya .innerHTML eklemezsek değişmeez dom içerisindeki a içeriği 
// link.innerHTML+=" değişti" // output inside a dom is link bilgisi değişti değiştiyi ekledik.. eskisi gitmedi

// let link2=document.querySelector("#denemelink") //a mın id siyle ulaştım 
// link2.innerHTML+=" 2.değişim"
// console.log(link2.innerHTML)
// document.querySelector("#denemelink").style.color="red"

// link2.classList.add("btn")  // bu code la class ekleyebiliriz ama htmlde gözükmez browser incelede görebiliriz

// let deneme3=document.querySelectorAll("p")
// console.log(deneme3)  // output: NodeList(6) [p,p,p,p,p,p]

// let deneme4=document.getElementsByName("eposta") //getelementsbyname ile çağırırsan nodelist olarak console görürsün
// console.log(deneme4)  // output: NodeList [input]

// let deneme5=document.getElementsByClassName("kusu") //tüm kus türlerini seçtik
// console.log(deneme5)

// console.log(document.getElementsByClassName("guvercin kusu"))

let deneme8=document.getElementById("signup").getElementsByTagName("input")
console.log(deneme8) // signup idsinin içindeki tüm inputlara ulaşmak..

let deneme9=document.querySelector("#signup").querySelectorAll("input")
console.log(deneme9) // sign id sinin içindeki tüm imputları bulmanın diğer yolu 

//lenght uzunluklarınıda kontrol edebilirsin

console.log(deneme8.length)