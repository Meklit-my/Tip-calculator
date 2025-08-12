document.getElementById("calcbtn").addEventListener("click", calculateTip);
function calculateTip() {
  let bill = Number(document.getElementById("billAmount").value);
  let tip = parseFloat(document.getElementById("tipPercent").value);
  let resultElement = document.getElementById("result");
  if (isNaN(bill) || bill < 0) {
    resultElement.textContent = "Please enter a valid bill amount.";
    return;
  }
  if (isNaN(tip) || tip < 0) {
    resultElement.textContent = "Please enter a valid tip percentage.";
    return;
  }
  let tipAmount = bill * (tip / 100);
  let total = bill + tipAmount;
  resultElement.textContent =
    "Tip: $" + tipAmount.toFixed(2) + " | Total: $" + total.toFixed(2);
}
