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
  let newOut;

  if (sel === '+') {
    newOut = inp1 + inp2;
    output.value = newOut.toString();
  } else if (sel === '-') {
    newOut = inp1 - inp2;
    output.value = newOut.toString();
  } else if (sel === '*') {
    newOut = inp1 * inp2;
    output.value = newOut.toString();
  } else if (sel === '/') {
    newOut = (inp1 / inp2).toFixed(2);
    output.value = newOut.toString();
  } else {
    console.log('you broke it');
  }

  // Error handling
  if (output.value === 'Infinity') {
    output.value = 'N/A';
  }
  
  /* if (isNaN(output.value)) {
    output.value = 'N/A NAN';
  } */
}

// Event Listeners
equal.addEventListener('click', calculate);
input1.addEventListener('change', calculate);
input1.addEventListener('keyup', calculate);
select.addEventListener('change', calculate);
input2.addEventListener('change', calculate);
input2.addEventListener('keyup', calculate);
