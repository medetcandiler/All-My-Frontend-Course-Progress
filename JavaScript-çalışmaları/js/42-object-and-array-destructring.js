// object ve array destructuring nasil kullanilir
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
let demoDOM=document.querySelector('#demo')
let setting={
    userName:'meddo',
    password:'badPassword',
    isActive:false,
    ip:'127.x.x.x',
    serverName:'diler.org',
    domainName:'medet@diler.org'
}
//***********OBJE ICINDEKI BILGILERIN TEK SEFERDE CIKARILMASI
//let userName= setting.userName  primitive way to reach object properties
//demoDOM.innerHTML= userName
//RENAME && DESTRUCTIRING
let {userName:user, password, isActive, ip:ServerIp,  serverName, domainName}= setting
demoDOM.innerHTML=password + user
console.log( user,password, isActive, ServerIp, 'values of object properties')
 // if we change the name of property when using destructiring it means renamed the decleration we need to use new name to reach them if we use first name of property we come across error.
 //we use destructiring with let decleration it means we cannot use them later because they are declerad with let keyword


//************* Obje icindeki bazi bilgilerin cikarilmasi */
let{userName:user2, password:pass, isActive:isActv, ip:serverIp2, ...restOfIt}= setting
console.log(user2, pass, isActv, serverName , restOfIt)

//objectin destructiring ile kopyalanmasi
let setting2= setting
setting2.newProperty='added'
console.log(setting, setting2, setting===setting2)
// objects addressed by refference not by value. primitive data types addressed by value not by refference.  I mean refference cannot be coppied. 
// it means when we refference an object to new declaration they carry exactly the same features. when you change one of them by adding new property both of them are affected by changes. 
//However there is a way to copy objects(also array objects) to new declaration by using {...Object} / [...Array] these commands allow us to copy objects.
// it means whenever we change coppy object it doesn't affect root object.

let setting3={...setting} // it copies the root object here and whenever we change setting3 properties values or add new value it does not affect root object
console.log(setting3===setting, setting3, setting)
setting3.afterCopy='new property added'
console.log('setting3: ',setting3,' setting:',setting ) 

let notes=[60, 20, 40, 50, 23]
let newNotes= notes 
console.log('notes===newNotes ?? ', notes===newNotes)
console.log('notes: ', notes,' newNotes', newNotes)
newNotes[notes.length-1]=34
console.log(notes, newNotes) // same thing because arrays are originally an object.
//they are addressed by refference not by value. 

myNotes=[...notes] // it allows us to copy notes to myNotes. whenever we change item of the new myNotes array it does not affect root notes array.
myNotes[0]=100
console.log('notes:', notes, 'myNotes:', myNotes)

let [firstScore, secondScore, ...others]= notes
demoDOM.innerHTML= ` my average not is ${(firstScore+secondScore)/2}`
console.log(others, firstScore, secondScore)













// const arr1=[2, 3, 4, 5, 6 ,7]
// let first2= arr1[0]
// console.log(first2, 'primitive method')
// const [first, , third, ...rest]= arr1

// const myInfo={
//     name:'meddo',
//     lname:'diler',
//     age:26,
//     nationality:'turkish',
// }

// myInfo.language=['eng', 'tr']
// console.log(myInfo)
// const {name, lname, age, nation, languages}= myInfo
