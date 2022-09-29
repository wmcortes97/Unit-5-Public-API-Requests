/**
 * Search Markup
 */

/**
 * Gallery Markup
 */

let profileURL = "https://randomuser.me/api/";
let gallery = document.querySelector(".gallery");

function getDetails(data) {
  //   let information = data.results[0]; //able to use dot notation
  //   console.log(information.picture.thumbnail);

  //   for (let i = 0; i < 12; i++)
  let newCard = document.createElement("div");
  newCard.className = "card";

  html = `
<div class="card-img-container">
<img class="card-img" src="${data.picture.large}" alt="profile picture">
</div>
<div class="card-info-container">
<h3 id="name" class="card-name cap">${data.name.first} ${data.name.last}</h3>
<p class="card-text">email</p>
<p class="card-text cap">city, state</p>
</div>
</div>

`;
  newCard.insertAdjacentHTML("beforeend", html);
  gallery.appendChild(newCard);
}

for (let i = 0; i < 12; i++) {
  fetch(profileURL)
    .then((data) => data.json())
    .then((data) => data.results[0])
    .then((data) => getDetails(data));
}

//   <div class="card">
//                     <div class="card-img-container">
//                         <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
//                     </div>
//                     <div class="card-info-container">
//                         <h3 id="name" class="card-name cap">first last</h3>
//                         <p class="card-text">email</p>
//                         <p class="card-text cap">city, state</p>
//                     </div>
//                 </div>
