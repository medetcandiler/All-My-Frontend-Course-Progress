// // Document Object Model (DOM)
// // https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

// console.log(document.location) // çok fazla bilgi aldım . protocol ? host ? origin ? locatin ?
// console.log(document.location.hostname)
// console.log(location.pathname) 

// console.log(document.head)
// console.log(document.body)

// console.log(document.URL)
// console.log(document.baseURI)

// document.body.style.backgroundColor="red"
// document.body.style.backgroundColor="white" 

// console.log(document.URL) // url bilgisi alındı

// //there is no way to memorize all these codes whenever you need to change sth on DOM go to google and search what you want to change
// //example search javascript change document style and you can see how you change

// document.getElementById('deneme').style.color='brown'
// document.getElementById('button').style.backgroundColor="#c3c3c3"
// document.getElementById('button').style.marginBottom="3rem"


// //myDrills
// document.getElementById("button").addEventListener("click", myFunction)
// function myFunction(){
//     let a=window.open()
//     a.document.open()
//     a.document.write("<h1> Hello World! </h1>")
//     a.document.close()
// }
// //these above code (if you click the button it opens new page and write HelloWorld!)

// document.getElementById("button").addEventListener("click", myalertfnc)
// function myalertfnc(){
//     alert("hello world!")
// } 
// // if you click button it runs alert with Hello World!

// //the other way to do these two same purpose use "onclick" inside tag 

// function mysecondpagefnc(){
//     let x=window.open()
//     x.document.open()
//     x.document.write("<h1>lorem ipsum</h2>")
//     x.document.close()
// }
// function mysecondpagefnc(){
//     alert("hehe")
// }
// // bu şekilde kullanınca functionlar birbirini ezdi ve sadece alert functionum çalıştı
// // üst örnekte new page ve alert functionları beraber çalıştı





// document.getElementById("button").addEventListener("click", myFunction)
// function myFunction(){
//     let a=window.open()
//     a.document.open()
//     a.document.write("<h1> Hello World! </h1>")
//     a.document.close()
// }




document.getElementById("txt").addEventListener("click", abc)
function abc(){
    let x=window.open()
    x.document.open()
    x.document.write("deneme")
    x.document.close()
}

  
