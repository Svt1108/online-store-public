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
    cartWindow.classList.add("cart");
    cart.appendChild(cartWindow);
    setTimeout(() => {
      cartWindow.style.transform = `translateX(-40rem)`;
    }, 500);
    const titleCart = document.createElement("div");
    titleCart.innerHTML = "You chose these plates: ";
    titleCart.classList.add("cart__title", "brown-text", "text-lighten-2");
    cartWindow.appendChild(titleCart);

    const itemsCart = document.createElement("div");
    let totalPrice = 0;
    itemsCart.classList.add("cart__items");
    cartWindow.appendChild(itemsCart);
    for (let i = 0; i < Math.max(...this.minMaxId); i++) {
      const quantity = Number(localStorage.getItem(this.data[i].id));
      if (quantity > 0) {
        const item = document.createElement("div");
        totalPrice = totalPrice + Number(quantity) * Number(this.data[i].price);
        item.innerHTML = `<div>${this.data[i].name}</div> <div>${quantity} * ${this.data[i].price}€</div>`;
        item.classList.add("cart__item");
        itemsCart.appendChild(item);
        const divider = document.createElement("div");
        divider.classList.add("divider");
        itemsCart.appendChild(divider);
      }
    }

    const total = document.createElement("div");
    total.innerHTML = `<div>Total:  ${localStorage.getItem(
      "sum"
    )} pieces</div><div>${totalPrice}€</div>`;
    total.classList.add("cart__total");
    cartWindow.appendChild(total);

    const btnWrap = document.createElement("div");
    btnWrap.classList.add("btn-wrap");
    cartWindow.appendChild(btnWrap);

    const btnClose = document.createElement("button");
    btnClose.innerHTML = "Turn to choice";
    btnClose.classList.add(
      "btn",
      "waves-effect",
      "waves-light",
      "brown",
      "lighten-2"
    );
    btnWrap.appendChild(btnClose);

    btnClose.onclick = () => {
        cart.remove();
        document.body.style.overflow = "";
    };

    const btnBuy = document.createElement("button");
    btnBuy.innerHTML = "Buy all";
    btnBuy.classList.add(
      "btn",
      "waves-effect",
      "waves-light",
      "teal",
      "darken-1"
    );
    btnWrap.appendChild(btnBuy);
  }
}

export default ShoppingCart;
