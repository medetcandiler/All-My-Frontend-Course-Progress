// map() method 

const USERS=['MURAT','MehMet', '  MedO', 'aYbis']
//{userName:'AYSE', shortName:'A.', newName:'Ayse'}
const USERS_OBJ=USERS.map(item => 
    (
    {
        userName: item.trim().toUpperCase(),
        shortName: `${item.trim().charAt(0).toUpperCase()}.`,
        newName: item.trim().charAt(0).toUpperCase()+ item.trim().slice(1).toLowerCase()
    }
    )
)

console.log('USERS_OBJ', USERS_OBJ)

const numss=[2, 3, 4 ,5, 6 ,7, 9, 15 , 16 , 46 ]

const double=(item)=> Math.round(Math.sqrt(item)) ;

const doubleNumss=numss.map(double)
console.log('doubleNumss', doubleNumss)

const salarys=[1100, 13000, 2500, 4500, 1500, 25344, 2000]
const newSalary=salarys.map(item =>{
    if( item > 3000){
        return Math.round(item+=item*0.15)
    }else return Math.round(item+=item*0.25)
})
console.log(newSalary,'newSalarys')



// const userName=USERS.map(item=> {
//     return item.toLowerCase().trim();
// })
// console.log(userName,'UserName ')
// const shortName=USERS.map((item, i, arr)=>{
//     return arr[i].charAt(0).toUpperCase()+'.'
// })
// console.log( shortName,'ShortName')




//******************* random practices area 
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

const numbeers=[1, 2, 3, 4 ,5 ,6,6 ]  
let trying=(num)=>{
    let max= Math.max(...num);
    num=num.filter(x=> x!==max )
    return num=Math.max(...num)
}   
console.log(trying(numbeers),'find second max')




let string='  ssd '
let checkString=(str)=>{
    if(string.trim().length>0){
        console.log('string not empty')
    }else console.log('string empty')
}
checkString(string)

const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
];

const greatThanThirty=person.filter(item=> item.age> 30)
console.log('greater than 30 age',greatThanThirty)

const whoKnowsJs=person.filter(item => item.languages.includes('JavaScript'))
console.log('who knows js ', whoKnowsJs)
 