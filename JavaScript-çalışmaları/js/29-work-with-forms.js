const ALERT=(className='warning',title,message)=>`
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}!</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
let formDOM=document.querySelector('#form')
let mailAlert=document.querySelector('#mailAlert')
let passwordAlert=document.querySelector('#passwordAlert')
let successAlert=document.querySelector('#successAlert')
let emailDOM=document.querySelector('#email');
let passwordDOM=document.querySelector('#password');
formDOM.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    if(emailDOM.value.length<10 ){
        mailAlert.innerHTML= ALERT('danger','not a valid e email', 'please write at least 10 character ');
        emailDOM.value=''
        passwordDOM.value=''
    }else if (passwordDOM.value.length<8){
        passwordAlert.innerHTML= ALERT('danger', 'not a valid password', 'write at least 7 character');
        emailDOM.value=''
        passwordDOM.value=''
    }else if(emailDOM.value && passwordDOM.value){
        addLi(emailDOM.value, passwordDOM.value);
        localStorage.setItem('mail', emailDOM.value)
        localStorage.setItem('pass', passwordDOM.value) 
        successAlert.innerHTML= ALERT ('success', 'these are valid inputs', 'congratulations')
        emailDOM.value=''
        passwordDOM.value=''
    }
})



let listDOM=document.querySelector('#list');
let addLi= (email, password)=>{
    let newLi=document.createElement('li');
    newLi.innerHTML= `your email: ${email} <br> your pass: ${password}`;
    newLi.classList.add('list-group-item','d-flex','justify-content-between','align-items-start')
    listDOM.append(newLi);
    
}