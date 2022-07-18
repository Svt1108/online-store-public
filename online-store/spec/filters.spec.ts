import FilterList from "../src/components/filters";
import Slider from "../src/slider/slider";
import Storage from "../src/components/storage";

describe("Method setFilters", () => {
  const testFilterList = new FilterList();

  test("should be defined", () => {
    expect(testFilterList.setFilters).toBeDefined;
  });
});
