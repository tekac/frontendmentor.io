// SELECTORS //

const billInput = document.getElementById("bill_input");
const btnCustom = document.querySelector(".btn-custom");
const numPeople = document.getElementById("num-ppl");
const buttons = document.querySelectorAll(".btn");

const tipDisplay = document.getElementById("tip-display");
const totalDisplay = document.getElementById("total-display");
const btnReset = document.querySelector(".btn-reset");

let defaultAmount = "0.00";
let total = 0;
let tip = 0;

// RESET //

const reset = function () {
  totalDisplay.textContent = `$${defaultAmount}`;
  tipDisplay.textContent = `$${defaultAmount}`;

  billInput.value = "";
  btnCustom.value = "";
  numPeople.value = "";
};
reset();

// CALCULATION LOGIC
//!! IF A BUTTON IS SELECTED AND NUM-PPL IS EMPTY - MAKE REQUIRED!

for (const button of buttons) {
  button.addEventListener("click", () => {
    if (numPeople.value != "") {
      switch (button.value) {
        case "5%":
          billCalc(0.05);
          break;
        case "10%":
          billCalc(0.1);
          break;
        case "15%":
          billCalc(0.15);
          break;
        case "25%":
          billCalc(0.25);
          break;
        case "50%":
          billCalc(0.5);
          break;
      }
    } else {
      // code here to require num-ppl input
    }
  });
}

function billCalc(tip) {
  tip = ((billInput.value * tip) / numPeople.value).toFixed(2);
  tipDisplay.textContent = `$${tip}`;

  total = (parseFloat(billInput.value) + parseFloat(tip)) / numPeople.value;
  totalDisplay.textContent = `$${total.toFixed(2)}`;
}

btnReset.addEventListener("click", reset);
