let input$ = document.querySelector('input');

input$.addEventListener('input', showValue);


function showValue() {
    let value = this.value;
    console.log(value);
}