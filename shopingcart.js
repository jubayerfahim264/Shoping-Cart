// // Utility function to handle button click
// const handleBtnClick = (valId, isIncrement) => {
//   const input = document.getElementById(valId);
//   let value = parseFloat(input.value) || 0;
//   value = isIncrement ? value + 1 : value - 1;

//   if (value < 0) {
//     return alert("Please add some number");
//   }

//   input.value = value;
// };

// // Event bindings using config
// [
//   { btnId: "mobileBtnPlus", valId: "mobileVal", isInc: true },
//   { btnId: "mobileBtnMinus", valId: "mobileVal", isInc: false },
//   { btnId: "caseBtnPlus", valId: "caseVal", isInc: true },
//   { btnId: "caseBtnMinus", valId: "caseVal", isInc: false },
// ].forEach(({ btnId, valId, isInc }) =>
//   document
//     .getElementById(btnId)
//     ?.addEventListener("click", () => handleBtnClick(valId, isInc))
// );

//Mobile Btn handler
const mobileBtnPlus = document.getElementById("mobileBtnPlus");
const mobileBtnMinus = document.getElementById("mobileBtnMinus");

mobileBtnPlus.addEventListener("click", () => {
  const mobileVal = document.getElementById("mobileVal").value;
  const mobileValNum = parseFloat(mobileVal) + 1;
  document.getElementById("mobileVal").value = mobileValNum;
});
mobileBtnMinus.addEventListener("click", () => {
  const mobileVal = document.getElementById("mobileVal").value;
  const mobileValNum = parseFloat(mobileVal) - 1;
  if (mobileValNum < 0) {
    alert("Please add some number");
  } else {
    document.getElementById("mobileVal").value = mobileValNum;
  }
});
//Case Btn handler
const caseBtnMinus = document.getElementById("caseBtnMinus");
const caseBtnPlus = document.getElementById("caseBtnPlus");

caseBtnPlus.addEventListener("click", () => {
  const caseVal = document.getElementById("caseVal").value;
  const caseValNumber = parseFloat(caseVal) + 1;
  document.getElementById("caseVal").value = caseValNumber;
});

caseBtnMinus.addEventListener("click", () => {
  const caseVal = document.getElementById("caseVal").value;
  const caseValNumber = parseFloat(caseVal) - 1;
  if (caseValNumber < 0) {
    alert("Please add some number");
  } else {
    document.getElementById("caseVal").value = caseValNumber;
  }
});
