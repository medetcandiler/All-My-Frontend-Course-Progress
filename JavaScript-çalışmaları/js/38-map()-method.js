// map() method 

const NUMBERS=[10, 34, 2, 6, 8, 13, 3, 9, -2 , -9, - 3,5, 11]
function isBigEnoug(value){
    return value >= 10
}

console.log(NUMBERS.filter(isBigEnoug))
console.log(NUMBERS)

function isPrime(num){
    for(let i=2 ; num > i ; i++){
        if(num%i===0){
            return false
        }
    }
    return num !== 1
}
console.log('isPrime',NUMBERS.filter(isPrime))

const nums=[1, 2, 3, 4 ,5 ,6]  

const newNums=nums.reduce((acc, dec)=>{
    return acc-dec
},0)
console.log(newNums)

let string='  ssd '
let checkString=(str)=>{
    if(string.trim().length>0){
        console.log('string not empty')
    }else console.log('string empty')
}
checkString(string)