import data from "../topics.js";

const creatItem = (item) => {
  return `<div class="card">
            <div class="img-container  ">
              <img src="./assets/Logos/${item.image}" alt="">
            </div>
            <div class="info  ">
              <div>
                <p  >${item.category}</p>
                <h1  >${item.topic}</h1>
              </div>
              <div>
                <div class="Stars" style="--rating: ${item.rating};"></div>
                <p  >Author: ${item.name}</p>
              </div>
            </div>
          </div>`;
};

const createList = (list) => {
  return list.map((item) => creatItem(item)).join("");
};

const renderItems = () => {
  document.querySelector(".items").innerHTML = createList(data);
  document.querySelector(
    ".topics-counter"
  ).innerHTML = `<h1>"${data.length}" Web Topics Found</h1>`;
};

document.onload = renderItems();
