import { Data } from "../types/types";

class ModalWindow {
  public createModal(item: Data): void {
    const modal = document.createElement("div");
    modal.classList.add("modal-wrap");
    document.body.append(modal);
    document.body.style.overflow = "hidden";
    modal.onclick = (event) => {
      if (event.target === modal) {
        modal.remove();
        document.body.style.overflow = "";
      }
    };

    const modalWindow = document.createElement("div");
    modalWindow.classList.add("modal-window");
    modal.appendChild(modalWindow);

    const modalImage = document.createElement("div");
    modalImage.classList.add("modal-window__image");
    modalImage.style.backgroundImage = `url(../assets/images/${item.img})`;
    modalWindow.appendChild(modalImage);

    const modalText = document.createElement("div");
    modalText.classList.add("modal-window__text");
    modalWindow.appendChild(modalText);

    modalText.innerHTML = `
    <p class = "gray-text text-darken-4 modal-window__title">${item.name}</p>
      <ul class = "modal-window__list">
      <li><strong>Author: </strong>${item.author}</li>
      <li><strong>Year: </strong>${item.year}</li>
      <br/>
      <li><strong>Type: </strong>${item.type}</li>
      <li><strong>Color: </strong>${item.color}</li>
      <li><strong>Popularity: </strong>${item.popularity}</li>
      <li><strong>Quantity: </strong>${item.quantity}</li>
      </ul>
      <p class = "grey-text text-darken-4 modal-window__title">${item.price} €</p>`;

    const closeButton = document.createElement("button");
    closeButton.classList.add("modal-window__close");
    modalWindow.appendChild(closeButton);
    closeButton.onclick = () => {
      modal.remove();
      document.body.style.overflow = "";
    };

    setTimeout(() => (modalWindow.style.transform = `scale(0.8)`), 100);
  }
}

export default ModalWindow;
