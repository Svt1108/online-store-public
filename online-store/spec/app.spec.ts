import App from "../src/components/app";

describe("Method resetFiltersInStorage", () => {
  const testApp = new App();

  test("should be defined", () => {
    expect(testApp.resetFiltersInStorage).toBeDefined;
  });

  test("should clear locale storage", () => {
    testApp.resetFiltersInStorage();
    expect(localStorage.getItem("author_saved")).toEqual("[]");
    expect(localStorage.getItem("color_saved")).toEqual("[]");
    expect(localStorage.getItem("type_saved")).toEqual("[]");
    expect(localStorage.getItem("popularity_saved")).toEqual("[]");
    expect(localStorage.getItem("price_max_saved")).toEqual("");
    expect(localStorage.getItem("price_min_saved")).toEqual("");
    expect(localStorage.getItem("year_max_saved")).toEqual("");
    expect(localStorage.getItem("year_min_saved")).toEqual("");
    expect(localStorage.getItem("quantity_max_saved")).toEqual("");
    expect(localStorage.getItem("quantity_min_saved")).toEqual("");
    expect(localStorage.getItem("search_saved")).toEqual("");
  });
});
