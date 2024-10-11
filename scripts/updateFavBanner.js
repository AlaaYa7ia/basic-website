import data from "../topics.js";

export function addToFavouraties() {
  let storedNames = JSON.parse(localStorage.getItem("favs"));

  console.log("here", storedNames);

  let content = ``;

  storedNames.forEach((id) => {
    let card = data.filter(function (item) {
      return item.id == id;
    });

    content += `
        <div class="ticket-fav" onclick="goToDetails(${card[0].id})">
          <div class="img-container-fav">
            <img src="./assets/Logos/${card[0].image}" alt="" />
          </div>
          <p style="margin: 0%">${card[0].topic}</p>
          <div class="Stars" style="--rating: ${card[0].rating}; font-size: medium"></div>
        </div>
        `;
  });

  document.getElementsByClassName("favourites-container")[0].innerHTML =
    content;
}

document.addEventListener("DOMContentLoaded", (event) => {
  addToFavouraties();
});
