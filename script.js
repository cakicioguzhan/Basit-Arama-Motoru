// Ürün Arama Uygulaması

// Ürünlerimizi yazalım

let urun1 = {
    isim : "Iphone 13 Pro",
    kategori : "Telefon",
    fiyat : 45000 + " ₺"
}
let urun2 = {
    isim : "Xiaomi T13 ",
    kategori : "Telefon",
    fiyat : 38000 + " ₺"
}
let urun3 = {
    isim : "Iphone 14 ",
    kategori : "Telefon",
    fiyat : 52000 + " ₺"
}
let urun4 = {
    isim : "Iphone 11 Pro Max",
    kategori : "Telefon",
    fiyat : 23000 + " ₺"
}
let urun5 = {
    isim : "Xiaomi Note 9 Pro",
    kategori : "Telefon",
    fiyat : 19000 + " ₺"
}

let urunler = [urun1,urun2,urun3,urun4,urun5];
let filtreliUrunler = [];
let kullaniciGirilen = prompt("Aramak istediğiniz markayı girin");

filtreliUrunleriDoldur(urunler);

filtreliUrunleriYazdir(filtreliUrunler)

function filtreliUrunleriDoldur(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(kullaniciGirilen.toUpperCase(),0)){
            filtreliUrunler.push(urun);
        }
    })
}

function filtreliUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log(urun.isim + "|" + urun.kategori + "|" + urun.fiyat);
        console.log("-------------------------------")
    })
}