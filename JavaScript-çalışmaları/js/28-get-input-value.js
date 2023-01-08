let usernameDOM=document.querySelector('#username');
let passwordDOM=document.querySelector('#password');
let formDOM=document.querySelector('#form')
let list=document.querySelector('#list')
const ALERT=(className='warning', title, message)=>
`
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`



const alertDOM=document.querySelector('#alert')

formDOM.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(usernameDOM.value==""){
        alertDOM.innerHTML= ALERT('danger', 'empty username', 'please write sth in username input area')
    }else if(passwordDOM.value==''){
        alertDOM.innerHTML=ALERT('danger', 'empty psw', 'wrte psswrd')
    }else if(usernameDOM.value.length<5){
        alertDOM.innerHTML=ALERT('warning', 'less than 5 username' , 'write atleast 5 chcrt username' )
    }else if(passwordDOM.value.length<5){
        alertDOM.innerHTML=ALERT('warning', 'less than 5 achrc  pass ', ' at least 5 password')
    }
    else if(usernameDOM && passwordDOM){
        alertDOM.innerHTML= ALERT('success', 'succesfully you managed to enter','congratulations')
        addLi(usernameDOM.value, passwordDOM.value)
        usernameDOM.value=''
        passwordDOM.value=''
    }
})


function handleChange(event){
    if(event.target.name==='username'){
        usernameDOM.value
    }else if(event.target.name==='password'){
        passwordDOM.value
    }
}

function addLi(username,password){
    let newLi=document.createElement('li')
    newLi.innerHTML= `username: ${username} <br> password:${password}`
    newLi.classList.add('list-group-item')
    list.append(newLi)
}


