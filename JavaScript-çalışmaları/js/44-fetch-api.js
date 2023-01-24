// work with fetch api 
// // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

fetch("data/settings.json").then(
    response => response.json()
).then(
    myJson => console.log(myJson)
)

let listDOM=document.querySelector('#list')
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(
    postJson => {
        console.log(postJson)
          postJson.map(item => {
            let newLi= document.createElement('li')
            newLi.textContent+= item.title
            listDOM.appendChild(newLi)
          })
    }
)