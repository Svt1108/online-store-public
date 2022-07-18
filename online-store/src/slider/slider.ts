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
    this.drawOneSlider(
      price,
      priceMinSaved,
      priceMaxSaved,
      this.minMaxPrice,
      " €"
    );

    const year = document.getElementById("year") as noUiSlider.target;
    if (!year) return;
    this.drawOneSlider(year, yearMinSaved, yearMaxSaved, this.minMaxYear, "");

    const quantity = document.getElementById("quantity") as noUiSlider.target;
    if (!quantity) return;
    this.drawOneSlider(
      quantity,
      quantityMinSaved,
      quantityMaxSaved,
      this.minMaxQuantity,
      ""
    );
  }

  drawOneSlider(
    name: HTMLElement,
    startMin: number,
    startMax: number,
    minMaxName: number[],
    addition: string
  ) {
    noUiSlider.create(name as HTMLElement, {
      start: [startMin, startMax],
      connect: true,
      step: 1,
      orientation: "horizontal",
      range: {
        min: Math.min(...minMaxName) || 0,
        max: Math.max(...minMaxName) || 0,
      },
      tooltips: {
        to: function (numericValue) {
          return numericValue.toFixed() + addition;
        },
      },
    });
  }
}

export default Slider;
