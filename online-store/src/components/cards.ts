import { Data } from "../types/types";
import ModalWindow from "./modal";
import MessageWindow from "./message";

class CardList {
  drawData: Array<Data>;
  modalWindow: ModalWindow;
  messageWindow: MessageWindow;

  constructor() {
    this.drawData = [];
    this.modalWindow = new ModalWindow();
    this.messageWindow = new MessageWindow();
  }

  public drawCards(data: Array<Data>): void {
    const content = document.querySelector(".content") as HTMLElement;
    const basketSum = document.getElementById("basket-sum") as HTMLElement;
    this.drawData = data;
    content.innerHTML = "";
    if (this.drawData.length === 0) {
      content.innerHTML = `<p class = "z-depth-1 message teal-text text-darken-3">Sorry, we can't find anything. Try another filter, please!</p>`;
      return;
    }
    for (let i = 0; i < this.drawData.length; i++) {
      const card = document.createElement("div");
      card.classList.add("card", "plate-card", "z-depth-2");
      content.appendChild(card);

      const cardImage = document.createElement("div");
      cardImage.classList.add(
        "card-image",
        "waves-effect",
        "waves-block",
        "waves-light",
        "plate-card__image"
      );
      cardImage.style.backgroundImage = `url(../assets/images/${this.drawData[i].img})`;
      card.appendChild(cardImage);

      cardImage.addEventListener("click", () =>
        this.modalWindow.createModal(this.drawData[i])
      );

      const glass = document.createElement("div");
      glass.innerHTML = "zoom_out_map";
      glass.classList.add("glass", "material-icons");
      cardImage.appendChild(glass);

      const cardContent = document.createElement("div");
      cardContent.classList.add("card-content");
      card.appendChild(cardContent);

      const plateName = document.createElement("p");
      plateName.innerHTML = `${this.drawData[i].name}`;
      plateName.classList.add(
        "grey-text",
        "text-darken-2",
        "plate-card__title"
      );
      cardContent.appendChild(plateName);

      const plateInfo = document.createElement("p");
      plateInfo.innerHTML = `${this.drawData[i].author}, ${this.drawData[i].year}
      <p class = "grey-text text-darken-4 modal-window__title">${this.drawData[i].price} €</p>`;
      plateInfo.classList.add("grey-text", "text-darken-4", "plate-card__text");
      cardContent.appendChild(plateInfo);

      const divider = document.createElement("div");
      divider.classList.add("divider");
      cardContent.appendChild(divider);

      const buyWrap = document.createElement("div");
      buyWrap.classList.add("buy-wrap", "grey-text", "text-darken-4");
      cardContent.appendChild(buyWrap);

      const inCart = document.createElement("div");
      inCart.innerHTML = "In cart:";
      inCart.classList.add("buy-wrap__in-cart");
      buyWrap.appendChild(inCart);

      const minus = document.createElement("div");
      minus.innerHTML = "remove";
      minus.classList.add("buy-wrap__minus", "z-depth-1", "material-icons");
      buyWrap.appendChild(minus);

      const quantityToCart = document.createElement("div");
      quantityToCart.innerHTML =
        localStorage.getItem(`${this.drawData[i].id}`) || "0";
      quantityToCart.classList.add("buy-wrap__quantity-to-cart");
      buyWrap.appendChild(quantityToCart);

      const plus = document.createElement("div");
      plus.innerHTML = "add";
      plus.classList.add("buy-wrap__plus", "z-depth-1", "material-icons");
      buyWrap.appendChild(plus);

      minus.addEventListener("click", () => {
        quantityToCart.innerHTML = (
          Number(quantityToCart.innerHTML) - 1
        ).toString();
        localStorage.setItem(
          `${this.drawData[i].id}`,
          quantityToCart.innerHTML
        );
        localStorage.setItem(
          "sum",
          (Number(localStorage.getItem("sum")) - 1).toString()
        );
        basketSum.innerHTML = localStorage.getItem("sum") || "0";
        plus.classList.remove("disabled");
        if (quantityToCart.innerHTML === `0`) {
          quantityToCart.classList.remove("no-empty_quant");
          inCart.classList.remove("no-empty");
          minus.classList.add("disabled");
        }
      });

      plus.addEventListener("click", () => {
        if (localStorage.getItem("sum") === "20") {
          this.messageWindow.createMessage(
            `Sorry, maximum 20 items in the cart...`
          );
          return;
        }
        quantityToCart.innerHTML = (
          Number(quantityToCart.innerHTML) + 1
        ).toString();
        localStorage.setItem(
          `${this.drawData[i].id}`,
          quantityToCart.innerHTML
        );
        localStorage.setItem(
          "sum",
          (Number(localStorage.getItem("sum")) + 1).toString()
        );
        basketSum.innerHTML = localStorage.getItem("sum") || "0";
        minus.classList.remove("disabled");
        quantityToCart.classList.add("no-empty_quant");
        inCart.classList.add("no-empty");
        if (quantityToCart.innerHTML === `${this.drawData[i].quantity}`)
          plus.classList.add("disabled");
      });

      const maximum = document.createElement("span");
      maximum.innerHTML = `max: ${this.drawData[i].quantity}`;
      maximum.classList.add("buy-wrap__maximum", "grey-text", "text-lighten-1");
      buyWrap.appendChild(maximum);

      if (quantityToCart.innerHTML === "0") minus.classList.add("disabled");
      else {
        quantityToCart.classList.add("no-empty_quant");
        inCart.classList.add("no-empty");
      }
      if (quantityToCart.innerHTML === `${this.drawData[i].quantity}`)
        plus.classList.add("disabled");

      setTimeout(() => (card.style.opacity = `1`), 100);
    }
  }
}

export default CardList;
