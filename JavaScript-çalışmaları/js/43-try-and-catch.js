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

// document.querySelector('#form').addEventListener('submit', (e)=>{
//     e.preventDefault();
//     let ageDOM=document.querySelector('#age').value
//     let alertDOM=document.querySelector('#demo2')
//     try{
//         if(ageDOM==''){
//             throw ' write smth'
//         }
//     }catch (err){
//         alertDOM.innerHTML= err
//     }
// })

function getInputValue(){
    let alertDOM=document.querySelector('#error')
    alertDOM.innerHTML=''
    alertDOM.style.color='red'
    let inputDOM=document.querySelector('#number').value;
    try{
        if(inputDOM.trim()=='') throw 'is empty'
        if(isNaN(inputDOM)) throw ' write number'
        if(inputDOM>20) throw 'too big'
        if(inputDOM<10) throw 'too small'

        if(inputDOM){
            alertDOM.style.color= 'green'
            throw 'is ' + inputDOM
        }
    } catch (e){
        alertDOM.innerHTML= 'input ' +e
    }finally{
        document.querySelector('#number').value=''
    }
}
//split() splits a string into an array as a new array
function reverseStr(s){
    try{
        if(!isNaN(s)) throw 'errorrrr write only string'
        s=s.split('').reverse().join('');
    }catch(e){
        console.log(e);
    }finally{
        console.log(s)
    }
}
reverseStr(23)


// function reverseString(s) {
//     try{
//         if(!isNaN(s)) throw 's.split is not a function'
//     }catch(e){
//         console.log(e);
//     }finally{
//         let returnArr= s.split('');
//         let reverArr= returnArr.reverse();
//         let returnStr= reverArr.join('')
//         console.log(returnStr)
//     }
// }
// reverseString('13')