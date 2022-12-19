Number.isNaN(123)
let x=5;
console.log(x)

Number.isInteger(0)

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





