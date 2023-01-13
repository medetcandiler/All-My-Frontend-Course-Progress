//break & continue 
// the break statement 'jumps out' of a loop.
//the continue statement 'jumps over' one iteration in the loop
const LOREM_LIST=[
    'lorem', 'ipsum', 'dolor', 'amet','medet', 'concectetur', 'ehehe' , 'elit', 'deniz'
]
let text=''
for(let i=0; i<LOREM_LIST.length; i++){
    if(i === LOREM_LIST.indexOf(LOREM_LIST[Math.floor(LOREM_LIST.length/2)])){ break; };
    text+= ` ${LOREM_LIST[i]}<br>`
}
document.querySelector('#info').innerHTML=text

// document.querySelector('#info').innerHTML = text


// for(let counter=0; counter < 10 ; counter++){
//     if ( counter === 4 ){break;}
//     console.log(counter)
// }

let ulDOM=document.querySelector('#list')
// for(let i=0; i< LOREM_LIST.length ; i++){
//     if(LOREM_LIST[i]=== 'medet'){break;}
//     let newLi=document.createElement('li');
//     newLi.textContent= LOREM_LIST[i];
//     ulDOM.appendChild(newLi)
// }
for(let i=0; i<LOREM_LIST.length ; i++){
    if(i== LOREM_LIST.indexOf(LOREM_LIST[Math.floor(LOREM_LIST.length/2)])){break;}
    let newLi=document.createElement('li')
    newLi.innerHTML= LOREM_LIST[i]
    ulDOM.appendChild(newLi);
}

for (var i = 0; i <= 10; i++) {
    console.log("dış döngü: " + i);
    for (var j = 0; j <= 5; j++) {
      if (j == 3) {
        break;
      }
      console.log("iç döngü" + j);
    }
   }

let text1=''
for( let i=0 ; i<LOREM_LIST.length ; i++){
    text1 += ` ${LOREM_LIST[i]} <br>`
    for(let x=10; x>=0 ; x--){
        if(x===7){break;}
        text1 += ` ${x}`
    }
}
ulDOM.innerHTML= text1



// loop1:
// for(i=0 ; i<5 ; i++){
//     loop2:
//     for(j=10 ; j>=9 ; j--){
//         if(i === 1 && j===9){
//             continue loop1
//         }
//         console.log(` i= ${i}, j= ${j}`)
//     }
// }

// loop1:
// for(let i=0 ; i<3 ; i++){
//     for(j=0 ; j<5 ; j++){
//         if(j=== 2){
//             continue 
//         }
//         console.log('i:',i , 'j:', j)
//     }
// }

// let users=['aybis', 'medet','mia','mincir','asdf', 'asdf','asdfasdf']
// for(let i=0 ; i<users.length; i++){
//     ulDOM.innerHTML += '=='+users[i]
// }

const userInfo={
    fname:'medetcan',
    lname:'diler',
    age:25
}

for(let value in userInfo){
    document.querySelector('#info').innerHTML += userInfo[value]
}

// let cars=['bmw', 'kia', 'mercedes']
// for(let x of cars){
//     console.log(x)
// }

// let language='javascript'
// for(let x of language){
//     console.log(x)
// }


/***********alistirmaaa  */

let myCars=['bmw', 'kia', 'toyota', 'hyudai']
let a=0
while(myCars[a]){
    document.querySelector('#info').innerHTML+= ` ${myCars[a]} <br>`;
    a++
}

let myTryArray=['denem','lorem','aybis'];

let reduceMethod=myTryArray.reduce((acc, v)=>{
    return acc + v 
},0)
console.log(reduceMethod,' reduce()')

for( let x of myTryArray){
    console.log(x)
}