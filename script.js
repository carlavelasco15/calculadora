var button = document.querySelectorAll("button");
var inputText = document.getElementById("input");
var mathOperation = [];
var number = "";

number == "" ? inputText.innerHTML = '0' : inputText.innerHTML = number;

document.addEventListener('keydown', (event) => {
    console.log(event.key)
   /*  const keyName = event.key;
    if (keyName == "ArrowRight") {
        miTauler.fitxa.dreta();
        miTauler.fitxa.dibuixar();
    }
    if (keyName == "ArrowLeft") {
        miTauler.fitxa.esquerra();
        miTauler.fitxa.dibuixar();
    } */
},true);    

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        const input = button[i].innerHTML;
        if(!isNaN(input)) {
            number+=input;
        } else {
            if(input == "+" || input == "-" || input == "*" || input == "/") {
                (number == "" ? mathOperation.push(0) : mathOperation.push(number)) ;
                mathOperation.push(input);
                number = "";
                console.log(mathOperation)
            } else if (input == "C") {
                mathOperation = [];
                number = "";
            } else if (input == "=") {
                mathOperation.push(number);
                number = eval(mathOperation.join(' '));
                mathOperation = [];
            }
        }
        number == "" ? inputText.innerHTML = '0' : inputText.innerHTML = number;
    })
}
