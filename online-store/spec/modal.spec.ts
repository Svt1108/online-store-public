import ModalWindow from "../src/components/modal";

describe("Method showCart", () => {
  const testModalWindow = new ModalWindow();

  test("should be defined", () => {
    expect(testModalWindow.createModal).toBeDefined;
  });

  it("create modal window correctly", () => {
    const data = {
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
    };
    testModalWindow.createModal(data);
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
