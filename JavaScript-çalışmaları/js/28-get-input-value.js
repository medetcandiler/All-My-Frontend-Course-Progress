let formDOM=document.querySelector('#form')

let username;
let password;

let forUserName=document.querySelector('#fusername')
let forPassword=document.querySelector('#fpassword')
let listDOM=document.querySelector('#userList')

formDOM.addEventListener('submit', (e)=>{
    e.preventDefault();
    switch(true){
        case(!(isNaN(username))):
            alert('please write your username by using characters')
            break;
        case(username===undefined):
            alert('please do not keep empty username')
        case(password===undefined):
            alert('please write your password')
            break;
        default:
            addItem()
    }
})

function addItem(){
    let newLi= document.createElement('li')
    newLi.innerHTML= `${username} ${password}`
    newLi.classList.add('list-group-item','d-flex','justify-content-between','align-items-start')
    listDOM.append(newLi)
}


function changeFnc(event){
    if(event.target.id==='username' && username!==''){
        username=event.target.value
    }else if (event.target.id==='password' && password!==''){
        password=event.target.value
    }else{
        alert('please do not keep empty input areas')
    }
}