import * as noUiSlider from "nouislider";

class Slider {
  public drawSlider(): void {
    const slider = document.getElementById("price");
    noUiSlider.create(slider as HTMLElement, {
      start: [20, 80],
      connect: true,
      step: 1,
      orientation: "horizontal", // 'horizontal' or 'vertical'
      range: {
        min: 0,
        max: 100,
      },
    });
  }
}

export default Slider;
