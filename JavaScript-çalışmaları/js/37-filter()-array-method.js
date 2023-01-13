// filter() method
const USERS=[
    {userName:'medet', isActive:true},
    {userName:'aybis', isActive:true},
    {userName:'taylan', isActive:false},
    {userName:'murot', isActive:false},
]

const ACTIVE_USERS=USERS.filter(item=>{
    return item.isActive==true
})
console.log(ACTIVE_USERS,'activeusers')

 
const PRODUCT=['laptop', 'car', 'speaker', 'phone', 'television', 'ball'];

const NEW_PRODUCT=PRODUCT.filter(value => {
    return value.length > 5
})
console.log(NEW_PRODUCT)

const person=[
    {
        name: 'medet',
        age: 26,
        languages: ['html', 'css', 'js'],
    },
    {
        name: 'murat',
        age: 33,
        languages:['muhendis', 'teklaci', 'demirci']
    }
]
const greaterThanThirty=person.filter(item => item.age>30)
console.log(greaterThanThirty)

const whoKnowsJs=person.filter(value=> value.languages.includes('js'))
console.log(whoKnowsJs)


let simpleArr=['a', 'b', 'c', 'd']
let myObject={
    fname:'medet',
    lname:'diler',
    age:26
}
for(let x in myObject){
    console.log(myObject[x])
}