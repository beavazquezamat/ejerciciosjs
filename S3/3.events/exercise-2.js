let input$ = document.querySelector('input');

input$.addEventListener('focus', showValue);


function showValue() {
    let value = this.value;
    console.log(value);
}