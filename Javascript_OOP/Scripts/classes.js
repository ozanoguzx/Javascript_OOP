
//Ecmascript2015 ile artık javascript sınıflarını class ifadesi ile oluşturabilmekteyiz.

class NesneAdi {

    //C#'ta gördüğümüz yapıcı metotları alttaki gibi kullanabiliriz.
    constructor(param1, param2) {
        this.firstParameter = param1;
        this.secondParameter = param2;
    }

    func1() {
        alert('İlk Parametre ' + this.firstParameter)
    }

    func2() {
        alert('İkinci Parametre ' + this.secondParameter)
    }

}

//FONKSİYON OLARAK MI CLASS OLARAK MI AÇMALIYIZ?
//Fonksiyon olarak açılan sınıflarda new ifadesi zorunlu değildir.

//fonksiyon olarak açmak ve class olarak açmanın farkı ise, fonksiyon, tanımlandığı satırdan önce erişilebilirken, classlara erişemeyiz.
//Örnek:
class Arac {
    constructor(model, marka, renk) {
        this.model = model;
        this.marka = marka;
        this.renk = renk;
    }
}

function Vehicle(model, brand, color) {
    this.model = model;
    this.brand = brand;
    this.color = color;
}


//----INHERITANCE----

//Extends ifadesi ile, bir parent sınfıtan miras aldığımızı belirtiyoruz.

//super anahtar kelimesi, bir sınıfın parentı olarak öğeleri çağırmamızı sağlar.




//Kendimize bir class tanımlayalım. Dikdörtgen sınfımız parent, kare sınfımız ise child sınıf olarak tanımlanacaktır. Her kare diködrtgendir ancak her dikdörtgen bir kare değildir :)

class Dikdortgen {
    constructor(genislik, yukseklik) {
        this.ad = 'DikDörtgen'
        this.genislik = genislik;
        this.yukseklik = yukseklik;
    }

    adiniSoyle() {
        console.log('Merhaba, Ben ' + this.ad);
    }

    getAlan() {
        if (this.alan != null)
            return this.alan;
        return this.genislik * this.yukseklik;
    }

    setAlan(yeniAlan) {
        this.alan = yeniAlan;
    }
}

//Kare sınıfımız Dikdörtge sınıfından miras alacaktır.
//extends ifadesi ile bu sağlanabilir.

class Kare extends Dikdortgen {
    constructor(kenarUzunlugu) {
        //Eğer kendi özelliklerinden önce super çağırılmazsa, referans hatası alırız.
        //this.NesneAdi = 'Kare'; //Uncaught ReferenceError     
        super(kenarUzunlugu, kenarUzunlugu);
        this.NesneAdi = 'Kare';
    }
}