import ShoppingCart from "../src/components/cart";

describe("Method showCart", () => {
  const testShoppingCart = new ShoppingCart();

  test("should be defined", () => {
    expect(testShoppingCart.showCart).toBeDefined;
  });

  it("renders correctly with empty cart", () => {
    const data = [
      {
        id: "1",
        name: "Lovely Mexico",
        img: "plate-1.jpg",
        type: "stoneware",
        author: "Grazielli David",
        year: "2022",
        color: "chocolate",
        secondColor: "green",
        quantity: "3",
        popularity: "yes",
        price: "10",
      },
      {
        id: "2",
        name: "Coffee time",
        img: "plate-2.jpg",
        type: "stoneware",
        author: "Milena Kibede",
        year: "2021",
        color: "pink",
        secondColor: "red",
        quantity: "5",
        popularity: "no",
        price: "37",
      },
    ];
    testShoppingCart.showCart(data);
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
