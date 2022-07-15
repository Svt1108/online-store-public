import { Data } from "../types/types";
class ShoppingCart {
  data: Array<Data>;
  minMaxId: Array<number>;

  constructor() {
    this.data = [];
    this.minMaxId = [];
  }
  public showCart(data: Data[]): void {
    this.data = data;
    this.data.forEach((element) => {
      this.minMaxId.push(Number(element.id));
    });

    const cart = document.createElement("div");
    cart.classList.add("modal-wrap");
    document.body.append(cart);
    document.body.style.overflow = "hidden";
    cart.onclick = (event: Event) => {
      if (event.target === cart) {
        cart.remove();
        document.body.style.overflow = "";
      }
    };
    const cartWindow = document.createElement("div");
    cartWindow.classList.add("cart-window");
    cart.appendChild(cartWindow);
    setTimeout(() => {
      cartWindow.style.transform = `translateX(-40rem)`;
    }, 500);
    const titleCart = document.createElement("div");
    titleCart.innerHTML = "You chose these plates: ";
    titleCart.classList.add("title-cart");
    cartWindow.appendChild(titleCart);

    const itemsCart = document.createElement("div");
    let totalPrice = 0;
    itemsCart.classList.add("items-cart");
    cartWindow.appendChild(itemsCart);
    for (let i = 0; i < Math.max(...this.minMaxId); i++) {
      const quantity = Number(localStorage.getItem(this.data[i].id));
      if (quantity > 0) {
        const item = document.createElement("div");
        totalPrice = totalPrice + Number(quantity) * Number(this.data[i].price);
        item.innerHTML = `${this.data[i].name}, ${quantity} * ${this.data[i].price}€`;
        item.classList.add("item");
        itemsCart.appendChild(item);
      }
    }

    const divider = document.createElement("div");
    divider.classList.add("divider");
    cartWindow.appendChild(divider);

    const total = document.createElement("div");
    total.innerHTML = `Total: ${localStorage.getItem(
      "sum"
    )} pieces, ${totalPrice}€`;
    total.classList.add("total-cart");
    cartWindow.appendChild(total);

    const btnClose = document.createElement("button");
    btnClose.innerHTML = "Turn to choice";
    btnClose.classList.add(
      "btn",
      "waves-effect",
      "waves-light",
      "brown",
      "lighten-2"
    );
    cartWindow.appendChild(btnClose);

    const btnBuy = document.createElement("button");
    btnBuy.innerHTML = "Buy all";
    btnBuy.classList.add(
      "btn",
      "waves-effect",
      "waves-light",
      "teal",
      "darken-1"
    );
    cartWindow.appendChild(btnBuy);
  }
}

export default ShoppingCart;
