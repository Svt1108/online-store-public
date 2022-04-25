/* navigation */
/*
const navlinks = document.querySelectorAll(".navlink");
const navlinkAbout = document.querySelector(".first");

//first.style.borderBottom = `3px solid #f1cdb3`;

for (let navlink of navlinks) {
  navlink.addEventListener("click", () => setActive(navlink));
  navlink.addEventListener("mouseover", () => setHover(navlink));
  navlink.addEventListener("mouseleave", () => removeHover(navlink));
}

function setActive(element) {
  for (let navlink1 of navlinks) {
    navlink1.style.borderBottom = `3px solid transparent`;
    navlink1.style.color = `#cdcdcd`;
  }
  element.style.borderBottom = `3px solid #f1cdb3`;
  element.style.color = `white`;
}

function setHover(element) {
  for (let navlink1 of navlinks) {
    navlink1.style.borderBottom = `3px solid transparent`;
    navlink1.style.color = `#cdcdcd`;
  }
  //element.style.borderBottom = `3px solid #f1cdb3`;
  element.style.color = `white`;
}

function removeHover(element) {
  element.style.borderBottom = `3px solid transparent`;
  element.style.color = `#cdcdcd`;
} */

let petsJS = [];

import { petsArray } from "../../src/js/petsdata.js";

for (let elem of petsArray) {
  petsJS.push(elem.name);
}

//console.log(petsJS);

/* ----------------------------slider---------------------------------------- */

// const petsJS = [
//   "Freddie",
//   "Jennifer",
//   "Katrine",
//   "Scarlet",
//   "Charly",
//   "Sophia",
//   "Timmy",
//   "Woody",
// ];

const cardsCount = petsJS.length;

let result = [];
let arr = [];

const RightBtn = document.querySelector(".right-button");
const LeftBtn = document.querySelector(".left-button");
const sidebar = document.querySelector(".cardsWrapper");
let number;

const mediaQueryLarge = window.matchMedia("screen and (min-width: 1280px)");

const mediaQuery = window.matchMedia(
  "screen and (min-width: 768px) and (max-width: 1279px)"
);

const mediaQuerySmall = window.matchMedia("screen and (max-width: 767px)");

function handleTabletChange(e) {
  if (e.matches) {
    number = 2;
    let pets = document.querySelectorAll(".cards");
    pets.forEach((element) => {
      element.remove();
    });
    displaySlides();
  } /* else slider(3); */
}

function handleTabletChangeSmall(e) {
  if (e.matches) {
    number = 1;
    let pets = document.querySelectorAll(".cards");
    pets.forEach((element) => {
      element.remove();
    });
    displaySlides();
  }
}

function handleTabletChangeLarge(e) {
  if (e.matches) {
    number = 3;
    let pets = document.querySelectorAll(".cards");
    pets.forEach((element) => {
      element.remove();
    });
    displaySlides();
  }
}
mediaQuery.addListener(handleTabletChange);
mediaQuerySmall.addListener(handleTabletChangeSmall);
mediaQueryLarge.addListener(handleTabletChangeLarge);

handleTabletChange(mediaQuery);
handleTabletChangeSmall(mediaQuerySmall);
handleTabletChangeLarge(mediaQueryLarge);

LeftBtn.addEventListener("click", displaySlidesLeft);
RightBtn.addEventListener("click", displaySlidesRight);

function displaySlidesLeft() {
  LeftBtn.removeEventListener("click", displaySlidesLeft);
  RightBtn.removeEventListener("click", displaySlidesRight);

  sidebar.style.flexDirection = "row";

  displaySlides();

  setTimeout(() => moveLeft(), 100);
}

function displaySlidesRight() {
  LeftBtn.removeEventListener("click", displaySlidesLeft);
  RightBtn.removeEventListener("click", displaySlidesRight);

  sidebar.style.flexDirection = "row-reverse";
  displaySlides();

  setTimeout(() => moveRight(), 100);
}

function moveLeft() {
  let insides = document.querySelectorAll(".cards");

  for (let i = 0; i < insides.length; i++) {
    insides[i].style.transition = `transform 2s ease`;
    insides[i].style.transform = `translateX(-${
      parseInt(window.getComputedStyle(sidebar).width) +
      parseInt(window.getComputedStyle(sidebar).gap)
    }px)`;
    if (i == 1)
      setTimeout(
        () => (
          (insides[i].style.transition = ``),
          (insides[i].style.transform = `translateX(0)`),
          LeftBtn.addEventListener("click", displaySlidesLeft),
          RightBtn.addEventListener("click", displaySlidesRight)
        ),
        2000
      );

    if (i == 0) setTimeout(() => insides[i].remove(), 2000);
  }
}

