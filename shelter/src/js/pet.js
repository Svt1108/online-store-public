/* navigation */

const navlinks = document.querySelectorAll(".button_circle_nav");
const firstBtn = document.querySelector(".first_btn");

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
