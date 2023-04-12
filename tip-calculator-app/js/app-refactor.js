const SELECTORS = {
  billInput: "bill_input",
  btnCustom: ".btn-custom",
  numPeople: "num-ppl",
  pplSpan: ".ppl-label",
  buttons: ".btn",
  tipDisplay: "tip-display",
  totalDisplay: "total-display",
  btnReset: ".btn-reset",
};

const defaultAmount = "0.00";
let total = 0;
let tip = 0;
let customTip = 0;

function getElement(selector) {
  return document.querySelector(selector);
}

function getAllElements(selector) {
  return document.querySelectorAll(selector);
}

function reset() {
  getElement(SELECTORS.totalDisplay).textContent = `$${defaultAmount}`;
  getElement(SELECTORS.tipDisplay).textContent = `$${defaultAmount}`;
  getElement(SELECTORS.billInput).value = "";
  getElement(SELECTORS.btnCustom).value = "";
  getElement(SELECTORS.numPeople).value = "";
  getElement(SELECTORS.numPeople).classList.remove("ppl-req");
  getElement(SELECTORS.pplSpan).classList.remove("ppl-label-req");
}
reset();

function charValid(e) {
  const keyCode = e.keyCode;
  if (keyCode >= 65 && keyCode <= 90) {
    e.preventDefault();
    return false;
  }
}

function noPeople(e) {
  const numPeople = getElement(SELECTORS.numPeople).value;
  if (numPeople === "" || numPeople === "0") {
    e.preventDefault();
    return false;
  }
}

getElement(SELECTORS.billInput).addEventListener("keydown", charValid);
getElement(SELECTORS.btnCustom).addEventListener("keydown", charValid);
getElement(SELECTORS.btnCustom).addEventListener("keydown", noPeople);
getElement(SELECTORS.numPeople).addEventListener("keydown", charValid);

function calculateTip(tipPercent) {
  const numPeople = getElement(SELECTORS.numPeople);
  const pplSpan = getElement(SELECTORS.pplSpan);
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
  const btnCustomValue = getElement(SELECTORS.btnCustom).value;
  customTip =
    btnCustomValue < 10 ? `.0${btnCustomValue}` : `.${btnCustomValue}`;
  billCalc(customTip);
}

function billCalc(tipPercent) {
  const billInputValue = parseFloat(getElement(SELECTORS.billInput).value);
  const numPeopleValue = parseFloat(getElement(SELECTORS.numPeople).value);
  tip = ((billInputValue * tipPercent) / numPeopleValue).toFixed(2);
  getElement(SELECTORS.tipDisplay).textContent = `$${tip}`;
  total = (billInputValue + parseFloat(tip) * numPeopleValue) / numPeopleValue;
  getElement(SELECTORS.totalDisplay).textContent = `$${total.toFixed(2)}`;
}

const buttons = getAllElements(SELECTORS.buttons);
const tipPercentages = [0.05, 0.1, 0.15, 0.25, 0.5];

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    calculateTip(tipPercentages[index]);
  });
});

getElement(SELECTORS.btnCustom).addEventListener("input", calculateCustomTip);
getElement(SELECTORS.btnReset).addEventListener("click", reset);
