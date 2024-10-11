const goToDetails = (itemId) => {
  localStorage.setItem("itemId", itemId);
  window.location.href = "/details.html";
};
