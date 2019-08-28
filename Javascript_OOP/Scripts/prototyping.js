//Tüm javascript nesneleri, özellik ve fonksiyonları prototype'tan alır.
//Date nesnesi Date.prototype
//Array nesnesi Array.prototype'tan alır.

//Object.prototype prototype miras zincirinde daha yukarıdadır.
//Prototype sayesinde sınıfın yapıcı metoduna özellik ve davranış (property & method) ekleyebiliriz.
//Eklenen prototype özelliği tüm nesnelere dağıtılacaktır.
//Bu sayede sonradan proprty ekleme şansına sahip oluruz.



function Calisan(ad,soyad,yas,saatlikUcret) {
    this.ad = ad;
    this.soyad = soyad;
    this.yas = yas;
    this.saatlikUcret = saatlikUcret;
}




//Not: Standart javascript nesnelerinin prototiplerinin değiştirilmesi önerilmez.
