// Toggle the new offer form when the "Add to Cart" button is clicked
const addCartBtn = document.getElementById('addCartBtn');
const newOfferForm = document.getElementById('newOfferForm');
const addOfferForm = document.getElementById('addOfferForm');
const offerCardsContainer = document.getElementById('offerCardsContainer');

// Toggle visibility of the form
addCartBtn.addEventListener('click', () => {
  if (newOfferForm.style.display === "none") {
    newOfferForm.style.display = "block";
    addCartBtn.textContent = "Cancel";
  } else {
    newOfferForm.style.display = "none";
    addCartBtn.textContent = "Add to Cart";
  }
});

// Handle form submission
addOfferForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Get form values
  const units = document.getElementById('units').value;
  const discount = document.getElementById('discount').value;
  const price = document.getElementById('price').value;
  const size = document.getElementById('size').value;
  const color = document.getElementById('color').value;

  // Create new offer card
  const newOfferCard = document.createElement('div');
  newOfferCard.classList.add('offer-card');
  newOfferCard.innerHTML = `
    <label class="offer-details">
      <input type="radio" name="units" value="${units}">
      ${units} Units
      <span class="offer-discount">${discount}</span>
      <div class="offer-price">
        $${price} USD<br>
        <span class="original-price">$24.00 USD</span>
      </div>
    </label>
    <div class="options-container">
      <div>
        <label>Size:</label>
        <span>${size}</span>
      </div>
      <div>
        <label>Colour:</label>
        <span>${color}</span>
      </div>
    </div>
  `;

  // Add the new offer card to the offer cards container
  offerCardsContainer.appendChild(newOfferCard);

  // Reset the form and hide it
  addOfferForm.reset();
  newOfferForm.style.display = "none";
  addCartBtn.textContent = "Add to Cart";
});

// Add event listener to update offer card selection when radio button is clicked
document.addEventListener('change', (e) => {
  if (e.target && e.target.type === 'radio') {
    const allOfferCards = document.querySelectorAll('.offer-card');
    allOfferCards.forEach((card) => {
      // Remove 'selected' class from all offer cards
      card.classList.remove('selected');
    });

    // Add 'selected' class to the parent offer card of the clicked radio button
    const parentCard = e.target.closest('.offer-card');
    parentCard.classList.add('selected');
  }
});
