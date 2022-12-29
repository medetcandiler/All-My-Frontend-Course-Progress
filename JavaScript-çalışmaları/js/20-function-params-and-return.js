//********* FONKSİYONLARA PARAMETRELER ATAMAK VE FONKSİYONDAN GERİDÖNÜS ALMAK************


//TEMEL KURALLARIMIZ :  FUNDEMENTAL RULES
//1: Bir fonsiyon bir veya birden fazla parametre alabilir
//2: Bir fonksiyon disari bilgi gönderebilir(RETURN) veya göndermeyebilir
//3: Mümkünse fonksiyonun dışa bağımlılığını azaltmak gerekli..

//let firstName="lorem" // eğer bu declaration yok olursa fonksiyonum calısmaz yani fonksionumuzu olduğunca dışarıya bağımlılığını azaltmalıyız 
// parametreye firstName verirsem bu sorunu çözerim
// let firstName="Lorem"
// function greetings(firstName ="", lastName="" ){ //default parametre vererek boş oldukları zaman undefined vermesini önlemiş oluruz
//     // console.log(`Merhaba ${isNaN(firstName) ? firstName : "rakam girme"}`)
//     // console.log(`Hello ${firstName ? firstName : ""}`)
//     return let=deneme=` returns ${firstName} and ${lastName}`
    
// } 

// greetings("medet","diler")



// console.log(firstName) // burada global scope umuzun değeri var "lorem"
// greetings("medet","diler")  // fonksiyon parametremiz olan firstName in değeri
//let info=greetings("medet","diler") // undefined çünkü biz bir declaration belirlerken bir değer atarız ve bizim burada da parametreyle o değeri alabiliyor olmamız gerekli

// function deneme(){
//     console.log("deneme")
//     //return "denemekten çekinmedik be"  // if you add return key express then you function retrun undefined .. it is easy peasy rightt!!
// }
// console.log(deneme())

// let greetings2= (firstName, lastName) => {
//     let deneme= ` Hello again ${firstName} ${lastName}`
//     return deneme   // burası returnun dışarıya aktarıldığı anlamına geliyor. Returnla dışarıya aldık ve fonksiyonumuzu tekrar başka bir değişkene tanımlayıp bu sefer undefinedtan kurtulduk . 
//     //Hatırlayacağın gibi bir önceki örnekte return ifade olmadan fonksiyonu dışarıda bir değişkene bağladığımda ve o değişkene console.log kontrolü yapmak istediğimde undefined returnunu alıyordum . Bu sayade bundan demnide dediğimiz gibi kurtulduk. Kafan içeride declare ettiklerinle karışmasın içeride yaptığın tüm decleraler yani Local Scopelar fonksiyonun içinde kalır dışarıyla bağlantıları yoktur .
// }
// let info= greetings2()
// console.log(info)
// //console.log(greetings2)

// greetings2("medet","diler")  // baktık ve ad soyad bilgisi gelmemiş =?? allah allah neden acaba.. Çünkü functionumus dışarıya RETURNla beraber deneme çıktısını atıyor 


let multiply= () => {
    let sum = 0;
    return function(){
        return sum++;
    }
}

let counter=multiply()
console.log(multiply())