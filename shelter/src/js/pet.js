/* --------------------------navigation------------------------------ */

const navlinks = document.querySelectorAll(".button_circle_nav");
const firstBtn = document.querySelector(".first_btn");
const startBtn = document.querySelector("#startBtn");
const lessBtn = document.querySelector("#lessBtn");
const moreBtn = document.querySelector("#moreBtn");
const endBtn = document.querySelector("#endBtn");

firstBtn.style.backgroundColor = `#f1cdb3`;
firstBtn.style.border = `2px solid #f1cdb3`;
firstBtn.style.cursor = `default`;

for (let navlink of navlinks) {
  //   console.log(navlink.getAttribute("data-disabled"));
  if (navlink.getAttribute("data-disabled") == "false") {
    navlink.addEventListener("mouseover", () => setHover(navlink));
    navlink.addEventListener("mouseleave", () => removeHover(navlink));
  } else if (navlink.getAttribute("data-disabled") == "true") {
    navlink.style.border = `2px solid #cdcdcd`;
    navlink.style.backgroundColor = `transparent`;
    navlink.style.cursor = `default`;
    navlink.style.color = `#cdcdcd`;
  }
}

function setHover(element) {
  for (let navlink1 of navlinks) {
    if (navlink1.getAttribute("data-disabled") == "false") {
      navlink1.style.backgroundColor = `transparent`;
      navlink1.style.border = `2px solid #f1cdb3`;
    }
  }

  element.style.border = `2px solid #fddcc4`;
  element.style.backgroundColor = `#fddcc4`;
}

function removeHover(element) {
  element.style.backgroundColor = `transparent`;
  element.style.border = `2px solid #f1cdb3`;
}

/* --------------------pagination-------------------------------- */

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

const sidebar = document.querySelector(".cards");
const cardsCount = petsJS.length; //общее количество питомцев
const quantity = 6; //сколько раз встречается питомец

let numero; //число карточек на странице
let pages; //количество страниц

let result = [];
let resultFin = [];
let arr = [];
let pageNumber;

/* --------------------проверка разрешения экрана ----------------------*/
const mediaQueryLarge = window.matchMedia("screen and (min-width: 1280px)");

const mediaQuery = window.matchMedia(
  "screen and (min-width: 768px) and (max-width: 1279px)"
);

const mediaQuerySmall = window.matchMedia("screen and (max-width: 767px)");

function handleTabletChange(e) {
  if (e.matches) {
    numero = 6;
    pages = 8;
    arr = [];
    resultFin = [];
    pageNumber = 1;
    let pets = document.querySelectorAll(".pet");
    pets.forEach((element) => {
      element.remove();
    });
    pagination();
    display(pageNumber);
  } /* else slider(3); */
}

function handleTabletChangeSmall(e) {
  if (e.matches) {
    numero = 3;
    pages = 16;
    arr = [];
    resultFin = [];
    pageNumber = 1;
    let pets = document.querySelectorAll(".pet");
    pets.forEach((element) => {
      element.remove();
    });
    pagination();
    display(pageNumber);
  }
}

function handleTabletChangeLarge(e) {
  if (e.matches) {
    numero = 8;
    pages = 6;
    arr = [];
    resultFin = [];
    pageNumber = 1;
    let pets = document.querySelectorAll(".pet");
    pets.forEach((element) => {
      element.remove();
    });
    pagination();
    display(pageNumber);
  }
}
mediaQuery.addListener(handleTabletChange);
mediaQuerySmall.addListener(handleTabletChangeSmall);
mediaQueryLarge.addListener(handleTabletChangeLarge);

handleTabletChange(mediaQuery);
handleTabletChangeSmall(mediaQuerySmall);
handleTabletChangeLarge(mediaQueryLarge);

/*-------------------------------работа кнопок--------------------------------*/

document.addEventListener("click", (e) => {
  navlinks.forEach((Element) => {
    if (e.composedPath().includes(Element) && Element == moreBtn) {
      if (pageNumber < pages) {
        pageNumber++;
        display(pageNumber);
      }
    }
    if (e.composedPath().includes(Element) && Element == endBtn) {
      pageNumber = pages;
      display(pageNumber);
    }
  });
});

//pagination();

function display(pageNumber) {
  let pets = document.querySelectorAll(".pet");
  pets.forEach((element) => {
    element.remove();
  });
  for (let i = 0; i < numero; i++) {
    sidebar.insertAdjacentHTML(
      `beforeend`,
      `<div class="pet"><div class="img_pet">
    <img src="../../assets/images/pets-${
      petsJS[resultFin[pageNumber - 1][i]]
    }.png" /></div>
    <div class="name">${petsJS[resultFin[pageNumber - 1][i]]}</div>
    <div class="buttonw buttonw1">Learn more</div></div>`
    );
  }
}

function pagination() {
  for (let j = 0; j < quantity; j++) {
    for (let i = 0; i < cardsCount; i++) {
      arr.push(i);
    }
  }

  console.log("arr = " + arr);
  getRandomNumber(arr);
  console.log(resultFin);
}

function getRandomNumber(arr) {
  let one = 7777;
  check = [];
  let indexOne = "";

  for (let j = 0; j < pages - 1; j++) {
    result = [];
    for (let i = 0; i < numero; i++) {
      if (numero > 3) {
        while (result.includes(one) || one == 7777) {
          indexOne = Math.floor(Math.random() * arr.length);
          one = arr[indexOne];
        }
      } else {
        while (result.includes(one) || check.includes(one) || one == 7777) {
          indexOne = Math.floor(Math.random() * arr.length);
          one = arr[indexOne];
        }
      }

      result.push(one);
      arr.splice(indexOne, 1);
    }
    check = result;
    resultFin.push(result);
    console.log(arr);
  }
  resultFin.push(arr);
  return resultFin;
}
