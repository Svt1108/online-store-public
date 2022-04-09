const navlinks = document.querySelectorAll(".navlink");
const navlinkAbout = document.querySelector(".first");

//first.style.borderBottom = `3px solid #f1cdb3`;

for (let navlink of navlinks) {
  navlink.addEventListener("mouseover", () => setHover(navlink));
  navlink.addEventListener("mouseleave", () => removeHover(navlink));
}

function setHover(element) {
  for (let navlink1 of navlinks) {
    navlink1.style.borderBottom = `3px solid transparent`;
    navlink1.style.color = `#cdcdcd`;
  }
  element.style.borderBottom = `3px solid #f1cdb3`;
  element.style.color = `white`;
}

function removeHover(element) {
  element.style.borderBottom = `3px solid transparent`;
  element.style.color = `#cdcdcd`;
}
