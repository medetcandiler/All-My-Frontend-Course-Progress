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


let oldString="en sevdiğim yemek:\nkebapn\nlahmacun"
console.log(oldString)

let newString=`
en sevdiğim yemek:
kebap
lahmacun`
console.log(newString)

let isim="medetcan"
let soyad="diler"
console.log(`benim adım:${isim} ${soyad}`)

let ad="meddo"
let department="engineering field"
let eyeColor="brown"
const YAS="26"

const PERSON=`
<p>${ad}</>
<p>${department}</>
<p>${eyeColor}</>
<p>${YAS}</>
`;
document.body.innerHTML=PERSON

//Alıştırma>aşağıdaki kod satırlarını Template Strings yazımına göre düzenleyiniz...
const KİTAP={
    adi:"fırtına",
    yazar: "shakspeare",
    tarih: "1610"
}
const bookTable=`
<table border>
    <tbody>
        <tr>
            <td> kitap </td>
            <td> ${KİTAP.adi} </td>
        </tr>
        <tr>
            <td> yazar </td>
            <td> ${KİTAP.yazar} </td>
        </tr>
        <tr>
            <td> tarih </td>
            <td> ${KİTAP.tarih} </td>
        </tr>
    </tbody>
</table>
`

document.body.innerHTML=bookTable

let isim1="medet"
let soyad2="diler"
let yas1=12

let body=`
isim: ${isim1} <br>
soyisim: ${soyad2} <br>
yas: ${yas1}
`
document.body.innerHTML=body




let a="lorem"
let b=32.4
const DOMAİNS="kodluyoruz.org"

let infos=`
üstüme iyilik: ${a}
sağlık a dostlar: ${parseInt(b)}
uzantı mailin: ${DOMAİNS}
timeoftheday: ${new Date().getHours()}.`

console.log(infos)
document.body.innerHTML=infos

let table2=` 
<table border>
    <thead>
        <tr>
            <th>fiyat</th>
            <th>dana</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${a}</td>
            <td>${b}</td>
        </tr>
    </tbody>
</table>`
document.body.innerHTML=table2