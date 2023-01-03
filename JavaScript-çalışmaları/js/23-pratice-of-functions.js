// let counter=0
// let counterDOM=document.querySelector("#counter");
// let increaseDOM=document.querySelector("#btn-increase")
// let decreaseDOM=document.querySelector("#btn-decrease")
// counterDOM.innerHTML=counter

// increaseDOM.addEventListener("click", clickEvent)
// // function clickEvent(){
// //     console.log(this.id)
// // }

// decreaseDOM.addEventListener("click", clickEvent)
// function clickEvent(){
//     console.log(this.id)
//     this.id == "btn-increase" ? counter+=1 : counter-=1;
//     counterDOM.innerHTML=counter;
// }

// let container=document.querySelector(".container")
// let input=document.querySelector(".inputtext")
// let selectcolor=document.querySelector("#select")

// container.addEventListener("click", ()=>{
//     console.log("I clicked the area of container.")
// })
// input.addEventListener("click", function(){
//     console.log("I clicked the input area")
// })
// selectcolor.addEventListener("click", function(){
//     console.log("I clicked the select colors")
// })


///*******Practice of changing background color, İf you click the change background color button the background color is going to be changed by you!! */
function random(number){
    return Math.floor(Math.random()*number+1)
}

let button=document.querySelector("#btn-bg").addEventListener("click", changeColor)
function changeColor(evt){
    let myRgb=`rgb(${random(255)},${random(255)},${random(255)} )`
    // document.body.style.backgroundColor= myRgb
    evt.target.style.backgroundColor= myRgb
}

let counter=0
let writeDOM=document.querySelector("#number")
let increaseBtn=document.querySelector("#increase");
let decreaseBtn=document.querySelector("#decrease");
increaseBtn.addEventListener("click", myClickEvent)
decreaseBtn.addEventListener("click", myClickEvent)

function myClickEvent(e){
    this.id=="decrease" ? counter-=1 : counter+=1;
    writeDOM.innerHTML= counter;
    console.log(e)
}

let myInput=document.querySelector("#myinput")
myInput.addEventListener("keydown", (event)=>{
    let reachP=document.querySelector(".lead")
    reachP.innerHTML= `you type '${event.key}'`
})




