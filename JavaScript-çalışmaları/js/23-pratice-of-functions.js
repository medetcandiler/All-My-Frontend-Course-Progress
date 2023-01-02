let counter=0
let counterDOM=document.querySelector("#counter");
let increaseDOM=document.querySelector("#btn-increase")
let decreaseDOM=document.querySelector("#btn-decrease")
counterDOM.innerHTML=counter

increaseDOM.addEventListener("click", clickEvent)
// function clickEvent(){
//     console.log(this.id)
// }

decreaseDOM.addEventListener("click", clickEvent)
function clickEvent(){
    console.log(this.id)
    this.id == "btn-increase" ? counter+=1 : counter-=1;
    counterDOM.innerHTML=counter;
}