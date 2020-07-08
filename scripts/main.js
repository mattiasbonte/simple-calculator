/* ----------------- */
/* Simple Calculator */
/* ----------------- */

// Get input elements and store them inside variables that will not change
const input1 = document.querySelector('.js-input1');
const select = document.querySelector('.js-select');
const input2 = document.querySelector('.js-input2');
const output = document.querySelector('.js-output');
const equal = document.querySelector('.js-equal');

// Calculator function
function calculate() {
  let inp1 = Number(input1.value);
  let sel = select.value;
  let inp2 = Number(input2.value);
  let out;

  if (sel === '+') {
    out = inp1 + inp2;
    output.value = out.toString();
  } else if (sel === '-') {
    out = inp1 - inp2;
    output.value = out.toString();
  } else if (sel === '*') {
    out = inp1 * inp2;
    output.value = out.toString();
  } else if (sel === '/') {
    out = (inp1 / inp2).toFixed(2);
    output.value = out.toString();
  } else {
    console.log('you broke it');
  }
}

// Event Listeners
equal.addEventListener('click', calculate);
input1.addEventListener('change', calculate);
input1.addEventListener('keyup', calculate);
select.addEventListener('change', calculate);
input2.addEventListener('change', calculate);
input2.addEventListener('keyup', calculate);
