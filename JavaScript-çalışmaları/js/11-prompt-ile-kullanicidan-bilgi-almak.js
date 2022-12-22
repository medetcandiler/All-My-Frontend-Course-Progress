// ********** prompt ile Kullanicidan Bilgi Almak **********
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

//alert ile biz bilgi veriyorduk, prompt ile biz kullanıcıdan bilgi alıyoruz
//aslında böyle bilgi almak çok modern değil, normalde formla almak isteriz.
// let fullName = prompt("Lutfen Adinizi Giriniz: ")
//// eğer alana adımızı yazarsak console adımız gidecek ama biz domda görmek istiyoruz ??

// document.querySelector("#greeting").innerHTML= ` ${fullName} ` //böyle yada 

// let greetings=document.querySelector("#greeting")
// greetings.innerHTML=(fullName)  //böyle de oluuurr 

// greetings.innerHTML= `${fullName} ` // üstteki yöntemlerde h1 içindeki ana yazım kaybolup yenileri eklendi

// greetings.innerHTML += ` <strong style="color:red;"> ${fullName} </strong>` // JavaScript + biz ne yazarsak.

// 

// let userName=prompt("ismini gir:", "sadece rakam")
// console.log(userName)

// document.write(userName) 

// let a=document.querySelector("#greeting")
// a.innerHTML+= ` ${userName}`

// let userName=prompt("kullanıcı adı", "sadece harf giriniz")

// let x=document.querySelector("#txt")
// x.innerHTML+= ` <br> <strong style="color:red;">${userName}</strong>`

// function istek(){
//     let istek=window.prompt("hesap ekleyin")
//     document
// }

let a="medet"
let b="diler"
let c="gmail.com"
console.log(a.concat(b+c))

let x=["elma", "armut", "denizli", "derya", "deneme"]
console.log(x.length) 
console.log(x.slice(2,4),typeof(x))

let email="aybikeerden@gmail.com"
console.log(email.length)
console.log(email.indexOf("@"))

email=`${email[0].toUpperCase()}${email.slice(1).toLowerCase()}`
console.log(email)

email=email.charAt(0).toUpperCase()+email.slice(1).toLowerCase()
console.log(email)


let mail=a+b+"@"+c
console.log(mail)

let ney=`mail hesabın ${mail} 
adın ${a}
soyadın ${b}
günün saati: ${new Date().getHours()}
`
console.log(ney ,ney.length,"denedik gördük: ", typeof(ney))

let ab="abicim"
let ac="denedik"
let an="demedik"
let info=`
<p>${ab}</p>
<p>${ac}</p>
<p>${an}</p>
`
document.write(info)



