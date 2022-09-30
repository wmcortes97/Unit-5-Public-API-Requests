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
       <h3 id="name" class="card-name cap">${profileList[i].name.first} ${profileList[i].name.last}</h3>
       <p class="card-text">${profileList[i].email}</p>
       <p class="card-text cap">${profileList[i].location.city}, ${profileList[i].location.state}</p>
   </div>
 </div>
   
   `;
    gallery.insertAdjacentHTML("beforeend", html);
  }
  gallery.addEventListener("click", (e) => {

    //let clickableCards = document.querySelectorAll(".card");
    if (e.target !== gallery) {
     

      let info = e.target.closest(".card");
      info = info.children[1].children[0].textContent;
      for (let i = 0; i < profileList.length; i++) {
        if (info === `${profileList[i].name.first} ${profileList[i].name.last}` ) {
          modalPopup(profileList[i]);
        }
      }
    }
  });
  
}

/**
 *
 * @param {array} profile
 */
function modalPopup(profile) {
    html = `<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="${
              profile.picture.large
            }" alt="profile picture">
            <h3 id="name" class="modal-name cap">${
              profile.name.first
            } ${profile.name.last}</h3>
            <p class="modal-text">${profile.email}</p>
            <p class="modal-text cap">${profile.location.city}</p>
            <hr>
            <p class="modal-text">${profile.cell}</p>
            <p class="modal-text">${profile.location.street.number} ${
      profile.location.street.name
    }, ${profile.location.city}, ${profile.location.state} ${
      profile.location.postcode
    }</p>
            <p class="modal-text">Birthday: ${birthdayReformatter(
              profile.dob.date
            )}</p>
        </div>
    </div>
</div>`;
  
  body.insertAdjacentHTML("beforeend", html);
  let modalContainer = document.querySelector(".modal-container");
 

  let closeButton = document.querySelector('.modal-close-btn');
  closeButton.addEventListener("click", (e)=> {
   modalContainer.remove();
})

 
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
