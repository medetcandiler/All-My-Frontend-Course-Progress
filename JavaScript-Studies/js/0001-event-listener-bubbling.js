const formDOM=document.querySelector('#form');
const inputDOM= document.querySelector('#input')
const ulDOM= document.querySelector('#list')

const createLi= function(){
    let newLi = document.createElement('li');
    let newBtn = document.createElement('input')
    newBtn.attributes.value='submit'
    newLi.appendChild(newBtn)
    newLi.textContent= inputDOM.value;
    ulDOM.appendChild(newLi)
}

formDOM.addEventListener('submit', function(e){
    e.preventDefault();
    if(!inputDOM.value){
        alert('write sth')
    }else {
        createLi()
        inputDOM.value=''
    }
})


ulDOM.addEventListener('click', function(e){
    if(e.target.className == 'btn'){
        e.target.parentElement.remove()
    }

})