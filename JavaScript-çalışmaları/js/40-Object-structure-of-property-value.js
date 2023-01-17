//Structure of object property(key) and value and access them
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

let laptop1={
    brand:'apple',
    model:'macbook air',
    '1kg': 2,
    modelName:'macbook air m2 chip',
    // model_name:'macbook air m2 chip', js developers generally use camel case structure..
}
console.log(laptop1, typeof laptop1)
console.log('brand:', laptop1['brand'], laptop1.brand)
console.log('kg:', laptop1['1kg'])
laptop1.modelYear=2022
console.log('model year:', laptop1.modelYear , laptop1['modelYear'])

// add new values to the properties
laptop1.boughtDate=2023
console.log(laptop1)
laptop1.model='macbook pro'
console.log(laptop1, ' value of model key has been changed')
laptop1['brand']='samsung'
console.log('brand of laptop1 has been changed', laptop1['brand'])

laptop1['version']='10.25.4'
console.log(laptop1.version, 'verion of laptop1')

// Anahtar bilgilerine ulasmak (keys) -> Object.keys()
// after usage this method it returns array 
key = Object.keys(laptop1)  // we reach keys with this method but it returns our keys as an array.
console.log(key, typeof key)
console.log(Object.keys(laptop1))
for(let i in key){  // we use differently key from object because it is an array not an object
    console.log(key[i])
}
key.forEach((item,index)=>{ 
    console.log(index ,item)

})
for(const i in laptop1){
    console.log(laptop1[i])
}

// reach the values of values in object -> Object.values()
// any JavaScript object can be converted to an array by using Object.values()

let myArray=Object.values(laptop1)
console.log(myArray.join(' '), 'myArr::')
document.querySelector('#demo').innerHTML= myArray


function reverse(str){
    let myArr= str.split('');
    let revArr= myArr.reverse();
    let myStrBack= revArr.join('');
    return myStrBack
}
console.log(reverse('anneeed'))
document.querySelector('#demo').innerHTML= reverse('deneme')

let number=[1, 2, 3, 4 ,5 ,6];
console.log(number)
let newNumber=number.slice(-4, -1)
console.log(newNumber)

const myPersonality={
    name:'meddo',
    lname:'diler',
    age:26,
    language:'english',
    lang: function(){
        return this.language
    },
    'bas ucum':'delik',
    set lang(lang){
        this.language=lang.toUpperCase()
    },
    get lang1(){
        return this.language[0].toUpperCase()+this.language.slice(1)
    }
}
myPersonality.lang='turkish'
document.querySelector('#demo2').innerHTML= myPersonality.lang1

console.log(myPersonality['bas ucum'])


// let persons={
//     name:'medet',
//     lname:'diler',
// }
// let denemek= prompt('write sth here')
// alert(persons[denemek])

function object(key, value){ // computed property 
    return{
        [key]:value
    }
}
let demo2DOM=document.querySelector('#demo2')
console.log(object('car','jeep')) 

let state = {
	users:[
		{name: "Brock", age: 25, favoriteColor: "red"},
		{name: "Jessie", age: 17, favoriteColor: "yellow"},
		{name: "James", age: 41, favoriteColor: "blue"},
		{name: "Winnie", age: 18, favoriteColor: "purple"}
	],
	settings:{
		version: "1.0.5",
        DNS: "105.xx.xx.xx",
        website: "https://www.example.com/"
	},
	banList: ["Ash", "Angelica", "Tom", "Jerry"]
}

demo2DOM.innerHTML= JSON.stringify(state['users'][2])
demo2DOM.innerHTML+= `<br> ${state.banList[2]}`
demo2DOM.innerHTML+=` <br><br><strong>${state.settings['website']}</strong>`
demo2DOM.innerHTML+= state.users[2].favoriteColor


