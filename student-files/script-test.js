/**
 * Setting a global data variable
 * Selecting HTML elements
 */

let profileList;

fetch("https://randomuser.me/api/?results=12&nat=us")
  .then((data) => data.json())
  .then((data) => data.results)
  .then((data) => (profileList = data))
  .then(() => getDetails(profileList))
  .then(() => modalPopup(profileList));

let gallery = document.querySelector(".gallery");
let body = document.querySelector("body");

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

  //modalPopup(profileList);
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
            <img class="modal-img" src="${
              profileList[i].picture.large
            }" alt="profile picture">
            <h3 id="name" class="modal-name cap">${
              profileList[i].name.first
            }</h3>
            <p class="modal-text">${profileList[i].email}</p>
            <p class="modal-text cap">${profileList[i].location.city}</p>
            <hr>
            <p class="modal-text">${profileList[i].cell}</p>
            <p class="modal-text">${profileList[i].location.street.number} ${
      profileList[i].location.street.name
    }, ${profileList[i].location.city}, ${profileList[i].location.state} ${
      profileList[i].location.postcode
    }</p>
            <p class="modal-text">Birthday: ${birthdayReformatter(
              profileList[i].dob.date
            )}</p>
        </div>
    </div>
</div>`;
  }
  body.insertAdjacentHTML("beforeend", html);
  let modalContainer = document.querySelector(".modal-container");
  //modalContainer.style.display = "none";

  modalContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" || e.target.tagName === "STRONG") {
      modalContainer.style.display = "none";
    }
  });
}

/**
 *
 * @param {string} birthdayString
 * @returns birthday in xx/xx/xxxx format
 */
function birthdayReformatter(birthdayString) {
  let birthday = birthdayString;
  birthday = birthday.slice(0, 10);
  birthday = birthday.split("-");
  birthday = `${birthday[1]}/${birthday[2]}/${birthday[0]}`;
  return birthday;
}

gallery.addEventListener("click", (e) => {
  let clickableCards = document.querySelectorAll(".card");
  if (e.target !== gallery) {
    console.log("this is working");

    for (let i = 0; i < clickableCards.length; i++) {
      if (clickableCards[i]) {
      }
    }
  }
});
