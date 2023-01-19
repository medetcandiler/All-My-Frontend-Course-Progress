// JS Object Methods and how we add that ? 

let user1={
    firstName:'deniz',
    lastName:'sellik',
    score:[1, 2, 3 ,4],
    isActive: true,
    fullInfo: function(){
        return ` The user name is ${this.firstName} ${this.lastName} and his scores ${user1.score}`
    },
    get info(){
        return `the user name ${this.firstName[0].toUpperCase()+this.firstName.slice(1)}`
    },
    changeName: function(newName){
        return this.firstName= newName
    },
    set newLastName(x){
        this.lastName= x
    }
}
user1.changeName('demoli')
console.log(user1)
document.querySelector('#demo2').innerHTML= JSON.stringify(user1)
console.log(user1)
console.log(user1.info)
user1.newLastName='diler'
console.log(user1)

let myInfo={
    firstName:'meddo',
    lastName:'diler',
    score:[1, 2, 3 ,4],
    age:26,
    isActive: true,
    sayHello: (age)=> {
        return `Hi , It's ${myInfo.firstName}. I'm ${age}`
    }
}
myInfo.ageCalculator= function(){
    return 2023- (2023-this.age)
}
console.log(myInfo.sayHello(myInfo.ageCalculator()))

function Mylove(name, lname, year, nation, profession){
    this.firstName= name;
    this.lastName= lname; 
    this.yearOfBirth= year; 
    this.nationality= nation;
    this.occupation= profession;
}

const AybisInfo= new Mylove('aybike', 'erden', 1996, 'turkish', 'interiorArchitect')
console.log(AybisInfo, )
AybisInfo.ageCalculator=function(){
    return 2023-this.yearOfBirth
}
AybisInfo.shortInfo=function(){
    return ` this is ${this.firstName} ${this.lastName}. She is a ${this.nationality} person and an ${this.occupation}. She is ${this.ageCalculator()} years old.`
}
document.querySelector('#demo2').innerHTML= AybisInfo.shortInfo()

function write(){
    console.log('merhaba')
}
write('name')

function yaz(){console.log("Merhaba Kodluyoruz")}
yaz()


//PRACTICE AREA 
//ARRAYS
let arr=[3, 3, 4, 5, [12, 34 ,45 ,3]];
console.log(arr[arr.length-1])
for(let x of arr){
    console.log(x)
}
let newArr=[...new Set(arr)]
console.log(newArr, newArr.length, '[new Set(arr)]')
newArr.length=2
console.log(newArr, newArr.length)

console.log(arr[arr.length-1][3])
arr.forEach((item,index)=>{
    console.log('index:', index , 'element: ', item)
})

arr.splice(0,0,'yeni', 'eklendi')
console.log(arr,' with splice()')

// let userName=''
// while(userName.length===0){
//     userName=prompt('sdsdsd');
// }

//call() method;
//constructer function;
function Person(name, lname, city, lang){
    this.fname=name;
    this.lname=lname;
    this.city=city;
    this.language=lang;
    this.fullInfo=function(eyeColor, size){
        return `This is ${this.fname} ${this.lname}. She is from ${this.city} ${eyeColor} ${size}`
    }
}
Person.prototype.continent='turkey'
let myAybis=new Person('aybis', 'diler', 'istanbul', 'turkish')
console.log(myAybis.continent)

document.querySelector('#demo').innerHTML=myAybis.fullInfo()

const myMom={
    fname:'demet',
    lname:'diler',
    city:'istanbul',
    fullCard: function(x, y){
        return this.fname + ' ' + this.lname +x +y
    }
}
const myFather={
    fname:'sahin',
    lname:'diller',
}
console.log(myMom.fullCard.call(myFather, 'x', 'y'))

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
console.log(person.fullName.apply(member))

const personx = {
firstName:"John",
lastName: "Doe",
fullName: function() {
    return this.firstName + " " + this.lastName;
}
}

const memberx = {
firstName:"sadfasdf",
lastName: "asdfasdf",
}

let x = personx.fullName.bind(memberx);

console.log(x());

const human={
    fname:'tertos',
    lname:'dolu',
    display: function(){
        let x=document.querySelector('#info');
        x.innerHTML= `${this.fname} asdf ${this.lname}`
    }
}

let a= human.display.bind(human)
setTimeout(a, 3000)

