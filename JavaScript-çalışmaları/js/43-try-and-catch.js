// How try and catch use in js

//SYNTAX
// try {
//     //Çalıştırılacak kodlar
//   }catch(hata) {
//     //Hata yakalandığında çalışacak kodlar
//   }finally {
//     //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
//   }


let items;

try{
    items.forEach(item=> console.log(item*5));
}catch(err){ // exception
    console.log('myError:', err);
}

console.log('the error management is working well ');
let info= '  meddo'
console.log(info.trim())


let x= function(someCode){
    document.querySelector('#demo').innerHTML= someCode;
}
let myPromise= new Promise(function(resolve, reject){
    let x=0;
    if(x==0){
        resolve('it is working');
    }else reject('error')
})
myPromise.then(
    function(value){
        x(value)
    },
    function(err){
        x(err)
    }
)


// const mySecondPromise= new Promise((resolve, reject)=>{
//     let isActive=1
//     setTimeout(() => {
//         if(!isNaN(isActive)){
//             resolve(1)
//         }else reject('yanlis varr ama sen bilirsin ')
//     }, 3000);
// }).then(
//     function(value){
//         let news = value*3;
//         return news
//     },
//     function(rejected){
//         console.log(rejected)
//         return rejected
//     }
// ).then(v=>{
//     let x=v *10;
//     return x;
// }).then(success=> document.querySelector('#demo2').innerHTML=success + 'last step')


// input sample 

let formDOM=document.querySelector('#form').addEventListener('submit', myFnc)
function myFnc(event){
    event.preventDefault()
    let writeDOM=document.querySelector('#demo2');
    writeDOM.innerHTML=''
    let inputDOM=document.querySelector('#age')
    
    try{
        if(inputDOM.value.trim()== '')throw 'write sth'
        if(isNaN(inputDOM.value)) throw 'write number'
        if(inputDOM.value<5) throw 'too low'
        if(inputDOM.value>10) throw 'quiet big'
    }catch(e){
        writeDOM.innerHTML= e
    }
    inputDOM.value=''
}