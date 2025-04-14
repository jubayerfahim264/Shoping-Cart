//Mobile Btn handler
const mobileBtnPlus = document.getElementById("mobileBtnPlus");
const mobileBtnMinus = document.getElementById("mobileBtnMinus");

mobileBtnPlus.addEventListener("click", () => {
  const mobileVal = document.getElementById("mobileVal").value;
  const mobileValNum = parseInt(mobileVal) + 1;
  const mobilePriceSum = mobileValNum * 10;

  document.getElementById("mobileVal").value = mobileValNum;
  document.getElementById("mobilePrice").innerText = mobilePriceSum;
  calculateTotalPrice();
});
mobileBtnMinus.addEventListener("click", () => {
  const mobileVal = document.getElementById("mobileVal").value;
  const mobileValNum = parseInt(mobileVal) - 1;
  const mobilePriceSum = mobileValNum * 10;

  if (mobileValNum < 0 || mobilePriceSum < 0) {
    alert("Please add number of quantity");
  } else {
    document.getElementById("mobileVal").value = mobileValNum;
    document.getElementById("mobilePrice").innerText = mobilePriceSum;
    calculateTotalPrice();
  }
});
//Case Btn handler
const caseBtnMinus = document.getElementById("caseBtnMinus");
const caseBtnPlus = document.getElementById("caseBtnPlus");

caseBtnPlus.addEventListener("click", () => {
  const caseVal = document.getElementById("caseVal").value;
  const caseValNumber = parseInt(caseVal) + 1;
  const casingPrice = caseValNumber * 5;
  document.getElementById("casingPrice").innerText = casingPrice;
  document.getElementById("caseVal").value = caseValNumber;
  calculateTotalPrice();
});

caseBtnMinus.addEventListener("click", () => {
  const caseVal = document.getElementById("caseVal");
  const caseValNumber = parseInt(caseVal.value) - 1;
  const casingPrice = caseValNumber * 5;

  if (caseValNumber < 0 || casingPrice < 0) {
    alert("Please add number of quantity");
  } else {
    document.getElementById("caseVal").value = caseValNumber;
    document.getElementById("casingPrice").innerText = casingPrice;
    calculateTotalPrice();
  }
});
// Total Price handler
const calculateTotalPrice = () => {
  const mobileVal = document.getElementById("mobileVal").value;
  const mobileValNum = parseInt(mobileVal);

  const caseVal = document.getElementById("caseVal").value;
  const caseValNumber = parseInt(caseVal);

  const totalPrice = mobileValNum * 10 + caseValNumber * 5;
  document.getElementById("subTotalPrice").innerText = totalPrice;

  const tax = Math.round(totalPrice * 0.15);
  document.getElementById("taxPrice").innerText = tax;

  const TotalPay = totalPrice + tax;
  document.getElementById("totalPrice").innerText = TotalPay;
};
