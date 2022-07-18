import * as noUiSlider from "./nouislider";
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
    data.forEach((element) => {
      this.minMaxPrice.push(Number(element.price));
      this.minMaxYear.push(Number(element.year));
      this.minMaxQuantity.push(Number(element.quantity));
    });

    const priceMinSaved = Number(localStorage.getItem("price_min_saved"));
    let priceMaxSaved = Number(localStorage.getItem("price_max_saved"));
    if (priceMaxSaved === 0)
      priceMaxSaved = Math.max(...this.minMaxPrice) as number;
    const yearMinSaved = Number(localStorage.getItem("year_min_saved"));
    let yearMaxSaved = Number(localStorage.getItem("year_max_saved"));
    if (yearMaxSaved === 0)
      yearMaxSaved = Math.max(...this.minMaxYear) as number;
    const quantityMinSaved = Number(localStorage.getItem("quantity_min_saved"));
    let quantityMaxSaved = Number(localStorage.getItem("quantity_max_saved"));
    if (quantityMaxSaved === 0)
      quantityMaxSaved = Math.max(...this.minMaxQuantity) as number;

    const price = document.getElementById("price") as noUiSlider.target;
    if (!price) return;
    noUiSlider.create(price as HTMLElement, {
      start: [priceMinSaved, priceMaxSaved],
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
    if (!year) return;
    noUiSlider.create(year as HTMLElement, {
      start: [yearMinSaved, yearMaxSaved],
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
    if (!quantity) return;
    noUiSlider.create(quantity as HTMLElement, {
      start: [quantityMinSaved, quantityMaxSaved],
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
