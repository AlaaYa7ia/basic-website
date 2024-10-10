/**show/ hide favouraties panel */
function showFavourites() {
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
  let x = document.getElementsByClassName("favourites")[0];
  if (localStorage.getItem("favourites") === "disabled") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
});
