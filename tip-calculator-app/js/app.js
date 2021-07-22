// SELECTORS //

const billInput = document.getElementById("bill_input");

const tipDisplay = document.getElementById("tip-display");
const totalDisplay = document.getElementById("total-display");

let defaultAmount = "0.00";

function init() {}

// BILL INPUT //

billInput.addEventListener("keydown", function (e) {
  let iKeyCode = e.key;
  if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57)) {
    return false;
  }
  return true;
});

// RESET //
const reset = function () {
  document.querySelector(".btn-reset").addEventListener("click", function () {
    totalDisplay.textContent = `$${defaultAmount}`;
    tipDisplay.textContent = `$${defaultAmount}`;
  });
};

reset();
