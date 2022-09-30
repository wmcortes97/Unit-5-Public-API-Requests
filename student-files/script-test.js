/**
 * Setting a global data variable
 * Selecting HTML elements
 */

let profileList;

fetch("https://randomuser.me/api/?results=12")
  .then((data) => data.json())
  .then((data) => data.results)
  .then((data) => (profileList = data));

let gallery = document.querySelector(".gallery");
// let body = document.querySelector("body");
// let modalContainer = document.createElement("div");
// modalContainer.className = "modal-container";

/**
 *
 * @param {array} profileList
 */

function getDetails(profileList) {
  for (let i = 0; i < profileList.length; i++) {
    html = `
  <div class="card">
  <div class="card-img-container">
      <img class="card-img" src="${profileList[i].name.first}" alt="profile picture">
  </div>
  <div class="card-info-container">
      <h3 id="name" class="card-name cap">first last</h3>
      <p class="card-text">email</p>
      <p class="card-text cap">city, state</p>
  </div>
</div>
  
  `;
    gallery.insertAdjacentHTML("beforeend", html);
  }
}

getDetails(profileList);
