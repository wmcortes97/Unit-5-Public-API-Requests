/**
 * Setting a global data variable
 * Selecting HTML elements
 */

let profileList;

fetch("https://randomuser.me/api/?results=12")
  .then((data) => data.json())
  .then((data) => data.results)
  .then((data) => (profileList = data))
  .then(() => getDetails(profileList))
  .then(() => modalPopup(profileList));

let gallery = document.querySelector(".gallery");
let body = document.querySelector("body");
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
       <img class="card-img" src="${profileList[i].picture.large}" alt="profile picture">
   </div>
   <div class="card-info-container">
       <h3 id="name" class="card-name cap">${profileList[i].name.first} last</h3>
       <p class="card-text">${profileList[i].email}</p>
       <p class="card-text cap">${profileList[i].location.city}, ${profileList[i].location.state}</p>
   </div>
 </div>
   
   `;
    gallery.insertAdjacentHTML("beforeend", html);
  }
}

/**
 *
 * @param {array} profileList
 */
function modalPopup(profileList) {
  for (let i = 0; i < profileList.length; i++) {
    html = `<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="${profileList[i].picture.large}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${profileList[i].name.first}</h3>
            <p class="modal-text">${profileList[i].email}</p>
            <p class="modal-text cap">${profileList[i].location.city}</p>
            <hr>
            <p class="modal-text">(555) 555-5555</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
    </div>
</div>`;
  }
  body.insertAdjacentHTML("beforeend", html);

  let modalContainer = document.querySelector(".modal-container");
  modalContainer.style.display = "none";
}
