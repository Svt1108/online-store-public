import CardList from "../src/components/cards";

describe("Method drawCards", () => {
  const testCardList = new CardList();
  beforeEach(
    () =>
      (document.body.innerHTML = `
  <div class="row main">
      <div class="col s12 m4 l2">
          <div class="filters">
              <div class="z-depth-1 filters__content" id="author"></div>
              <div class="z-depth-1 filters__content filters__content_color" id="color"></div>
              <div class="z-depth-1 filters__content_type" id="type"></div>
              <div class="z-depth-1 filters__content_popularity" id="popularity"></div>
              <div id="price" class="filters__slider"></div>
              <div id="year" class="filters__slider"></div>
              <div id="quantity" class="filters__slider"></div>
          </div>
      </div>
  </div>
  <div class="content"></div>
`)
  );

  test("should be defined", () => {
    expect(testCardList.drawCards).toBeDefined;
  });

  test("should render no result message", () => {
    testCardList.drawCards([]);
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  test("should render cards", () => {
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
    testCardList.drawCards(data);
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
