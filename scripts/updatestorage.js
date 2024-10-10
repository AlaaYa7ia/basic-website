const goToDetails = (itemId) => {
  console.log(itemId);
  localStorage.setItem("itemId", itemId);
  window.location.href = "/details.html";
};
