// SELECTORS //
const billInput = document.getElementById("bill_input");
const btnCustom = document.querySelector(".btn-custom");
const numPeople = document.getElementById("num-ppl");
const pplSpan = document.querySelector(".ppl-label");
const buttons = document.querySelectorAll(".btn");
const tipDisplay = document.getElementById("tip-display");
const totalDisplay = document.getElementById("total-display");
const btnReset = document.querySelector(".btn-reset");

let defaultAmount = "0.00";
let total = 0;
let tip = 0;
let cstTip = 0;

// RESET //
function reset() {
    totalDisplay.textContent = `$${defaultAmount}`;
    tipDisplay.textContent = `$${defaultAmount}`;
    billInput.value = "";
    btnCustom.value = "";
    numPeople.value = "";
    numPeople.classList.remove("ppl-req");
    pplSpan.classList.remove("ppl-label-req");
}

reset();

// CHAR VALIDATION //
function charValid(e) {
    const keyCode = e.keyCode;
    if (keyCode >= 65 && keyCode <= 90) {
        e.preventDefault();
        return false;
    }
}

function noPeople(e) {
    if (numPeople.value === "" || numPeople.value === "0") {
        e.preventDefault();
        return false;
    }
}

billInput.addEventListener("keydown", charValid);
btnCustom.addEventListener("keydown", charValid);
btnCustom.addEventListener("keydown", noPeople);
numPeople.addEventListener("keydown", charValid);

// CALCULATION LOGIC //
function calculateTip(tipPercent) {
    if (numPeople.value !== "" && numPeople.value !== "0") {
        numPeople.classList.remove("ppl-req");
        pplSpan.classList.remove("ppl-label-req");
        billCalc(tipPercent);
    } else {
        numPeople.classList.add("ppl-req");
        pplSpan.classList.add("ppl-label-req");
    }
}

function calculateCustomTip() {
    cstTip =
        btnCustom.value < 10 ? ".0" + btnCustom.value : "." + btnCustom.value;
    billCalc(cstTip);
}

function billCalc(tipPercent) {
    tip = ((billInput.value * tipPercent) / numPeople.value).toFixed(2);
    tipDisplay.textContent = `$${tip}`;
    total =
        (parseFloat(billInput.value) + parseFloat(tip) * numPeople.value) /
        numPeople.value;
    totalDisplay.textContent = `$${total.toFixed(2)}`;
}

for (const button of buttons) {
    button.addEventListener("click", () => {
        switch (button.value) {
            case "5%":
                calculateTip(0.05);
                break;
            case "10%":
                calculateTip(0.1);
                break;
            case "15%":
                calculateTip(0.15);
                break;
            case "25%":
                calculateTip(0.25);
                break;
            case "50%":
                calculateTip(0.5);
                break;
        }
    });
}

btnCustom.addEventListener("input", calculateCustomTip);

btnReset.addEventListener("click", reset);
