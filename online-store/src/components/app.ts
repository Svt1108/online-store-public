import { Data, SortEnum } from "../types/types";
import { platesArray } from "../data/platedata";
import * as noUiSlider from "../slider/nouislider";
import CardList from "../components/cards";
import FilterList from "../components/filters";
import Storage from "../components/storage";
import ShoppingCart from "../components/cart";
import Slider from "../slider/slider";
import { evaluation } from "../components/evaluation";

class App {
  cardList: CardList;
  filterList: FilterList;
  storage: Storage;
  slider: Slider;
  shoppingCart: ShoppingCart;
  data: Array<Data>;
  emptyArray: Array<string>;

  constructor() {
    this.cardList = new CardList();
    this.filterList = new FilterList();
    this.storage = new Storage();
    this.slider = new Slider();
    this.shoppingCart = new ShoppingCart();
    this.data = platesArray;
    this.emptyArray = [];
  }

  public start(): void {
    if (!localStorage.getItem("author_saved"))
      localStorage.setItem("author_saved", JSON.stringify(this.emptyArray));
    if (!localStorage.getItem("color_saved"))
      localStorage.setItem("color_saved", JSON.stringify(this.emptyArray));
    if (!localStorage.getItem("type_saved"))
      localStorage.setItem("type_saved", JSON.stringify(this.emptyArray));
    if (!localStorage.getItem("popularity_saved"))
      localStorage.setItem("popularity_saved", JSON.stringify(this.emptyArray));
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

    this.slider.drawSlider(this.data);

    const basketSum = document.getElementById("basket-sum") as HTMLElement;
    basketSum.innerHTML = localStorage.getItem("sum") || "0";
    if (basketSum.innerHTML !== "0") basketSum.classList.add("no-empty_basket");

    const author = document.getElementById("author") as HTMLElement;
    author.addEventListener("click", (event: Event) => {
      if (event.target !== author) {
        this.storage.changeFilterState(event, "author");
        this.storage.applyStorageFilter(this.data);
      }
    });

    const color = document.getElementById("color") as HTMLElement;
    color.addEventListener("click", (event: Event) => {
      if (event.target !== color) {
        this.storage.changeFilterState(event, "color");
        this.storage.applyStorageFilter(this.data);
      }
    });

    const type = document.getElementById("type") as HTMLElement;
    type.addEventListener("click", (event: Event) => {
      if (event.target !== type) {
        this.storage.changeFilterState(event, "type");
        this.storage.applyStorageFilter(this.data);
      }
    });

    const popularity = document.getElementById("popularity") as HTMLElement;
    popularity.addEventListener("click", (event: Event) => {
      if (event.target !== popularity) {
        this.storage.changeFilterState(event, "popularity");
        this.storage.applyStorageFilter(this.data);
      }
    });

    const price = document.getElementById("price") as noUiSlider.target;
    (<noUiSlider.API>price.noUiSlider).on("change", () => {
      const sliderValues = (<noUiSlider.API>(
        price.noUiSlider
      )).get() as Array<string>;
      localStorage.setItem("price_min_saved", sliderValues[0]);
      localStorage.setItem("price_max_saved", sliderValues[1]);
      this.storage.applyStorageFilter(this.data);
    });

    const year = document.getElementById("year") as noUiSlider.target;
    (<noUiSlider.API>year.noUiSlider).on("change", () => {
      const sliderValues = (<noUiSlider.API>(
        year.noUiSlider
      )).get() as Array<string>;
      localStorage.setItem("year_min_saved", sliderValues[0]);
      localStorage.setItem("year_max_saved", sliderValues[1]);
      this.storage.applyStorageFilter(this.data);
    });

    const quantity = document.getElementById("quantity") as noUiSlider.target;
    (<noUiSlider.API>quantity.noUiSlider).on("change", () => {
      const sliderValues = (<noUiSlider.API>(
        quantity.noUiSlider
      )).get() as Array<string>;
      localStorage.setItem("quantity_min_saved", sliderValues[0]);
      localStorage.setItem("quantity_max_saved", sliderValues[1]);
      this.storage.applyStorageFilter(this.data);
    });

    const search = document.getElementById("search") as HTMLInputElement;
    search.value = localStorage.getItem("search_saved") as string;
    search.addEventListener("input", () => {
      localStorage.setItem("search_saved", search.value.toLowerCase());
      this.storage.applyStorageFilter(this.data);
    });

    const close = document.getElementById("close") as HTMLInputElement;
    close.addEventListener("click", () => {
      search.value = "";
      localStorage.setItem("search_saved", "");
      this.storage.applyStorageFilter(this.data);
    });

    const sort = document.getElementById("sort") as HTMLInputElement;
    sort.value = localStorage.getItem("sort_saved") as SortEnum;
    sort.addEventListener("change", () => {
      localStorage.setItem("sort_saved", sort.value);
      this.storage.applyStorageFilter(this.data);
    });

    const clear = document.getElementById("clear") as HTMLElement;
    clear.addEventListener("click", () => {
      localStorage.clear();
      this.clearFilters();
      const sort = document.getElementById("sort") as HTMLInputElement;
      sort.value = "default";
      basketSum.innerHTML = "0";
      basketSum.classList.remove("no-empty_basket");
    });

    const reset = document.getElementById("reset") as HTMLElement;
    reset.addEventListener("click", () => {
      this.clearFilters();
    });

    const cart = document.getElementById("shopping-cart") as HTMLElement;
    cart.addEventListener("click", () => {
      this.shoppingCart.showCart(this.data);
    });

    this.storage.applyStorageFilter(this.data);
    this.filterList.setFilters(this.data);

    evaluation();
  }

  clearFilters(): void {
    this.resetFiltersInStorage();
    this.storage.applyStorageFilter(this.data);
    this.filterList.setFilters(this.data);
    const price = document.getElementById("price") as noUiSlider.target;
    (<noUiSlider.API>price.noUiSlider).set([0, 3000]);
    const year = document.getElementById("year") as noUiSlider.target;
    (<noUiSlider.API>year.noUiSlider).set([0, 3000]);
    const quantity = document.getElementById("quantity") as noUiSlider.target;
    (<noUiSlider.API>quantity.noUiSlider).set([0, 3000]);
    const search = document.getElementById("search") as HTMLInputElement;
    search.value = "";
  }

  resetFiltersInStorage(): void {
    localStorage.setItem("author_saved", JSON.stringify(this.emptyArray));
    localStorage.setItem("color_saved", JSON.stringify(this.emptyArray));
    localStorage.setItem("type_saved", JSON.stringify(this.emptyArray));
    localStorage.setItem("popularity_saved", JSON.stringify(this.emptyArray));
    localStorage.setItem("price_max_saved", "");
    localStorage.setItem("price_min_saved", "");
    localStorage.setItem("year_max_saved", "");
    localStorage.setItem("year_min_saved", "");
    localStorage.setItem("quantity_max_saved", "");
    localStorage.setItem("quantity_min_saved", "");
    localStorage.setItem("search_saved", "");
  }
}

export default App;
