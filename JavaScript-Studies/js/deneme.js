const ulDOM= document.querySelector('#list')

ulDOM.addEventListener('click', function(e){
    if(e.target.className == 'btn'){
        const li = e.target.parentElement; 
        ulDOM.removeChild(li)
    }
})