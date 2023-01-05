let form=document.querySelector('#myform')
let fnameDOM=document.querySelector('#fname')
let ageDOM=document.querySelector('#age')
let button=document.querySelector('#btn')
let atDOM=document.querySelector('#email')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    submitOK='true'
    if(fnameDOM.value.length > 15 ){
        alert('the name may have no more than 10 characters')
        submitOK='false'
    }
    if (isNaN(ageDOM.value) || ageDOM.value<1 || ageDOM.value>100){
        alert('the age must be a number between 1 and 100')
        submitOK='false'
    }
    if (atDOM.value.indexOf('@') == -1){
        alert('no a walid email')
        submitOK='false'
    }
    if (submitOK=='false'){
        return false
    }
})