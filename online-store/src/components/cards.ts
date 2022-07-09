import { Data } from "../types/types";
import ModalWindow from "./modal";

class CardList {
  drawData: Array<Data>;
  modalWindow: ModalWindow;

  constructor() {
    this.drawData = [];
    this.modalWindow = new ModalWindow();
  }

  public drawCards(data: Array<Data>): void {
    const content = document.querySelector(".content") as HTMLElement;
    this.drawData = data;
    content.innerHTML = "";
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

      const cardContent = document.createElement("div");
      cardContent.classList.add("card-content");
      card.appendChild(cardContent);

      const plateName = document.createElement("p");
      plateName.innerHTML = `${this.drawData[i].name}`;
      plateName.classList.add(
        "grey-text",
        "text-darken-4",
        "plate-card__title"
      );
      cardContent.appendChild(plateName);

      const plateInfo = document.createElement("p");
      plateInfo.innerHTML = `${this.drawData[i].author}, ${this.drawData[i].year}`;
      plateInfo.classList.add("grey-text", "text-darken-4", "plate-card__text");
      cardContent.appendChild(plateInfo);
    }
  }
}

export default CardList;
