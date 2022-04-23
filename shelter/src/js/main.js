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

/* slider */

const petsJS = [
  "Freddie",
  "Jennifer",
  "Katrine",
  "Scarlet",
  "Charly",
  "Sophia",
  "Timmy",
  "Woody",
];

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

  console.log(number);

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
  let pets = document.querySelectorAll(".pet");

  for (let i = 0; i < pets.length; i++) {
    pets[i].style.transition = `transform 2s ease`;
    pets[i].style.transform = `translateX(${
      sidebar.clientWidth + parseInt(window.getComputedStyle(sidebar).gap)
    }px)`;
    if (i >= number)
      setTimeout(
        () => (
          (pets[i].style.transition = ``),
          (pets[i].style.transform = `translateX(0)`),
          LeftBtn.addEventListener("click", displaySlidesLeft),
          RightBtn.addEventListener("click", displaySlidesRight)
        ),
        2000
      );

    if (i < number) setTimeout(() => pets[i].remove(), 2000);
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
      `<div class="pet"><div class="img_pet">
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
