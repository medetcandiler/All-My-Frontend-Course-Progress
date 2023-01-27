/************************* let ve const ile Değişken Tanımlama    ************************************/ 
// yazılımlarda sırayla okuma kuralı vardır. önce 1. satır okunur sonra 2. 3. 4. 5. ........

// var ile degisken tanimlamak  (eğer rakamsal bir ifade kullanacak olsaydım var serverName = 11111 şeklinde tırnaksız yazardım)
var serverName = "api.kodluyoruz.org"
console.log("kodluyoruz.org")  //eğer böyle kullanırsam değişken atamamın hiçbir anlamı kalmıyor . zaten değişkendi api.kodluyoruz.org'uda kullanmıyorum bu çıktıda
console.log(serverName)
// VAR DEĞİŞKEN TANIMLAMA YÖNTEMİ ARTIK YENİ MODERN YAPIYLA BİRLİKTE KULLANILMAMAYA BAŞLANDI ONUN YERİNE LET ve Const kullanıyoruz.

// let ile değişkeni boş tanımlamak:
// let serverName=123
console.log(serverName)
// üst aşamada değişkenim atalı olmadığı için boş görünecek

// let ile degiskene bilgi atamak;
serverName = "https://kodluyoruz.org"
console.log(serverName)

// let ile degiskene bilgi atayarak tanımlamak;
let password = 1234 
console.log(password)

// degisken ataması yapmadan kullanmaya calışmak; asagidaki ornekte browser inspect kisminda hata alacağız, değişkeni tanımlamayı init etmeden kullanamayız
/* HATALI KULLANIM (eğer bu hatayı var değişken tanımlayıcıyla yapsaydım browserda hata görmeyecektim undefined görecektim. bu iyi bir şey değil hatamızı görmeliyiz...)
console.log(fullname)
let fullName = "Medetcan Diler"
*/
/* Doğru kullanım önce değişkenimi init ettim
let fullName = "Medetcan Diler"
console.log(fullName)
*/

// let ile tanımlanan degiskenin icindeki bilgiyi degistirmek;  bir değişkeni birden fazla kez farklı sekilde tanimlayabiliriz
fullName = "Lorem ipsum"
console.log(fullName)   

// birleştirme veya ekleme işlemi 
fullName + "Yeni Eklenen Bilgi" //acaba eklendimi ?? hayıır eklenmedi hatalı kullanım
// console.log(fullName)
console.log(fullName + " ekleme denemesi") // evet browser consoleda değikenimizin önüne ekleme denemesi eklendiğini görüyoruz fakat aslında değişkene eklemedik

fullName = fullName + " Yeni Bilgi" //burada artık değişkenimize "yeni bilgi" eklenmiş oldu. OUTPUT: lorem ipsum Yeni Bilgi
fullName = " 2.Yeni Bilgi" + fullName // burada da ilk tanımladığımız değişkenin önüne ekledik. OUTPUT: 2.Yeni Bilgi Lorem İpsum Yeni Bilgi

fullName = "sifirlandi" // değişkenimizin içindeki bilggiyi sifirladik/degistirdik..
fullName += "ve yeni bilgi eklendi" // Yeni bilgi eklendi ve birleştirildi ASLINDA YUAKRIDA YAZDIĞIMIZIN KISALTMASI fullName = fullName + " yeni bilgi" 
console.log(fullName) // OUTPUT> sifirlandi ve yeni bilgi eklendi

//const ile değiskeni bos taimlamaya calismak :( ; 
//const SERVER_PASSWORD; // sadece degisken tanimlandı ve için boş bakalım çalışacak mı?? Hayııır hata verdi cont init olamamış. Aslında consta değişken tanımlarken bilgiyide ekliyor olmalıymışım.
const SERVER_PASSWORD = "alsf232134dsf"
console.log(SERVER_PASSWORD) //evet aynen bu şekilde kullanmalıyım bu sefer hiç sorunsuz console'a passwordumuzu gönderdik
//SERVER_PASSWORD = "1234" 
/*  server_password değişkenimizin değerini '1234' ile değiştirdik bakalım lette olduğu
gibi çalışacak mıı ?? Hayıır hata aldıık. Bu değiştirmeyi yapamıyoruz.Constla eğer bir değişken tanımlıyorsak bu birdaha değişmeyecek anlamına geliyor.
Passwordlarımızı veya değişmesini istemediğimiz değişkenlerimizi bu komut ile yazmalıyız */
console.log(SERVER_PASSWORD) //bir şeyi değişmeyeceksek constla tanımlamayalız. örnegin tc kmlk nuamrası, passlar vb...



let denemeName="medetdiler@hotmail.com"
console.log(denemeName, typeof(denemeName))

denemeName= denemeName+" email"
console.log(denemeName)

denemeName+=" email2"   //ekle ve eşitleyip direk yaz...use this short way rather than above method.
console.log(denemeName)

let myAge=26
myAge=++myAge
console.log(myAge)
myAge-=2
console.log(myAge)
