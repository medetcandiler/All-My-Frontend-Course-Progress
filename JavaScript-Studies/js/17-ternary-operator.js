/******** ternary operator ile short if kullanimi ******/

//let userName=prompt("kullanici adini yaz")
// let h=document.querySelector("#deneme")
// let info = ` ${isNaN(userName) ? userName+" geçerli": "lütfen harf giriniz" }`
// h.innerHTML=info


// ternary kullanimi 
// koşul ? dogruysa : yanlıssa

//let weather=prompt("hava durumunu yağmurlumu", "yes or no")
// let infos= (weather == "yes") ? "şemsiye" : "nothnig"
// console.log(infos)

let price;   
let myMoneY=100
let canIBuy= price<120 ? "YOU can buy " :
             price>120 ? "you cannot buy": "para miktarını girmen gerekmekterdir"   

console.log(canIBuy)

let boolean=""
const deneme= boolean ? true : false ;
console.log(deneme)

console.log(boolean)












// İNPUT İÇİNE YAZILAN BİLGİNİN DOM İÇERİSİNDE İD Sİ DENEME OLAN H1 İÇİNE YAZDIRMA ÖRNEĞİ (TEKRAR)
// let btn=document.querySelector("#btn").addEventListener("click", fnc)
// function fnc(){
//     let input=document.querySelector("#input")
//     let h=document.querySelector("#deneme")
//     h.textContent=input.value
//     input.value=""
// }



