import { Data } from "../types/types";
import { platesArray } from "../data/platedata";
import * as noUiSlider from "../slider/nouislider";
import CardList from "../components/cards";
import FilterList from "../components/filters";
import Storage from "../components/storage";
import Slider from "../slider/slider";

class App {
  cardList: CardList;
  filterList: FilterList;
  storage: Storage;
  slider: Slider;
  //  slider2: Slider;
  data: Array<Data>;
  authorSaved: Array<string>;
  colorSaved: Array<string>;
  popularitySaved: Array<string>;
  priceSaved: Array<string>;
  yearSaved: Array<string>;
  quantitySaved: Array<string>;
  arrayOfFilters: Array<string>;

  constructor() {
    this.cardList = new CardList();
    this.filterList = new FilterList();
    this.storage = new Storage();
    this.slider = new Slider();
    this.data = platesArray;
    this.authorSaved = [];
    this.colorSaved = [];
    this.popularitySaved = [];
    this.priceSaved = [];
    this.yearSaved = [];
    this.quantitySaved = [];
    this.arrayOfFilters = ["author", "color", "popularity"];
  }

  public start(): void {
    this.slider.drawSlider(this.data);

    if (!localStorage.getItem("author_saved"))
      localStorage.setItem("author_saved", JSON.stringify(this.authorSaved));
    if (!localStorage.getItem("color_saved"))
      localStorage.setItem("color_saved", JSON.stringify(this.colorSaved));
    if (!localStorage.getItem("popularity_saved"))
      localStorage.setItem(
        "popularity_saved",
        JSON.stringify(this.popularitySaved)
      );
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

    const author = document.getElementById("author") as HTMLElement;
    author.addEventListener("click", (event: Event) => {
      if (event.target !== author) {
        this.storage.checkStorage(event, "author");
        this.storage.applyStorageFilter(this.data);
      }
    });

    const color = document.getElementById("color") as HTMLElement;
    color.addEventListener("click", (event: Event) => {
      if (event.target !== color) {
        this.storage.checkStorage(event, "color");
        this.storage.applyStorageFilter(this.data);
      }
    });

    const popularity = document.getElementById("popularity") as HTMLElement;
    popularity.addEventListener("click", (event: Event) => {
      if (event.target !== popularity) {
        this.storage.checkStorage(event, "popularity");
        this.storage.applyStorageFilter(this.data);
      }
    });

    const price = document.getElementById("price") as noUiSlider.target;
    price.noUiSlider!.on("change", () => {
      const sliderValues = price.noUiSlider!.get() as Array<string>;
      localStorage.setItem("price_min_saved", sliderValues[0]);
      localStorage.setItem("price_max_saved", sliderValues[1]);
      this.storage.applyStorageFilter(this.data);
    });

    const year = document.getElementById("year") as noUiSlider.target;
    year.noUiSlider!.on("change", () => {
      const sliderValues = year.noUiSlider!.get() as Array<string>;
      localStorage.setItem("year_min_saved", sliderValues[0]);
      localStorage.setItem("year_max_saved", sliderValues[1]);
      this.storage.applyStorageFilter(this.data);
    });

    const quantity = document.getElementById("quantity") as noUiSlider.target;
    quantity.noUiSlider!.on("change", () => {
      const sliderValues = quantity.noUiSlider!.get() as Array<string>;
      localStorage.setItem("quantity_min_saved", sliderValues[0]);
      localStorage.setItem("quantity_max_saved", sliderValues[1]);
      this.storage.applyStorageFilter(this.data);
    });

    (<HTMLElement>document.querySelector(".clear-button")).addEventListener(
      "click",
      () => {
        this.authorSaved = [];
        localStorage.setItem("author_saved", JSON.stringify(this.authorSaved));
        this.colorSaved = [];
        localStorage.setItem("color_saved", JSON.stringify(this.colorSaved));
        this.popularitySaved = [];
        localStorage.setItem(
          "popularity_saved",
          JSON.stringify(this.popularitySaved)
        );
        localStorage.setItem("price_max_saved", "");
        localStorage.setItem("price_min_saved", "");
        localStorage.setItem("year_max_saved", "");
        localStorage.setItem("year_min_saved", "");
        localStorage.setItem("quantity_max_saved", "");
        localStorage.setItem("quantity_min_saved", "");
        this.cardList.drawCards(this.data);
        this.filterList.setFilters(this.data);
        const price = document.getElementById("price") as noUiSlider.target;
        price.noUiSlider!.reset();
        const year = document.getElementById("year") as noUiSlider.target;
        //       year.noUiSlider!.reset();
        year.noUiSlider?.set([0, 3000]);
        const quantity = document.getElementById(
          "quantity"
        ) as noUiSlider.target;
        quantity.noUiSlider!.reset();
      }
    );

    //    this.cardList.drawCards(this.data);
    this.storage.applyStorageFilter(this.data);
    this.filterList.setFilters(this.data);
  }
}

export default App;
