// KULLANICININ GİRDİĞİ SAYILARI KARŞILAŞTIRMA

var userData1 = prompt("Lütfen birinci sayıyı giriniz");
var userData2 = prompt("Lütfen ikinci sayıyı giriniz");

var userArray = [userData1, userData2];

var min = userArray[0];
var max = userArray[0];

for(var i = 0; i < userArray.length; i++){
    if(max < userArray[i]){
        max = userArray[i];
    }

    if(min > userArray[i]){
        min = userArray[i];
    }
}

document.writeln("Bu sayılardan en büyüğü: " + max);
document.writeln("<br/> Bu sayıların en küçüğü: " + min);
document.writeln("<br/> Bu sayıların en büyüğünün karekökü: " + Math.sqrt(Math.abs(max)));
document.writeln("<br/> Bu sayıların en büyüğünün karekökünün üste yuvarlanmış hali: " + Math.ceil(Math.sqrt(Math.abs(max))));
document.writeln("<br/> Bu sayıların en küçüğünün mutlak değeri: " + Math.abs(min));
document.writeln("<br/> Bu sayıların en küçüğü alt taban, en büyüğü üst taban olacak şekilde üslü sayı olarak yazımı: " + Math.pow(min,max));