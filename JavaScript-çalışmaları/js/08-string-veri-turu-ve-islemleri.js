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
console.log(DOMAİN.slice(0, DOMAİN.indexOf("."))) // yukarıdakilerin tek basamak içindeki hali

// bilgiyi değiştir -->replace

email.replace("gmail.com","kodluyoruz.org") 
console.log(email) // a a replace edemedik nerede yanlış yaptık ki aşağıya bakk!!

email=email.replace("gmail.com", "kodluyoruz.org")
console.log(email) // evet eşitliği eksik yapmıştık burada değiştirebildik

//istediğim bilgi var mı? -->includes
// mesela mail domaini içinde yabancı karakter var mı ??
 console.log(email.includes("@"))  //email içerisinde @ includes mu diye sordum olduğu için true sonucunu aldım 

 console.log(email.includes("4")) // 4 email içerisinde olmadığı için False


 // istediğim bilgiyle başladı mı? bitti mi ? --> startWidth, endWidth ;
// mesela benim istediğim domainle bitti mi ??  
console.log(email.endsWith("@"))  // emailim @ ile mi bitti diye sordum bitmediği için false 
console.log(email.endsWith(".com")) // .org ile bittiği için false 
console.log(email.endsWith(".org")) // .org ile bittiği için true aldım 


email=email.replace("kodluyoruz.org","hotmail.com")  //replace with hotmail.com 
console.log(email.endsWith("hotmail.com"))  
console.log(email.includes(".com")) //.com inclues then result is true

//ilk harfleri büyük yapmak 
let fullName=`${firstName[0].toUpperCase()}${firstName}`
console.log(fullName)  // output: Mmedet    hatamızı hatırladın mı medooo olmadı burasıı

//evet eğer firstName'e slice vevrirsen Mmedet teki fazla m den kurtulabilrsin
let fullName2=`${firstName[0].toUpperCase()}${firstName.slice(1)}`
console.log(fullName2) //output: Medet  başarıyla ilk harfi büyüttük 

let fullName3=`${firstName[0].toUpperCase()}${firstName.slice(1)} ${lastName[0].toUpperCase()}${lastName.slice(1)}`
console.log(fullName3)   // adımın ve soyadımın başharfini büyük yapabildiim


//tekrar etttt kesinlikleeee


let mail="medetdiler1996@gmail.com"
console.log(mail.slice(1))


let deneme2="medetcan"
console.log(deneme2.slice(2))