const orderForm = document.getElementById('order-form');
const summaryBox = document.getElementById('summary');
const dishSelect = document.getElementById('dish');
const quantityInput = document.getElementById('quantity');
const paymentInput = document.querySelector('input[name="payment"]:checked');

function updateSummary() {
  const dish = dishSelect.value || 'Select a dish';
  const quantity = quantityInput.value || '1';
  const payment = document.querySelector('input[name="payment"]:checked')?.value || 'Select payment';
  const priceMap = {
    jollof: 80,
    egusi: 95,
    stew: 75,
    kenkey: 90,
    grilled: 100,
    friedrice: 85,
    noodles: 70
  };
  const price = priceMap[dish] || 0;
  const total = price * Number(quantity);
  summaryBox.innerHTML = `<strong>Order summary</strong><br>Dish: ${dish}<br>Quantity: ${quantity}<br>Payment: ${payment}<br>Total: ₵${total}`;
}

if (orderForm) {
  orderForm.addEventListener('input', updateSummary);
  orderForm.addEventListener('change', updateSummary);
  updateSummary();
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
