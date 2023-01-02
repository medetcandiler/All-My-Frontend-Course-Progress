// DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events

// let greeting=document.querySelector("#info")
// greeting.addEventListener("click", function(){
//     let reachId=document.querySelector("#info")
//     reachId.classList.add("txt-color")
// })

// let greeting =document.querySelector("#info").addEventListener("click", domMouseMove)
// function domMouseMove(){
//     console.log("we click the element")
//     this.innerHTML= "değiştik t"

// }

/*********same like above */
// let greeting=document.querySelector("#info").addEventListener("click", function(){
//     console.log("we clicked on JavaScript string")
//     this.innerHTML="when we click on JS string the writing is gonna change "
// })

/**** If I'd like to change the color of JS string by clicking on them */
// let clickAndChange=document.querySelector("#info").addEventListener("click", function(){
//     console.log("keep track how many time you clicked on that")
//     this.style.color= "red"
// })


// let addNewColur=document.querySelector("#info").addEventListener("click", function(){
//     console.log("we clicked on that")
//    this.style.color == "red" ? this.style.color="black" : this.style.color="red"
// })

// let addNewEvent=document.querySelector("#deneme").addEventListener("mouseover", function(){
//     console.log("I double clicked on that");
//     let reach=document.querySelector("#info");
//     reach.style.color=="red" ? reach.style.color="black" : reach.style.color="red"
// })

// function deneme(){
//     let reach=document.querySelector("#info");
//     reach.style.color == "black" ? reach.style.color= "purple" : reach.style.color="black"
// }

// let addNewEvent=document.querySelector("#input").addEventListener("cut", function(){
//     console.log("deneme", )
// })

// let otherNewEvent=document.querySelector("#info").addEventListener("copy", myCutFunction)
// function myCutFunction(deneme){
//     console.log("what the type of event : " , deneme.type )
// }


/************** form opt sample */
// let changeColors=document.querySelector("#select").addEventListener("change", function(x){
//     console.log("what we select : " + x.type)
//     console.log("value of form:" + x.target.value)
// }


let reachMyForm=document.querySelector("#inputText");
let submitButton=document.querySelector("#btn");
let selectColor=document.querySelector("#selectColor");
let getContainer=document.querySelector(".container");

reachMyForm.addEventListener("click", function(){
    console.log("form");
})
selectColor.addEventListener("click", function(){
    console.log("select color box ")
})
getContainer.addEventListener("click", function(){
    console.log("çerçeve")
})



