const goToDetails = (itemId) => {
  localStorage.setItem("itemId", itemId);
  window.location.href = "/details.html";
};

const UpdateFavouraties = (itemId) => {
  // if exist add to it if not create empty one
  let favs = JSON.parse(localStorage.getItem("favs"));
  if (favs === null) {
    favs = [];
    localStorage.setItem("favs", JSON.stringify(favs));
  }
  favs.push(itemId);
  localStorage.setItem("favs", JSON.stringify(favs));
  location.reload();
};
