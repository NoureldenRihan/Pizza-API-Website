fetch("https://pizza-data-api.herokuapp.com/pizzas")
  .then((res) => res.json())
  .then((data) => renderPizzaNum(data.length));

function renderPizzaNum(num) {
  let pizzaNumSpan = document.getElementById("num");
  pizzaNumSpan.innerHTML = num;
}
