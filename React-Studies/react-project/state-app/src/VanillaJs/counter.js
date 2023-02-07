let increaserDOM= document.querySelector('#increaser');
let decreaserDOM= document.querySelector('#decreaser');
let infoDOM=document.querySelector('#info')

let counter=0
infoDOM.innerHTML=counter

increaserDOM.addEventListener('click', ()=>{
    counter +=1
    infoDOM.innerHTML= counter
})

decreaserDOM.addEventListener('click', ()=>{
    counter -=1;
    infoDOM.innerHTML=counter
})