var costPerLiter = document.querySelector(".cost");
var litersPurchased = document.querySelector(".ltrs");
var calculateButton = document.querySelector(".calculate");
var totalCost = document.querySelector(".total");

calculateButton.addEventListener("click", () => {
  var cost = costPerLiter.value * litersPurchased.value;
  totalCost.textContent = `$${cost.toFixed(2)}`;
});