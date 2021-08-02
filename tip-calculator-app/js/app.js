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

for (const button of buttons) {
  button.addEventListener("click", () => {
    if (button.value === "5%") {
      tip = ((billInput.value * 0.05) / numPeople.value).toFixed(2);
      tipDisplay.textContent = `$${tip}`;

      total = parseFloat((billInput.value + tip) / numPeople.value).toFixed(2);
      totalDisplay.textContent = `$${total}`;
    } else if (button.value === "10%") {
      tip = ((billInput.value * 0.1) / numPeople.value).toFixed(2);
      tipDisplay.textContent = `$${tip}`;
    } else if (button.value === "15%") {
      tip = ((billInput.value * 0.15) / numPeople.value).toFixed(2);
      tipDisplay.textContent = `$${tip}`;
    } else if (button.value === "25%") {
      tip = ((billInput.value * 0.25) / numPeople.value).toFixed(2);
      tipDisplay.textContent = `$${tip}`;
    } else if (button.value === "50%") {
      tip = ((billInput.value * 0.5) / numPeople.value).toFixed(2);
      tipDisplay.textContent = `$${tip}`;
    }
  });
}

btnReset.addEventListener("click", reset);
