Number.isNaN(123)

let x=5;
console.log(x)

console.log(Boolean(Number.isInteger(0))) // true 

//veri turunu ogrenmek typeof
let price=123
let stringPrice="1234"
let hasPassword=true
console.log(
    "price: ",
    typeof(price),
    "stringPrice: ",
    typeof(stringPrice),
    "hasPassword: ",
    typeof(hasPassword),
)
let a="123"
typeof(a)==="string"
console.log(Boolean(x))

let testa="123"
console.log(testa) //string

//********** string bilgileri parseInt(integer) ve parseFloat'a donusturmek
let test1="1234"
console.log(parseInt(test1)) // output 1234 (ama sayı gibi gözüküyor)
//yukarıdakinin typepof u hala string çünkü eşitleme yapmadım 
test1=parseInt(test1)
console.log(test1, typeof(test1))  //artık typeof umuzda number oldu




let test2="12.3"
test2=parseInt(test2)
console.log("test2: ",test2, typeof(test2)) 
// OUTPUT test2: 12 number   parseInt(integer) sadece tam sayıları gösterir.

let test3="13px"
test3=parseInt(test3)
console.log("test3: ",test3,typeof(test3))
//OUTPUT test3: 13 number

let test4="px13"
test4=parseInt(test4)
console.log(test4) //output NaN(not a number)

//parseFloat ise ondalıklı sayılarıda kapsar
let test5="13.5px"
test5=parseFloat(test5)
console.log("test5: ",test5, typeof(test5))
//output: test5: 13.5 number

let test6="px13.5"
test6=parseFloat(test6)
console.log(test6, typeof(test6))
//output NaN number

let test7="11px"
test7=Number(test7)
console.log(test7,typeof(test7))
//number ile dönüşüm yapmak istiyorsam identifierimin içinde numberdan başka bir şey olmamalı
//bu şekilde output: NaN number


//************ number veri turunu string'e donusturmek
let number1=123
number1=String(number1)
console.log(number1,typeof(number1))
//OUTPUT: 123 string

let number2=1234
number2.toString()
console.log(number2,typeof(number2))
//OUTPUT: 1234 number  ,,dönüşmedi çünkü eşitlemedik

let number3=1234
number3=number3.toString()
console.log(number3,typeof(number3))
//OUTPUT: 1234 string   ,,bu sefer string yapıya dönüştü

let test10=123
test10+=""  // test10 u stringe çevirdim 
console.log(test10, typeof(test10))

//**********  practicess
console.log("foo"+ +"bar")
let deneme2="medet"
console.log(deneme2, typeof(deneme2))
deneme2++
console.log(deneme2)


console.log("true"== true)
console.log(null=="")
console.log(typeof(""))
console.log(typeof(null))


console.log(Boolean(0))

console.log(0 || "0" && {})
console.log(["a"]>null)


console.log("true"== true)

console.log(null=="")


// number to string conversion practice
let adana=123  // impilicit string döünüşüm
x+=""
console.log("tipi:",x,typeof(x))

let mersin=1234 // explicit string dönüşüm
mersin=mersin.toString()
console.log(mersin, typeof(mersin))

mersin=34.5
console.log(mersin,typeof(mersin))
mersin=String(34.5)
console.log(mersin,typeof(mersin))

// string to number conversion practice
let medetdiler="27yasinda"
medetdiler=parseInt(medetdiler)
console.log(medetdiler,typeof(medetdiler))

let diler="34.5px"
console.log(parseInt(diler),typeof(diler))  //çevirmedi eşitlemedim
// typeof unun number olması için aşağıdaki adım eksik
diler=parseInt(diler)
console.log("diler: ",diler,typeof(diler)) // OUTPUT: diler: 34 number

let deger='44.5denizli'
deger=parseFloat(deger)
console.log(deger,typeof(deger)) 

// Sembollerde dönüşüm sadece expilicit olarak yapılır....


// Boolean conversion practice.
let ses=2 //expilicit conversion
ses=Boolean(ses)
console.log(ses,typeof(ses)) //output: true boolean

let abc="tusthy"
abc=!! abc  //!! sembol true sonuç verdi birde aşağıda ! bakalım
console.log(abc, typeof(abc)) //output: true boolean

let b="akdeniz"
b=!b
console.log(b, typeof(b)) //output: false boolean  



// tekrar

let as="13.55px"
as=as+parseInt(as)  // if you forger this step you typeof won't turn number
console.log(parseInt(as),typeof(as)) // still string because some missing method you did


// number to string
let ab=1334
String(ab)
console.log(ab,typeof(ab))

let cb=1234
cb=String(cb)
console.log(cb,typeof(cb))
 


let cc=123451


cc+=""   // impilicit conversion
console.log(cc, typeof(cc))

let dd="ankara"
dd=!!+dd   // !--> true   !!--> false getirir ve işaretler boolean yapar.
console.log(Boolean(dd),typeof(dd))

let asd=!!0
console.log(asd)













