//Kendimize ilk olarak bir kişi classı oluşturuyoruz.
function yeniKisiOlustur(isim) {
    var kisi = {};
    kisi.ad = isim;
    kisi.karsilama = function () {
        alert("Merhaba " + kisi.ad + ".");
    };
    return nesne;
}

//Üstteki yöntem uzun ve gereksiz.
//Yapıcı metotlar sayesinde istersek bu işi alttaki gibi kısaltabiliriz.

function Kisi(isim) {
    //This kelimesi şu anda kullanılan nesneye işaret eder.
    this.ad = isim;
    this.karsilama = function () {
        alert("Merhaba " + this.ad + ".");
    };
}

