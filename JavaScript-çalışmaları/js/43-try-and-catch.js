// How try and catch use in js

let items;

try{
    items.forEach(item=> console.log(item*5))
}catch(error){
    console.log('myError:', error);
    items=[4, 5, 6, 7, 3]
    items.sort()
    let maxItem= Math.max(...items)
    let getRidOf= items.filter(e=> e != maxItem) 
    console.log(getRidOf)
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

const mySecondPromise= new Promise((resolve, reject)=>{
    let isActive=1
    setTimeout(() => {
        if(!isNaN(isActive)){
            resolve(1)
        }else reject('yanlis varr ama sen bilirsin ')
    }, 3000);
}).then(
    function(value){
        let news = value*3;
        return news
    },
    function(rejected){
        console.log(rejected)
        return rejected
    }
).then(v=>{
    let x=v *10;
    return x;
}).then(success=> document.querySelector('#demo2').innerHTML=success + 'last step')