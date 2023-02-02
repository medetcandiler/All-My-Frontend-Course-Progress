// setTimeout(() => {
//     console.log('say hello to everyone')
// }, 3000)

// setInterval( () => console.log(new Date().getSeconds()), 1000)

// const sayHi = (callBack) => {
//     callBack();
// };
// sayHi(() => {
//     console.log('Hello to everyone') // argument olarak fonsiyon gectim ve bunu sayhi fonksiyonu icinde calistirdim
// })


// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(data => data.json())
// .then(users => {
//     console.log('first users are fetched', users)
//     fetch('https://jsonplaceholder.typicode.com/posts/2')
//     .then(postData => postData.json())
//     .then(post2 => {
//         console.log('then post2 is fetched ', post2)
//         fetch('https://jsonplaceholder.typicode.com/posts/3').then(data => data.json()).then( post3 => {
//     console.log('third fetch progress ', post3)
// })})})

// async function getData(){
//     const firstPostData=  await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json();
//     const secondPostData= await (await fetch('https://jsonplaceholder.typicode.com/posts/2')).json();
//     const thirdPostDate= await (await fetch('https://jsonplaceholder.typicode.com/posts/3')).json()
//     console.log('first data: ', firstPostData, 'second data:', secondPostData, 'third data:', thirdPostDate)
// }
// getData()





// function tryingCallBack(param){
//     param()
// };
// tryingCallBack(function add(){
//     console.log('callback function is successfull executed')
// });

import axios from 'axios';

// ( async() => {
//     const { data:post1 } = await axios('https://jsonplaceholder.typicode.com/posts/1');
//     const { data:post2 } = await axios('https://jsonplaceholder.typicode.com/posts/2')
//     console.log(post1 , post2)
// })();

// async function getData(){
//     const { data: post1 } = await axios('https://jsonplaceholder.typicode.com/posts/3');
//     const { data: post2 } = await axios('https://jsonplaceholder.typicode.com/posts/4');
//     console.log(post1, post2);
// }
// getData()


// function cookPasta(){
//     let makarna= false;
//     return new Promise(function promise(resolve, reject){
//         if(makarna){
//             resolve('pasta exists on the top shelf. Get that and prepare it.');
//         }else {
//             reject('pasta does not exist. You need to buy pasta');
//         }
//     })
// }
// cookPasta()
// .then( prepare => {
//     console.log(prepare);
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             if(prepare){
//                 resolve('pasta is preparing and almost ready to eat wait for a while');
//             }else reject('pasta is not preparing. you need to think of an another food');
//     }, 3000 )
//     })
// }).catch( err => console.log(err)
// ).then(pasta => {
//     console.log(pasta);
//     return new Promise((resolve, reject) => {
//         if(pasta){
//             resolve('pasta is ready to eat');
//         }else reject('make sandwich');
//     })
// }).catch(err => console.log(err)
// ).then(result =>{
//     console.log(result);
// } 
// ).finally(() => console.log('you can sleep fully'));


// let myPromise = function(number){
//     return new Promise(function(resolve, reject){
//         if ( number > 10 ){
//             resolve('true')
//         }else reject('false')
//     })
// }
// myPromise(22).then(
//     (data) => console.log(data, ' data is accepted '),
//     (rejected)=> console.log(rejected, 'rejected')
// )

const getPosts = function(){
    return new Promise(async (resolve, rejected) => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/posts/3');
    if(data){
        resolve(data)
    }else rejected('data is not here')
})}

const getPost2 = function(){
    return new Promise(async(resolve, rejected) => {
        const { data } = await axios('https://jsonplaceholder.typicode.com/posts/5');
        resolve(data)
})}



( async()=>{
    const user= await getPosts()

    const post = await getPost2()
    
    console.log(post, user)
})()

// ( async() => {
//     const Data= await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json();
//     const Data2= await (await fetch('https://jsonplaceholder.typicode.com/posts/2')).json()
//     console.log('first data : ', Data, 'second data : ', Data2)
// })();
// let asyncFnc= async function(){
//     try{
//         const user = await getPost2()
//         const post = await getPosts()
//         console.log(user, post)
//     }catch(err){
//         console.log(err)
//     }
    
// }
// asyncFnc()

// Promise.all([getPosts(), getPost2()]).then(
//     (success) => console.log(success),
//     (err) => console.log(err)
// )

