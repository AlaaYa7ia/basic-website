import data from "../topics.js";

let card;

document.addEventListener("DOMContentLoaded", (event) => {
  let id = localStorage.getItem("itemId");

  card = data.filter(function (item) {
    return item.id == id;
  });
});
