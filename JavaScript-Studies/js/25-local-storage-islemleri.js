//local storage islemleri 
let user={
    userName: 'medetcandiler', isActive:true
}


localStorage.setItem("userInfo", JSON.stringify(user))

let userInfos=localStorage.getItem('userInfo') // it is an string version of user we need to change it to object with JSON.parse() 
console.log(userInfos)

userInfos=JSON.parse(localStorage.getItem('userInfo')) // it returns object 
console.log(userInfos) 

let myItems=[1123,2213,3123,4123,5123,6]

localStorage.setItem('key', JSON.stringify(myItems))

const data= JSON.parse(localStorage.getItem('key'))



let deneme= ()=> {
    let text=''
    for(let i=0; i< data.length; i++ ){
        text+= `${data[i]} \n`
    }
    return text
}
console.log(deneme())

//*************to do list with local storage
// const myUl=document.querySelector('#myUl');
// const form=document.querySelector('form');
// const input=document.querySelector('input');
// const btn=document.querySelector('#btn');
// myUl.classList.add('decoration');

// const myArr= localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
// localStorage.setItem('items', JSON.stringify(myArr))



// form.addEventListener('submit', toDoFnc);

// let liMaker=(text)=>{
//     let newLi=document.createElement('li');
//     newLi.textContent= text;
//     myUl.append(newLi);
// }


// function toDoFnc(e){
//     e.preventDefault()
//     myArr.push(input.value);
//     localStorage.setItem('items', JSON.stringify(myArr));
//     liMaker(input.value);
//     input.value='';
// }

// btn.addEventListener('click', function(){
//     localStorage.clear()
// });