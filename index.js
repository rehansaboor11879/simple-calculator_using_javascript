let value1 = ''
let result;
function display(value){
    value1 = value1 + value
    document.getElementById("array").value = value1;
    const expression = /\+|\*|\-|\//;
    const numbers = value1.split(expression)

    const numbera = +numbers[0]
    const numberb = +numbers[1]

    const operation = value1.match(expression)
    const operator = operation[0]
    
}

function equal(numbera,operator,numberb) {
    switch(operator) {
        case '+':
            result = numbera + numberb;
            break;
        case '-':
            result = numbera - numberb;
            break;
        case '*':
            result = numbera * numberb;
            break;
        case '/':
            result = numbera / numberb;
            break;
    }
    console.log("array :" + result);
    document.getElementById("array").value = result;
    // document.getElementById("input").value = 'array : ' + arr;
}

function clearScreen() {
    document.getElementById('array').value = ''
}