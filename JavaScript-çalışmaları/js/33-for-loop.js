
// for - loops through a block of code a number of times 
// for/in - loops through the properties of an Object
// for/of - loops through the values of an array
// while - loops throug a block of code as long a s specified condition is true
//  do while - the loop will execute at least once even if the condition is not true, because the code block is executed before the condition .

// for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }
// Expression 1 is executed (one time) before the execution of the code block.

// Expression 2 defines the condition for executing the code block.

// Expression 3 is executed (every time) after the code block has been executed.

let users=['medet', 'diler', 'aybis', 'erden']

// for( let index=0 ; index<10 ; index++){
//     console.log(index)
// }
// let index=30
// for (; index>15 ; index--){
//     console.log(index)
// }
let ulDOM=document.querySelector('#list')
// for(let i=0 ; i< users.length ; i++){
//     newLi=document.createElement('li');
//     newLi.innerHTML= users[i];
//     ulDOM.append(newLi);
//     let firstChild=document.querySelector('ul>li:first-child')
//     firstChild.classList.add('active')
//     newLi.classList.add('list-group-item') 
// }

// for (let i=10; i>=0 ; i--){
//     console.log(i)
// }
// for (let i=20 ; i<=40 ; i++){
//     console.log(i)
// }
// for( let i=40 ; i>=20 ; i--){
//     console.log(i)
// }
// for( let i=0; i<50 ; i++){
//     if( i%2 == 1) console.log(i)
// }

let array=['deneme', 'uzanti','mia','ask']
for(let i=0; i<array.length; i++){
    let newLi=document.createElement('li');
    newLi.innerHTML= array[i];
    ulDOM.append(newLi)
    newLi.classList.add('list-group-item')
    let firstLi=document.querySelector('#list>li:first-child')
    firstLi.classList.add('active')
}





