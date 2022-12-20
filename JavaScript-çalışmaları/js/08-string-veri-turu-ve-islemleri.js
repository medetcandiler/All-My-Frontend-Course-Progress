//******** String veri Turu Islemlerı

let email="medetcandiler1996@gmail.com"
let firstName="medet"
let lastName="diler"

// string karakter sayisi --> length
console.log(email.length)

// ilk karakteri bulma  -->[0] and charAt(0)
console.log(email[0],".")
console.log(firstName[1])
console.log(lastName.charAt(2))

// buyuk harf / kucuk harf
firstName= firstName.toUpperCase()
console.log(firstName)

firstName= firstName.toLowerCase()
console.log(firstName)

// String içinde istedigımiz bilgiyi aramak ve yerini bulmak -->search
console.log(email.search("@"))  //output:17  @ 17. sırada
console.log(email[17])

console.log(email.search("1234")) //olmayan bir şeyi aratırsam sonuç -1 çıkar
console.log(firstName.search("m")) //m harfi firstName in ilk harfi 0 değeri çıkar 

// Belli bir yere kadar al -->slice  (domain bilgisi)
//mesela yukarıda search ile @ in 17.sırada olduğunu buldum domain kısmını @ dahil almak istiyorsan 17ye slice verebilriiz
console.log(email.slice(17)) //output: @gmail.com
const DOMAİN= email.slice(email.search("@")+1) //Emaili email içinde @ işaretinde sonra slice et 

console.log(DOMAİN) //output: @gmail.com eğer @ gözüksün istermiyorsak yukarıdaki formule 1 ekleyebilriz 

const PASSWORD= email.slice(email.search("@")+1)
console.log(PASSWORD)

console.log(email.search("@")) //buradan emailin 17.sırada olduğunu öğrendik
const DOMAİN1= email.slice(18) //eğerq @ ve sonrasını istiyorsak 17+1 ile slice edebiliriz. 
console.log(DOMAİN1)

console.log(DOMAİN.indexOf(".")) // "." yı arar "." 6. sırada 
console.log(DOMAİN.slice(0,5)) //domainin 0 ile 5. aralığını kesersem sadece  gmail kalır.
console.log(DOMAİN.slice(0, DOMAİN.indexOf(".")))




