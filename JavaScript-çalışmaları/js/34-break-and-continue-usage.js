//break & continue 
// the break statement 'jumps out' of a loop.
//the continue statement 'jumps over' one iteration in the loop
const LOREM_LIST=[
    'lorem', 'ipsum', 'dolor', 'amet','medet', 'concectetur', 'ehehe' , 'elit'
]
// let text=''
// for(let i=0; i<LOREM_LIST.length; i++){
//     if(i === LOREM_LIST.indexOf(LOREM_LIST[Math.floor(LOREM_LIST.length/2)])){ break; };
//     text+= `her kelime ayri ayri yazilcak mi ${LOREM_LIST[i]} <br>`
// }

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

// for (var i = 0; i <= 10; i++) {
//     console.log("dış döngü: " + i);
//     for (var j = 0; j <= 5; j++) {
//       if (j == 3) {
//         break;
//       }
//       console.log("iç döngü" + j);
//     }
//    }

let text=''
for( let i=0 ; i<LOREM_LIST.length ; i++){
    text += ` ${LOREM_LIST[i]}`
    for(let x=10; x>=0 ; x--){
        if(x===7){break;}
        text += ` ${x}`
    }
}
ulDOM.innerHTML= text
