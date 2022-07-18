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
});
