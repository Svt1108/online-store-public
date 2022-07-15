import { Data } from "../types/types";

class ModalWindow {
  public createModal(item: Data): void {
    const modal = document.createElement("div");
    modal.classList.add("modal-wrap");
    document.body.append(modal);
    document.body.style.overflow = "hidden";
    modal.onclick = () => {
        modal.remove();
        document.body.style.overflow = "";
    };

    const modalWindow = document.createElement("div");
    modalWindow.classList.add("modal-window");
    modal.appendChild(modalWindow);

    const modalImage = document.createElement("div");
    modalImage.classList.add("modal-window__image");
    modalImage.style.backgroundImage = `url(../assets/images/${item.img})`;
    modalWindow.appendChild(modalImage);

    setTimeout(() => (modalWindow.style.transform = `scale(0.8)`), 100);
  }
}

export default ModalWindow;
