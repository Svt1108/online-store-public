import { Data } from "../types/types";

class CardList {
  drawData: Array<Data>;

  constructor() {
    this.drawData = [];
  }

  public drawCards(data: Array<Data>): void {
    const content = document.querySelector(".content") as HTMLElement;
    this.drawData = data;
    content.innerHTML = "";
    //    console.log(this.drawData.length);
    for (let i = 0; i < this.drawData.length; i++) {
      const card = document.createElement("div");
      card.classList.add("card", "plate-card");
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

      const cardContent = document.createElement("div");
      cardContent.classList.add("card-content");
      card.appendChild(cardContent);

      const plateName = document.createElement("p");
      plateName.innerHTML = `${this.drawData[i].name}`;
      plateName.classList.add(
        "card-title",
        "grey-text",
        "text-darken-4",
        "plate-card__title"
      );
      cardContent.appendChild(plateName);

      // content.insertAdjacentHTML(
      //   `beforeend`,
      //   `  <div class="card plate-card">
      //        <div class="card-image waves-effect waves-block waves-light plate-card__image">
      //          <img src="../assets/images/plate-${i}.jpg">
      //        </div>
      //        <div class="card-content">
      //          <span class="card-title grey-text text-darken-4">Card Title</span>
      //          <p><a href="#">This is a link</a></p>
      //        </div>
      //      </div>`
      // );
    }
  }
}

export default CardList;
