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