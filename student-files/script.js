/**
 * Search Markup
 */

/**
 * Gallery Markup
 */

let profileURL = "https://randomuser.me/api/";
let gallery = document.querySelector(".gallery");
let body = document.querySelector("body");

function getDetails(data) {
  let newCard = document.createElement("div");
  newCard.className = "card";

  html = `
<div class="card-img-container">
<img class="card-img" src="${data.picture.large}" alt="profile picture">
</div>
<div class="card-info-container">
<h3 id="name" class="card-name cap">${data.name.first} ${data.name.last}</h3>
<p class="card-text">${data.email}</p>
<p class="card-text cap">${data.location.city}, ${data.location.state}</p>
</div>
</div>

`;
  newCard.insertAdjacentHTML("beforeend", html);
  gallery.appendChild(newCard);

  modalWindow(data);
}

function modalWindow(data) {
  let modalContainer = document.createElement("div");
  modalContainer.className = "modal-container";

  html = `   <div class="modal">
  <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
  <div class="modal-info-container">
      <img class="modal-img" src="${data.picture.large}" alt="profile picture">
      <h3 id="name" class="modal-name cap">name</h3>
      <p class="modal-text">email</p>
      <p class="modal-text cap">city</p>
      <hr>
      <p class="modal-text">(555) 555-5555</p>
      <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
      <p class="modal-text">Birthday: 10/21/2015</p>
  </div>
</div>`;

  let card = modalContainer.insertAdjacentHTML("beforeend", html);
  modalContainer.style.display = "none";

  body.appendChild(modalContainer);
}

for (let i = 0; i < 12; i++) {
  fetch(profileURL)
    .then((data) => data.json())
    .then((data) => data.results[0])
    .then((data) => getDetails(data));
}

let clickableCard = document.querySelector("#gallery");

clickableCard.addEventListener("click", (e) => {
  let cards = document.querySelectorAll(".modal-container");

  for (let i = 0; i < 12; i++)
    if (e.target.className === "card") {
      cards[i].style.display = "";
    }
});