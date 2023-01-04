const info=document.querySelector('#info');
const increase=document.querySelector('.increase');
const decrease=document.querySelector('.decrease');

increase.addEventListener('click', myCounter)
decrease.addEventListener('click', myCounter)

let counter=0;

function myCounter(){
    (this.className) == 'increase' ? counter+= 1 : counter-= 1;
    info.textContent=counter;
}