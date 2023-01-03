let increase=document.querySelector("#increase");
let decrease=document.querySelector("#decrease");
let counter=0;
let writeDOM=document.querySelector("#number")
increase.addEventListener("click", counterFnc);
decrease.addEventListener("click", counterFnc);
function counterFnc(){
    this.id=="decrease" ? counter-=1 : counter+=1;
    writeDOM.innerHTML=counter
}
