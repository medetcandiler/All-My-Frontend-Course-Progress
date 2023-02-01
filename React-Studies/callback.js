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


( async() => {
    const Data= await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json();
    const Data2= await (await fetch('https://jsonplaceholder.typicode.com/posts/2')).json()
    console.log('first data : ', Data, 'second data : ', Data2)
})();