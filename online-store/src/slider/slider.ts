import * as noUiSlider from "nouislider";
import { Data } from "../types/types";

class Slider {
  minMaxPrice: Array<number>;
  minMaxYear: Array<number>;
  minMaxQuantity: Array<number>;

  constructor() {
    this.minMaxPrice = [];
    this.minMaxYear = [];
    this.minMaxQuantity = [];
  }
  public drawSlider(data: Data[]): void {
    const priceSaved: Array<string> = JSON.parse(
      localStorage.getItem("price_saved") as string
    );
    const yearSaved: Array<string> = JSON.parse(
      localStorage.getItem("year_saved") as string
    );
    const quantitySaved: Array<string> = JSON.parse(
      localStorage.getItem("quantity_saved") as string
    );

    data.forEach((element) => {
      this.minMaxPrice.push(Number(element.price));
      this.minMaxYear.push(Number(element.year));
      this.minMaxQuantity.push(Number(element.quantity));
    });

    const price = document.getElementById("price") as noUiSlider.target;
    noUiSlider.create(price as HTMLElement, {
      start: [0, 70],
      connect: true,
      step: 1,
      orientation: "horizontal",
      range: {
        min: Math.min(...this.minMaxPrice) || 0,
        max: Math.max(...this.minMaxPrice) || 0,
      },
      tooltips: {
        to: function (numericValue) {
          return numericValue.toFixed() + " €";
        },
      },
    });

    const year = document.getElementById("year") as noUiSlider.target;
    noUiSlider.create(year as HTMLElement, {
      start: [0, 2050],
      connect: true,
      step: 1,
      orientation: "horizontal",
      range: {
        min: Math.min(...this.minMaxYear) || 0,
        max: Math.max(...this.minMaxYear) || 0,
      },
      tooltips: {
        to: function (numericValue) {
          return numericValue.toFixed();
        },
      },
    });

    const quantity = document.getElementById("quantity") as noUiSlider.target;
    noUiSlider.create(quantity as HTMLElement, {
      start: [0, 70],
      connect: true,
      step: 1,
      orientation: "horizontal",
      range: {
        min: Math.min(...this.minMaxQuantity) || 0,
        max: Math.max(...this.minMaxQuantity) || 0,
      },
      tooltips: {
        to: function (numericValue) {
          return numericValue.toFixed();
        },
      },
    });
  }
}

export default Slider;
