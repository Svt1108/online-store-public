import FilterList from "../src/components/filters";

describe("Method setFilters", () => {
  const testFilterList = new FilterList();

  test("should be defined", () => {
    expect(testFilterList.setFilters).toBeDefined;
  });

  test("should call setFilters", () => {
    document.body.innerHTML = `
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
  `;

    if (!localStorage.getItem("author_saved"))
      localStorage.setItem("author_saved", "[]");
    if (!localStorage.getItem("color_saved"))
      localStorage.setItem("color_saved", "[]");
    if (!localStorage.getItem("type_saved"))
      localStorage.setItem("type_saved", "[]");
    if (!localStorage.getItem("popularity_saved"))
      localStorage.setItem("popularity_saved", "[]");
    if (!localStorage.getItem("price_max_saved"))
      localStorage.setItem("price_max_saved", "");
    if (!localStorage.getItem("price_min_saved"))
      localStorage.setItem("price_min_saved", "");
    if (!localStorage.getItem("year_max_saved"))
      localStorage.setItem("year_max_saved", "");
    if (!localStorage.getItem("year_min_saved"))
      localStorage.setItem("year_min_saved", "");
    if (!localStorage.getItem("quantity_max_saved"))
      localStorage.setItem("quantity_max_saved", "");
    if (!localStorage.getItem("quantity_min_saved"))
      localStorage.setItem("quantity_min_saved", "");
    if (!localStorage.getItem("search_saved"))
      localStorage.setItem("search_saved", "");
    if (!localStorage.getItem("sort_saved"))
      localStorage.setItem("sort_saved", "default");
    if (!localStorage.getItem("sum")) localStorage.setItem("sum", "0");

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
    testFilterList.setFilters(data);
    expect(testFilterList.drawFilters).toBeCalled;
  });
});
