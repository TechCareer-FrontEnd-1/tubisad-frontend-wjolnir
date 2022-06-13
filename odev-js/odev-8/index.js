let arr = () => {
    let randomArr = [];
    
    for (let i = 0; i < 5; i++) {
        random = Number(Math.floor(Math.random() * 10) + 1);
        randomArr.push(random);
    }

    return randomArr;
}

let selectStep = () => {
    
    let randomArray = arr();

    let step = Number(prompt("1 ile 4 arasında bir adım seçiniz"));

    switch (step) {
        case 1:
            var toplam = 0;
            for (var i = 0; i < randomArray.length; i++) {
                toplam += Number(randomArray[i]);
            }
            document.writeln("<br/>" + toplam);
            break

        case 2:
            var toplam = 0;
            for (var i = 0; i < randomArray.length; i++) {
                toplam += Number(randomArray[i]);
            }
            document.writeln(toplam / randomArray.length);
            break

        case 3:
            let enKucuk = Math.min(...randomArray);
            document.writeln("<br/>" + enKucuk);
            break

        case 4:
            let enBuyuk = Math.max(...randomArray);
            document.writeln("<br/>" + enBuyuk);
            break
    }
} // Hocam hatalı çalışıyor tekrardan bakacağım.

document.writeln(arr());
selectStep();