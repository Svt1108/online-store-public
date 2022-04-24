let petsJS = [];

import { petsArray } from "../../src/js/petsdata.js";

for (let elem of petsArray) {
  petsJS.push(elem.name);
}

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
    disableBtn(navlink);
  }
}

function setHover(element) {
  if (element.getAttribute("data-disabled") == "false") {
    element.style.border = `2px solid #fddcc4`;
    element.style.backgroundColor = `#fddcc4`;
  }
}

function removeHover(element) {
  if (element.getAttribute("data-disabled") == "false") {
    element.style.backgroundColor = `transparent`;
    element.style.border = `2px solid #f1cdb3`;
  }
}

function disableBtn(element) {
  if (element.getAttribute("data-disabled") == "true") {
    element.style.border = `2px solid #cdcdcd`;
    element.style.backgroundColor = `transparent`;
    element.style.cursor = `default`;
    element.style.color = `#cdcdcd`;
  } else {
    element.style = ``;
  }
}

/* --------------------pagination-------------------------------- */

// petsJS = [
//   "Freddie",
//   "Jennifer",
//   "Katrine",
//   "Scarlet",
//   "Charly",
//   "Sophia",
//   "Timmy",
//   "Woody",
// ];

const sidebar = document.querySelector(".cards");
const cardsCount = petsJS.length; //общее количество питомцев
const quantity = 6; //сколько раз встречается питомец

let numero; //число карточек на странице
let pages; //количество страниц

let result = [];
let resultFin = [];
let arr = [];
let pageNumber;
//let pets;

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
    // let pets = document.querySelectorAll(".pet");
    // pets.forEach((element) => {
    //   element.remove();
    // });
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
    // let pets = document.querySelectorAll(".pet");
    // pets.forEach((element) => {
    //   element.remove();
    // });
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
    // let pets = document.querySelectorAll(".pet");
    // pets.forEach((element) => {
    //   element.remove();
    // });
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
    if (e.composedPath().includes(Element) && Element == lessBtn) {
      if (pageNumber > 1) {
        pageNumber--;
        display(pageNumber);
      }
    }
    if (e.composedPath().includes(Element) && Element == startBtn) {
      pageNumber = 1;
      display(pageNumber);
    }
  });
});

function displayButtons(pageNumber) {
  moreBtn.setAttribute("data-disabled", "false");
  endBtn.setAttribute("data-disabled", "false");
  lessBtn.setAttribute("data-disabled", "false");
  startBtn.setAttribute("data-disabled", "false");

  if (pageNumber == pages) {
    moreBtn.setAttribute("data-disabled", "true");
    endBtn.setAttribute("data-disabled", "true");
  }
  if (pageNumber == 1) {
    lessBtn.setAttribute("data-disabled", "true");
    startBtn.setAttribute("data-disabled", "true");
  }
  disableBtn(moreBtn);
  disableBtn(endBtn);
  disableBtn(lessBtn);
  disableBtn(startBtn);
}
//pagination();

function display(pageNumber) {
  let pets = document.querySelectorAll(".pet");
  pets.forEach((element) => {
    element.remove();
  });
  for (let i = 0; i < numero; i++) {
    sidebar.insertAdjacentHTML(
      `beforeend`,
      `<div class="pet" data-name="${
        petsJS[resultFin[pageNumber - 1][i]]
      }"><div class="img_pet">
    <img src="../../assets/images/pets-${
      petsJS[resultFin[pageNumber - 1][i]]
    }.png" /></div>
    <div class="name">${petsJS[resultFin[pageNumber - 1][i]]}</div>
    <div class="buttonw buttonw1">Learn more</div></div>`
    );
  }
  firstBtn.innerHTML = "";
  firstBtn.append(`${pageNumber}`);
  displayButtons(pageNumber);
}

function pagination() {
  for (let j = 0; j < quantity; j++) {
    for (let i = 0; i < cardsCount; i++) {
      arr.push(i);
    }
  }

  //  console.log("arr = " + arr);

  let numero_rand = Math.floor(Math.random() * numero);
  // console.log(numero_rand);
  for (let i = 0; i < pages; i++)
    resultFin[i] = arr.slice(
      i * numero + numero_rand,
      (i + 1) * numero + numero_rand
    );

  if (resultFin[pages - 1].length < numero)
    resultFin[pages - 1].push(
      ...arr.slice(0, numero - resultFin[pages - 1].length)
    );

  for (let res of resultFin) shuffle(res);
  //  console.log(resultFin);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = array[i];
    array[i] = array[j];
    array[j] = t;
  }
}

/*--------------------modal window--------------------------------*/

const learnMores = document.querySelectorAll(".pet");
let petName;

document.addEventListener("click", (e) => {
  learnMores.forEach((Element) => {
    if (e.composedPath().includes(Element)) {
      petName = Element.getAttribute("data-name");

      for (let elem of petsArray) {
        if (elem.name == petName) {
          console.log(elem.type);

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

          document.body.append(modal);
          document.body.style.overflow = "hidden";

          const modalWrap = document.querySelector(".modal_wrap");
          const modalWindow = document.querySelector(".modal_window");

          const modalImageWrap = document.querySelector(".modal_image_wrap");

          setTimeout(
            () =>
              // (modalWindow.style.transition = `5s`),
              (modalWindow.style.transform = `scale(1)`),
            100
          );

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
