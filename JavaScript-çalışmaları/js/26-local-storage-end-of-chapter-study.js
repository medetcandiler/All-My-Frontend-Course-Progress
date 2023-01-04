const info=document.querySelector('#info');
const increase=document.querySelector('.increase');
const decrease=document.querySelector('.decrease');

increase.addEventListener('click', myCounter)
decrease.addEventListener('click', myCounter)

//********let counter= localStorage.getItem('myCounterInfo'); // it does not work because localstorage just store strings, even though it is an number it becomes a string in local storage when we decide to increase or decrease the number it does not increase or decrease it add string with number you have got to change that number
let counter=localStorage.getItem('myCounterInfo') ? Number(localStorage.getItem('myCounterInfo')) : 30;   // counterin icinde bilgi var mi var varsa numberli haline cevir yoksa 0 yaz ..

info.innerHTML=counter;

function myCounter(){
    console.log(typeof counter);
    (this.className) == 'increase' ? counter+= 1 : counter-= 1;
    localStorage.setItem('myCounterInfo', counter)
    info.textContent=counter;
}

