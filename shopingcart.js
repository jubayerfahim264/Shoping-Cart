// Utility to update item quantity and price
const updateItem = (idPrefix, pricePerUnit, isIncrement, priceId) => {
  const input = document.getElementById(`${idPrefix}Val`);
  let quantity = parseInt(input.value) || 0;
  quantity += isIncrement ? 1 : -1;

  if (quantity < 0) {
    alert("Please add number of quantity");
    return;
  }

  input.value = quantity;
  document.getElementById(priceId).innerText = quantity * pricePerUnit;
  calculateTotalPrice();
};
// Button event bindings
document
  .getElementById("mobileBtnPlus")
  .addEventListener("click", () =>
    updateItem("mobile", 10, true, "mobilePrice")
  );
document
  .getElementById("mobileBtnMinus")
  .addEventListener("click", () =>
    updateItem("mobile", 10, false, "mobilePrice")
  );

document
  .getElementById("caseBtnPlus")
  .addEventListener("click", () => updateItem("case", 5, true, "casingPrice"));
document
  .getElementById("caseBtnMinus")
  .addEventListener("click", () => updateItem("case", 5, false, "casingPrice"));

// Total Price Calculator
const calculateTotalPrice = () => {
  const mobileQty = parseInt(document.getElementById("mobileVal").value) || 0;
  const caseQty = parseInt(document.getElementById("caseVal").value) || 0;

  const subtotal = mobileQty * 10 + caseQty * 5;
  const tax = Math.round(subtotal * 0.15);
  const total = subtotal + tax;

  document.getElementById("subTotalPrice").innerText = subtotal;
  document.getElementById("taxPrice").innerText = tax;
  document.getElementById("totalPrice").innerText = total;
};