function moveRight() {
  let insides = document.querySelectorAll(".cards");

  for (let i = 0; i < insides.length; i++) {
    insides[i].style.transition = `transform 2s ease`;
    insides[i].style.transform = `translateX(${
      parseInt(window.getComputedStyle(sidebar).width) +
      parseInt(window.getComputedStyle(sidebar).gap)
    }px)`;
    if (i == 1)
      setTimeout(
        () => (
          (insides[i].style.transition = ``),
          (insides[i].style.transform = `translateX(0)`),
          LeftBtn.addEventListener("click", displaySlidesLeft),
          RightBtn.addEventListener("click", displaySlidesRight)
        ),
        2000
      );

    if (i == 0) setTimeout(() => insides[i].remove(), 2000);
  }
}

function displaySlides() {
  arr = [];
  for (let i = 0; i < cardsCount; i++) {
    if (!result.includes(i)) arr.push(i);
  }

  getRandomNumber(arr);

  sidebar.insertAdjacentHTML(`beforeend`, `<div class="cards temp"></div>`);

  let sidebarInside = document.querySelector(".temp");

  for (let i = 0; i < number; i++) {
    sidebarInside.insertAdjacentHTML(
      `beforeend`,
      `<div class="pet" data-name="${petsJS[result[i]]}"><div class="img_pet">
      <img src="../../assets/images/pets-${petsJS[result[i]]}.png" /></div>
      <div class="name">${petsJS[result[i]]}</div>
      <div class="buttonw buttonw1">Learn more</div></div>`
    );
  }

  sidebarInside.classList.remove("temp");

  /*  pets[result[i]].style.display = `block`;   */
}

function getRandomNumber(arr) {
  for (let i = 0; i < number; i++) {
    let index = Math.floor(Math.random() * arr.length);
    result[i] = arr.splice(index, 1)[0];
  }
  return result;
}

/*--------------------modal window--------------------------------*/

let petName;

document.addEventListener("click", (e) => {
  let learnMores = document.querySelectorAll(".pet");
  // console.log(learnMores);

  learnMores.forEach((Element) => {
    if (e.composedPath().includes(Element)) {
      //     console.log(Element);
      petName = Element.getAttribute("data-name");
      //   console.log(petName);

      for (let elem of petsArray) {
        if (elem.name == petName) {
          const modal = document.createElement("div");
          modal.classList.add("modal_wrap");

          modal.innerHTML = `<div class="modal_window">
          <div class = "modal_image_wrap">
            <img src="${elem.img}" alt="" class="modal_image" />
          </div>
          <div class = "modal_text_wrap">
            <h3>${elem.name}</h3>
            <h4>${elem.type} - ${elem.breed}</h4>
            <h5>${elem.description}</h5> 
            <ul class = "modal_caracter">
            <li><strong>Age: </strong>${elem.age}</li>
            <li><strong>Inoculations: </strong>${elem.inoculations}</li>
            <li><strong>Diseases: </strong>${elem.diseases}</li>
            <li><strong>Parasites: </strong>${elem.parasites}</li>
            </ul>  
          </div>    
          <button class="modal_close" id="button"><img src="../../assets/images/vector.png" /></button> 
          </div>`;

          //         console.log(modal);

          document.body.append(modal);
          document.body.style.overflow = "hidden";

          const modalWrap = document.querySelector(".modal_wrap");
          const modalWindow = document.querySelector(".modal_window");

          const modalImageWrap = document.querySelector(".modal_image_wrap");

          setTimeout(() => (modalWindow.style.transform = `scale(1)`), 100);

          button.onclick = function () {
            modal.remove();
            document.body.style.overflow = "";
          };

          modalWrap.onclick = function (event) {
            if (event.target == modalWrap) {
              modal.remove();
              document.body.style.overflow = "";
            }
          };
          modalWrap.onmouseover = function (event) {
            if (event.target == modalWrap) {
              button.style.backgroundColor = `#fddcc4`;
              button.style.border = `2px solid #fddcc4`;
              modalWrap.style.cursor = `pointer`;
            } else {
              button.style.backgroundColor = ``;
              button.style.border = ``;
              modalWrap.style.cursor = ``;
            }
          };
        }
      }
    }
  });
});
