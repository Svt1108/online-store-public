import { Data } from "../types/types";
import { platesArray } from "../data/platedata";
import CardList from "../components/cards";
import FilterList from "../components/filters";
import Storage from "../components/storage";
import Slider from "../slider/slider";

class App {
  cardList: CardList;
  filterList: FilterList;
  storage: Storage;
  slider: Slider;
  data: Array<Data>;
  authorSaved: Array<string>;
  colorSaved: Array<string>;
  popularitySaved: Array<string>;
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
    this.arrayOfFilters = ["author", "color", "popularity"];
  }

  public start(): void {
    //this.slider.drawSlider();

    if (!localStorage.getItem("author_saved"))
      localStorage.setItem("author_saved", JSON.stringify(this.authorSaved));
    if (!localStorage.getItem("color_saved"))
      localStorage.setItem("color_saved", JSON.stringify(this.colorSaved));
    if (!localStorage.getItem("popularity_saved"))
      localStorage.setItem(
        "popularity_saved",
        JSON.stringify(this.popularitySaved)
      );

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
        this.cardList.drawCards(this.data);
        this.filterList.setFilters(this.data);
      }
    );

    //    this.cardList.drawCards(this.data);
    this.storage.applyStorageFilter(this.data);
    this.filterList.setFilters(this.data);
  }
}

export default App;
