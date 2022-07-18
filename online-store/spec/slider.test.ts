import * as noUiSlider from "../src/slider/nouislider";
import Slider from "../src/slider/slider";

describe("Method drawSlider", () => {
  const testSlider = new Slider();

  test("should be defined", () => {
    expect(testSlider.drawSlider).toBeDefined;
  });

  test("renders correctly with empty data", () => {
    testSlider.drawSlider([]);
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  test("to call drawOneSlider correctly with empty data", () => {
    testSlider.drawSlider([]);
    const spyDrawOneSlider = jest.spyOn(testSlider, "drawOneSlider");
    expect(spyDrawOneSlider).toBeCalledTimes(0);
  });

  test("to call drawOneSlider correctly", () => {
    document.body.innerHTML = `
    <div id="price" class="filters__slider"></div>
    <div id="year" class="filters__slider"></div>
    <div id="quantity" class="filters__slider"></div>
`;
    let data = [
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
    testSlider.drawSlider(data);
    const spyDrawOneSlider = jest.spyOn(testSlider, "drawOneSlider");
    expect(spyDrawOneSlider).toBeCalledTimes(3);
  });
});

describe("Method drawOneSlider", () => {
  const testSlider = new Slider();

  test("should be defined", () => {
    expect(testSlider.drawOneSlider).toBeDefined;
  });

  test("renders correctly without currency", () => {
    document.body.innerHTML = `
                <div id="name" class="filters__slider"></div>
  `;
    const name = document.getElementById("name") as noUiSlider.target;
    testSlider.drawOneSlider(name, 3, 7, [1, 2, 5, 7, 9, 10], "");
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
