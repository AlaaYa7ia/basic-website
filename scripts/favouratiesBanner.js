// import addToFavouraties from "./updateFavBanner.js";
//show/ hide favouraties panel
function showFavourites() {
  document.getElementsByTagName("footer")[0].classList.toggle("adjest");
  let x = document.getElementsByClassName("favourites")[0];
  if (x.style.display === "none") {
    x.style.display = "flex";
    localStorage.setItem("favourites", "enabled");
  } else {
    x.style.display = "none";
    localStorage.setItem("favourites", "disabled");
  }
}

// On page load
document.addEventListener("DOMContentLoaded", (event) => {
  // addToFavouraties();
  let x = document.getElementsByClassName("favourites")[0];
  if (localStorage.getItem("favourites") === "disabled") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
});
