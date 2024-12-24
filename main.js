// Find the container element
const cardsContainer = document.getElementById('cards-container');

// Create the card elements
function createCard(imageSrc) {
  // Create the card elements
  const card = document.createElement('div');
  card.classList.add("card");

  const cardInner = document.createElement('div');
  cardInner.classList.add("card__inner");

  const cardFront = document.createElement('div');
  cardFront.classList.add("card__face", "card__face--front");

  const h2 = document.createElement('h2');
  h2.textContent = "?";  // Add question mark to h2

  cardFront.appendChild(h2);

  const cardBack = document.createElement('div');
  cardBack.classList.add("card__face", "card__face--back");

  const cardContent = document.createElement('div');
  cardContent.classList.add("card__content");

  const cardHeader = document.createElement('div');
  cardHeader.classList.add("card__header");

  const img = document.createElement('img');
  img.src = imageSrc;  // Set the dynamic image source
  img.alt = "Card Image";  // You can set a dynamic alt text too
  img.classList.add("memo_pic");

  cardHeader.appendChild(img);

  cardContent.appendChild(cardHeader);
  cardBack.appendChild(cardContent);

  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);

  card.appendChild(cardInner);

      // Add click event listener to flip the card
      card.addEventListener('click', function() {
        cardInner.classList.toggle('is-flipped'); // Toggle the flipped class
    });

  return card;
}

// Example: Create and add 4 cards to the container with different images
const images = ["img/elephant.avif", "img/tiger.avif", "img/monkey.avif", "img/cow.avif","img/dog.avif","img/elephant.avif","img/fox.avif", "img/giraffe.avif","img/kakadu.avif","img/lioness.avif","img/snake.avif", "img/squirrel.avif"];

images.forEach(image => {
  const newCard = createCard(image);
  cardsContainer.appendChild(newCard);
});
