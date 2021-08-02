// SELECTORS //

const billInput = document.getElementById("bill_input");
const btnCustom = document.querySelector(".btn-custom");
const numPeople = document.getElementById("num-ppl");

const tipDisplay = document.getElementById("tip-display");
const totalDisplay = document.getElementById("total-display");

let defaultAmount = "0.00";

// RESET //

const reset = function () {
  document.querySelector(".btn-reset").addEventListener("click", function () {
    totalDisplay.textContent = `$${defaultAmount}`;
    tipDisplay.textContent = `$${defaultAmount}`;

    billInput.value = "";
    btnCustom.value = "";
    numPeople.value = "";
  });
};

// CALCULATION LOGIC

reset();
