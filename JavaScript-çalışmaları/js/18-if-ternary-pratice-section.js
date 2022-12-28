
const SMİLE=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`
const SAD=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`

// let getVizeNote=prompt("Final Notunuzu Giriniz","örn: 70")
// let getFinalNote=prompt("final notunu gir", "örn: 80")
// let clickBtn=document.querySelector("#btn").addEventListener("click", myFunction)
//     let input=document.querySelector("#input")
    
// function myFunction(){

// let note=document.querySelector("#info")
// note.innerHTML=input

// if (input.value>=0 && input.value<=100  && input.value!="")
//     switch(true){
//         case(input.value>=50):
//             note.classList.add("text-success")
//             note.innerHTML=` ${SMİLE}  aa notunuz: ${input.value}`
//             break;
//         case(input.value<50):
//             note.classList.add("text-danger")
//             note.innerHTML= ` ${SAD} ff notunuz: ${input.value}`
//             break;
//     }
// else {
//     note.classList.remove("text-danger")
//     note.classList.add("text-info")
//     note.textContent="değer hatalı 0-100 arası sayı girmelisinz."
// }
// }    
let clickBtn=document.querySelector("#btn").addEventListener("click", myFunction)
    

function myFunction(){
let ortalama=document.querySelector("#input").value
let note=document.querySelector("#info")
note.innerHTML=ortalama
if (ortalama>=0 && ortalama<=100  && ortalama!="")
    switch(true){
        case(ortalama>=50):
            note.classList.remove("text-danger")
            note.classList.add("text-success")
            note.innerHTML=` ${SMİLE}  aa notunuz: `
            break;
        case(ortalama<50):
            note.classList.remove("text-success")
            note.classList.add("text-danger")
            note.innerHTML= ` ${SAD} ff notunuz: `
            break;
    }
else {
    note.classList.remove("text-danger")
    note.classList.add("text-info")
    note.innerHTML=`<s>değer hatalı 0-100 arası sayı girmelisinz.</s>`
}
}    



// let averageNote= getVizeNote*0.3 + getFinalNote*0.7
// let x=Math.round(averageNote)
// let info1=document.querySelector("#info")

// if( getVizeNote>=0 && getVizeNote<=100 && getFinalNote>=0 && getFinalNote<=100 && getFinalNote!="" && getVizeNote!=""){

//     info1.classList.add("text-success")
//     switch(true){
//         case(x>=90):
//             info1.innerHTML= `${SMİLE} AA ortalamanız :${x}`
//             break;
//         case(x>=85):
//             info1.innerHTML=` ${SMİLE}  BA ortalamanız : ${x}`
//             break;
//         case( x>=80):
//             info1.innerHTML= `${SMİLE} BB ortalamnız : ${x} `
//             break;
//         case ( x>=75):
//             info1.innerHTML= ` ${SMİLE} CB ortalamanız: ${x}`
//             break;
//         case ( x>= 70):
//             info1.innerHTML `${SMİLE} CC ortalamanız :${x}`
//             break;
//         case ( x>=65): 
//             info1.innerHTML= `${SMİLE} DC ortalamanız ${x}`
//             break;
//         case ( x>=60):
//             info1.innerHTML= `${SMİLE} DD ortalamanız ${x}`
//             break;
//         case (x >=50):
//             info1.innerHTML=`${SMİLE} FD ortalamanız ${x}`
//             break;
//         case ( x < 50 ):
//             info1.classList.add("text-danger")
//             info1.innerHTML=`${SAD} FF kaldınız ortalamanız: ${x}`
//             break;
//     }
// }
// else {
//     info1.classList.add("text-danger","bg-dark","rounded-fill")
//     info1.innerHTML="girdiğiniz bilgiler hatalıdır. Lütfen notlarınızı 0-100 arasında bir sayı olarak tekrar giriniz!"} 


// let examGrade=prompt("puani gir")
// let textInfo;
// 
// let info= document.querySelector("#info")
// 
// if ( examGrade>=0 && examGrade<=100){
//     textInfo=SMİLE
//     info.classList.add("text-secondary")
//     if (examGrade >=90 ){
//             textInfo += " aa"
//             info.classList.add("text-success")
//     }   else if ( examGrade >=85) 
//             textInfo+=" ba"
//         else if ( examGrade >=80) 
//             textInfo+=" bb"
//         else if ( examGrade >=75) 
//             textInfo+=" cb"  
//         else if ( examGrade >=70) 
//             textInfo+=" cc"
//         else if ( examGrade >=65) 
//             textInfo+=" dc"
//         else if ( examGrade >=60) 
//             textInfo+=" dd"
//         else if ( examGrade >=50) 
//             textInfo+=" fd"
//         else if ( examGrade >=0 ){ 
//             textInfo= SAD + "ff"
//             info.classList.add("text-danger")
//         }    
// } else textInfo="BİLGİLER EKSİK"


// info.innerHTML= ` ${textInfo} -> ${examGrade}`








