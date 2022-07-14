class MessageWindow {
  public createMessage(text: string): void {
    const message = document.createElement("div");
    message.classList.add("modal-wrap");
    document.body.append(message);
    document.body.style.overflow = "hidden";
    message.onclick = () => {
      message.remove();
      document.body.style.overflow = "";
    };

    const messageWindow = document.createElement("div");
    messageWindow.classList.add("z-depth-3", "message-window");
    messageWindow.innerHTML = `<p class = "message-window__text">${text}</p>`;
    message.appendChild(messageWindow);
    setTimeout(() => {
      //      messageWindow.style.transform = `translateX(-40rem)`;
      messageWindow.style.transform = `scale(1)`;
    }, 500);
    setTimeout(() => {
      message.remove();
      document.body.style.overflow = "";
    }, 7000);
  }
}

export default MessageWindow;
