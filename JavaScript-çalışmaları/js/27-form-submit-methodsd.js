//form submit:

// let formDOM=document.querySelector('#userForm');
// formDOM.addEventListener('submit', formSubmit);
// let inputValue=document.querySelector('#score')
// let infoDOM=document.querySelector('#info')


// function formSubmit(e){
//     e.preventDefault() // we learned from this lesson the purpose of preventDefault() . 
//     console.log('islem gerceklesti')
//     infoDOM.innerHTML=inputValue.value
//     inputValue.value=''
// }

// let infoDOM=document.querySelector('#info')
// function myFunction(event){
//     event.preventDefault()
//     console.log('the form was submitted')
//     //alert('the form was submitted')
//     infoDOM.innerHTML=input.value

// }

// let infoDOM=document.querySelector('#info')
// let formDOM1=document.querySelector('#myForm-1')
// let formDOM2=document.querySelector('#myForm-2')
// let input1=document.querySelector('#fname')
// let input2=document.querySelector('#lname')

// formDOM1.addEventListener('submit', mySubmitFnc)
// formDOM2.addEventListener('submit', mySubmitFnc)

// function mySubmitFnc(evt){
//     evt.preventDefault()
//     console.log('denemek')
//     infoDOM.innerHTML=` first name: ${input1.value} last name:${input2.value}`
//     input1.value=''
//     input1.value=''
// }

let userName;
let password;
let infoDOM=document.querySelector('#info')

function handleSubmit(event){
    event.preventDefault();
    console.log(`username:${userName}-password:${password}`)
}
function handleChange(event){
    if(event.target.name==='fname'){
        userName=event.target.value
        
    }else{
        password=event.target.value
    }
}