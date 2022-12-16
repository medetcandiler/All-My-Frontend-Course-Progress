//******************* NUMBER *************************/
//Number veri türü tanimlamak;
let price = 100
let tax = 0.18
let priceTax = price * tax 
let total = price + priceTax 
console.log(price, tax, priceTax) // bu şekilde 3 tane bilgiyi aynı anda yazdırabilirim.. bu şekilde OUTPUT 100 0.18 18 >>browser consoleda çok anlamsız gözüktü 
console.log("Price:", price,"rateoftax:", tax,"amountoftotaltax:", priceTax,"totalprice:", total); // eğer satır yetmezse aşağıdaki gibide yazabiliriz.
console.log(
   "raw price:", price,"rateoftax:", tax,"amountoftax:", priceTax,"totalprice:", total   
)

//arttırma ve azaltma işlemleri  (bazen bir fiyatı, rakamı, artık ne ise arttırmak ya da azaltmak isteriz peki naısl ?? hadi öğrenelim)
let counter = 320 
counter = counter + 1 //değişken değiştirme yöntemiyle bunu yapabilriim ve console.log(counter) sonucum artık 320+1 den 321 olarak gözükecek.(uzun yöntem)
console.log(counter) 
counter += 1; //(kısa yolu) eğer bu şekilde yazarsak yeni bilgiyi ekliyoruz ve birleştiriyoruz..    (yuarıda 1 eklemiştik buradada ekledik 322 oldu) (+ ASLINDA 1 oldu gibi düşünebilrsin)
counter ++; // output 323 oldu
console.log(counter)    

/*eksiltme*/
counter --;
console.log(counter) //1 eksildi ve OUTPUT 322

// çarpma yapmak isteyebilriim 
counter *= 10; 
console.log(counter)    // OUTPUT 3220 

counter /= 2; 
console.log(counter)    // OUTPUT 1610

//İSLEM ONCELİGİ
console.log( 2 + 3 * 10) // REAL MATH   50 istiyorsak alttaki gibi yapmalıyız burada 32 gelecektir 
console.log( (3 + 2) * 10) //bu bize 50 verir 

//mod(kalan) alma %(mod sembolü)
//sayi tek mi çift mi ?????
console.log( 3 % 2 ) // consoleda kalanı 1 diye gösterdi
console( 15 % 2 ) // consolda kalanı 1 diye gösterdi
console( 14 % 2 ) // consolda kalanı 0 olarak gösterdi.. YANİ BU ŞEKİLDE SAYI TEK Mİ ÇİFTMİYİ ANLAYABİLİRİZ. OUTPUT "0" ise Çift OUTPUT "1" ise Tek diyebilriz.
console( 17 % 2 ) // kalan 1

//8 urun alan koliye tum urunler sigiyor mu?
console.log("Koli Örnegi", 8 % 8) // OUTPUT Koli örneği: 0  (8 ürünüm var 8 koliye koyunca kalan 0 gibi..)
console.log("Koli kalan urun ornegi:", 18 % 8 ) /*output kalan koli sayisi: 2  (burada sorumuz elimizde 18 tane ürün varsa bu 18 ürünü 8 tane olacak şekilde sığdırmak istediğimde elimde 2 tane ürün kaldı..
(bu sistemle sepete 2 ürün daha ekle yüzde 10 indirim kazan vb. yapılar kurabilirim..)*/ // bu sistemde ne önerebilirim 6 tane daha al ve sepeti tamamla 6 ürün daha ekle şu olsun vb...

// us alma**;
console.log(2 * 2 * 2 * 2) // output 16 olacak. 4 tane 2 nin çarpımı peki bunu kısa şekilde üslü nasıl yazarıım. hadi öğrenelim
console.log(2 ** 4) //Output 16..

//asagi yuvarlama islemi -> Math.floor ;
console.log("Math floor:", Math.floor(1.7))  // buranın anlamı 1.7 yazdık ve math floor komutumuz 1 e yuvarladı 1.4 yazsamda 1 görecektim . 2.1 yazsam 2  4.4 yazsam 4 gibi...

//yukari yuvarlama islemi -> Math.ceil;
console.log("Math ceil:", Math.ceil(1.6))



