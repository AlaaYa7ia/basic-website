const goToDetails = (itemId) => {
  localStorage.setItem("itemId", itemId);
  window.location.href = "/details.html";
};

const UpdateFavouraties = (itemId) => {
  //   document
  //     .getElementsByClassName("fav-button")[0]
  //     .classList.add("display-none");
  //   document
  //     .getElementsByClassName("remove-button")[0]
  //     .classList.remove("display-none");

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

const removeFromFavouraties = (itemId) => {
  //   document
  //     .getElementsByClassName("remove-button")[0]
  //     .classList.add("display-none");
  //   document
  //     .getElementsByClassName("fav-button")[0]
  //     .classList.remove("display-none");

  let favs = JSON.parse(localStorage.getItem("favs"));
  if (favs === null) {
    throw console.error("storage is empty");
  }

  let fillterdFavs = favs.filter(function (item) {
    return item != itemId;
  });

  localStorage.setItem("favs", JSON.stringify(fillterdFavs));
  location.reload();
};
