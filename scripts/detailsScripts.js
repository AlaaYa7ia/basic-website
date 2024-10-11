import data from "../topics.js";
const createTicket = (card) => {
  return `
    <div class="ticket">
        <div class="img-container">
          <img src="./assets/Logos/${card.image}" alt="" />
        </div>
        <div class="ticket-info-container">
          <p>HTML by ${card.name}</p>
          <div class="ticket-info-iner-container">
            <p>interested about this topic?</p>
            <button class="fav-button">
              Add to Favourites <ion-icon name="heart-outline"></ion-icon>
            </button>
            <p style="color: gainsboro">Unlimited Credits</p>
          </div>
        </div>
      </div>
`;
};

const createDescription = (card) => {
  return `
        <div class="topic-details">
        <div class="topic-details-iner">
          <p class="category-d">${card.category}</p>
          <h1 class="topic-d">${card.topic}</h1>
          <div class="Stars" style="--rating: ${card.rating}"></div>
          <p class="text-d">
            ${card.description}
          </p>
        </div>
      </div>

  `;
};

const createTable = (card) => {
  let content = `      
      <div class="list">
        <h1 class="list-item">${card.topic} Sub Topics</h1>
      `;

  card.subtopics.forEach(myFunction);

  function myFunction(element) {
    content += `<p class="list-item">
              <ion-icon
                name="checkmark-circle-outline"
                style="color: var(--brand-secondary); margin-right: 2px"
              ></ion-icon>
              ${element}
            </p>`;
  }

  content += `</div>`;
  return content;
};

const renderItems = (card) => {
  let content = "";
  let tecket = createTicket(card);
  let description = createDescription(card);
  let table = createTable(card);
  content = tecket + description + table;
  return content;
};

document.addEventListener("DOMContentLoaded", (event) => {
  let id = localStorage.getItem("itemId");

  let card = data.filter(function (item) {
    return item.id == id;
  });

  document.querySelector(".detailsMain").innerHTML = renderItems(card[0]);
});
