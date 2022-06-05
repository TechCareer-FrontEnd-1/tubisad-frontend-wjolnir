// ----------SAYI OYUNU----------

var sayi,tahminEdilenSayi,hak=1,i=0;;
    sayi=Math.round(Math.random()*100);
    do
    {
        tahminEdilenSayi=parseInt(prompt("Tahmini Giriniz: "));
        if (tahminEdilenSayi < sayi)
        {
            console.log("Küçük tahmin"); 
        }
        if (tahminEdilenSayi > sayi)
        {
            console.log("Büyük tahmin"); 
        }
        if (tahminEdilenSayi == sayi)
        {
        document.writeln("Tebrikler, tahmininiz doğru. Tuttuğum sayı: "+ sayi + "<br>");
        document.writeln(hak + ". hakkınızda bildiniz."); 
        }
    hak++;
    }
    while ((tahminEdilenSayi!=sayi) && hak<5)
    if (hak>5)
    {
        document.writeln("Hakkınız kalmadı. Tutulan sayı : "+ sayi + "<br>");
    }