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

// let userName;
// let password;
// let infoDOM=document.querySelector('#info')

// function handleSubmit(event){
//     event.preventDefault();
//     console.log(`username:${userName}-password:${password}`)
// }
// function handleChange(event){
//     if(event.target.name==='fname'){
//         userName=event.target.value
        
//     }else{
//         password=event.target.value
//     }
// }

// let selectCar=document.querySelector('#mySelect')
// selectCar.addEventListener('change', (e)=>{
//     let infoDOM=document.querySelector('#myInfo')
//     infoDOM.innerHTML=`You selected: ${e.target.value}`
// })



// function myFunction() {
//   var x = document.getElementById("mySelect").value;
//   document.getElementById("demo").innerHTML = "You selected: " + x;
// }

let form=document.querySelector('#form')
let fnameDOM=document.querySelector('#fname')
let lnameDOM=document.querySelector('#lname')
let buttonDOM=document.querySelector('#btn')

let username;
let lastname;
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(`username:${username} - lastname:${lastname}`);
    localStorage.setItem('userInfo', `${username},${lastname}`)

})

let resetButton=document.querySelector('#btnReset')
resetButton.addEventListener('click', (event)=>{
    localStorage.clear()
    lnameDOM.value=''
    fnameDOM.value=''
})

lnameDOM.addEventListener('change',mySubmit);
fnameDOM.addEventListener('change',mySubmit);

function mySubmit(e){
    if(e.target.name === 'fname'){
        username=e.target.value
    } else {
        lastname=e.target.value
    }
}
