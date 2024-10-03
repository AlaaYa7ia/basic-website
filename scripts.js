
//fetching data from JSON
function fetchJSONData() {
    fetch("./topics.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>{

            let output = "";
            let count = data.length;

            for(let item of data){
                output += `
                    <div class="card lt-drk">
                        <div class="img-container lt-drk">
                            <img src="./assets/Logos/${item.image}" alt="">
                        </div>
                        <div class="info lt-drk">
                            <div>
                                <p class="lt-drk">${item.category}</p>
                                <h1 class="lt-drk">${item.topic}</h1>
                            </div>
                            <div>
                                <div class="stars">
                                    <ion-icon name="star" class="star"></ion-icon>
                                    <ion-icon name="star" class="star"></ion-icon>
                                    <ion-icon name="star" class="star"></ion-icon>
                                    <ion-icon name="star" class="star"></ion-icon>
                                    <ion-icon name="star-half-outline" class="star"></ion-icon>
                                </div>
                                <p class="lt-drk">Author: ${item.name}</p>
                            </div>
                        </div>
                    </div>  

                `;
            }
            document.querySelector(".items").innerHTML = output;
            document.querySelector(".topics-counter").innerHTML = `<h1>"${count}" Web Topics Found</h1>`
        })
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}
fetchJSONData();


// light - dark mood
function toggleDarkMode() {
    //document.querySelectorAll('.lt-drk').forEach(el =>el.classList.toggle('dark-mode-items'));
    let isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
  }
  
  // On page load
  document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        //document.querySelectorAll('.lt-drk').forEach(el =>el.classList.add('dark-mode-items'));
    }
  });

