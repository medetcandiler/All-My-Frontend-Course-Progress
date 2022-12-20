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
    adı:"fırtına",
    yazar: "shakspeare",
    tarih: "1610"
}
const bookTable=`
<table>
    <tbody>
        <tr>
            <td> kitap </td>
            <td> ${KİTAP.adı} </td>
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
