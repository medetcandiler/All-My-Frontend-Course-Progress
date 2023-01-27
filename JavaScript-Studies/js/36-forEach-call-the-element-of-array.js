// forEach() Method..
 
const PRODUCT=['laptop', 'car', 'speaker', 'phone', 'television', 'ball'];
let ulDOM=document.querySelector('#list')
// PRODUCT.forEach((item,i, arr) => {
//     let newLi=document.createElement('li')
//     newLi.textContent= ` ${i+1}: ${item} `
//     ulDOM.appendChild(newLi)
//     newLi.classList.add('list-group-item')
//     console.log(item)
// });

PRODUCT.forEach((item,i) => {
    document.querySelector('#info').innerHTML+=` <br> ${i.toString()}: ${item[0].toUpperCase()+item.slice(1)} <br>`
});


let numbers=[2 , 4, 5, 6, 6]
// let x=numbers.filter(greaterThan)
// function greaterThan(x){
//     return x !== 6
// }
// console.log(x)

// function myFnc(num){
//     let max= Math.max(...num);
//     nums=num.filter(x=> x !== max )
//     return Math.max(...nums)
// }
// console.log(myFnc(numbers),'my result')

let newArr=[]
numbers.forEach(num => {
    newArr.push(num*3)
});
console.log(newArr)

let newArr2=numbers.map(num=>{
    return num*3
})
console.log(newArr2)

let twoMore=numbers.map(item=> item+2)
console.log(twoMore, ' two more with map()')

let twoMores=[]
numbers.forEach(items => {
    return twoMores.push(items+2)
});
console.log(twoMores, '2 more with forEach()')