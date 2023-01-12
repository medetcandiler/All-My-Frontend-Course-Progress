// while loop loops throug a block of code as long as specified condition is true
let counter=0
// while(counter<10){
//     console.log(counter)
//     counter++
// }

// let text=''
// while(counter<=9){
//     text +='while loop:'+counter + '<br>'
//     counter++
// }
// document.querySelector('#info').innerHTML=text


let userName=''
while(userName.length==0){
    userName= prompt('kulalnici adi girin','medet dielr')
    console.log(userName)
}

const cars=['bmw', 'volvo', 'saab', 'ford']
let i=0
while(cars[i]){
    document.querySelector('#info').innerHTML += cars[i];
    i++;
}