let userData = () => {
    return Number(prompt("Enter a number"));
}

let selectStep = () => {
    var sayi = userData();
    var step = Number(prompt("Enter a step beetween 1 and 8"));
    var sum = 0;
    var sayac = 0;
    if (sayi < 1) {
        alert("Please enter a number greater than 1");
    }else{
        for (var i = 1; i <= sayi; i++) {
            switch (step) {
                case 1:
                    sayac++;
                    break

                case 2:
                    sum += i;
                    break

                case 3:
                    if(i % 2 ==! 0){
                        sayac++;
                    }else{
                        continue
                    }
                    break

                case 4:
                    if(i % 2 ==! 0){
                        sum+=i;
                    }
                    break

                case 5:
                    if(i % 2 ==! 0){
                        document.writeln(i);
                    }
                    break

                case 6:
                    if(i % 2 == 0){
                        sayac++;
                    }
                    break

                case 7:
                    if(i % 2 == 0){
                        sum+=i;
                    }
                    break

                case 8:
                    if(i % 2 == 0){
                        document.writeln(i);
                    }
                    break
            }
        }if(step == 1){
            document.writeln(sayac + "tane sayı var");
        }else if(step == 2 || step == 4 || step == 7){
            document.writeln(sum);
        }else if(step == 3){
            document.writeln(sayac + "tane tek sayı var");
        }else if(step == 6){
            document.writeln(sayac + "tane çift sayı var");
        }
        }
    }

selectStep();