// Local Storage:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage




// let increase=document.querySelector("#increase");
// let decrease=document.querySelector("#decrease");
// let counter=0;
// let writeDOM=document.querySelector("#number")
// increase.addEventListener("click", counterFnc);
// decrease.addEventListener("click", counterFnc);
// function counterFnc(){
//     this.id=="decrease" ? counter-=1 : counter+=1;
//     writeDOM.innerHTML=counter
// }



const form=document.querySelector("form");
const ul=document.querySelector("ul");
const button=document.querySelector("button");
const input=document.querySelector("#input");
let itemArr = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")): [];

localStorage.setItem("items", JSON.stringify(itemArr));
const data= JSON.parse(localStorage.getItem("items"));

const liMaker= (text)=>{
    const li=document.createElement("li")
    li.textContent= text;
    ul.append(li)
}

form.addEventListener("submit", function(evt){
    evt.preventDefault();
    itemArr.push(input.value);
    localStorage.setItem("items", JSON.stringify(itemArr));
    liMaker(input.value);
    input.value="";
});

data.forEach(item => {
    liMaker(item)
})

button.addEventListener("click", function(){
    localStorage.clear();
    while (ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
    itemArr= [];
})
