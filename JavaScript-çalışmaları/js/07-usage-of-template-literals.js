//******** usage of template literals
let userName="medet"
const DOMAİN="hotmail.com"
let mail=userName+"@"+DOMAİN
// console.log("hello: ",userName,"welcome to our website: ","your mail adress is: ",mail)


let info=`Hello ${userName} welcome to our website
your mail adress: ${mail}
your length of mail adress:${mail.length}
first lettor of your mail adress:${userName[0]}.
borcunuz:${(2+3)*5} TL   
günün saat bilgisi: ${new  Date().getHours()}
`
console.log(info,typeof(info))


//backticks içine istediğimiz kadar bilgiyi yazabiliriz 
// ve dolar ve süslü parantezle beraber istediğimiz declarationı çağırabiliriz
//satır atlatmaya duyarlıdır atlattıkça consoleda da atlar.
 
// pracitice by myself
let productStock=102
let productName= "BMW"
let price="105.8bin TL"
let tax=.18
let totalTax=tax*parseFloat(price)
let totalPrice=totalTax+price


let info2=`
stocks: ${productStock}
choosen product mark: ${productName}
amount of price:${price}
amount of price with taxes:${totalPrice}
time of the day:${new Date().getHours()}.
`

console.log(info2)