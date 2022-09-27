function display(val) {
    document.getElementById('array').value += val;
}
let y;
function equal() {
    let x = document.getElementById('array').value;
    y = eval(x);
    document.getElementById('array').value = y;
    array(y)
}
function array(y) {
    document.getElementById('input').value = 'Array :' + y;
    let arr = []
    arr.push(y);
    console.log('array '+arr)
}
function clearScreen() {
    document.getElementById('array').value = ''
    document.getElementById('input').value = ''
}