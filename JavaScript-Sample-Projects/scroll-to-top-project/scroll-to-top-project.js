window.onscroll= function(){
    scrollFnc()
}
let buttonDOM= document.querySelector('#btn')
function scrollFnc(){
    if( document.documentElement.scrollTop > 100  ){
        buttonDOM.style.display= 'block'
    }else buttonDOM.style.display= 'none'
}

function goTopFunction(){
    document.documentElement.scrollTop=0
}