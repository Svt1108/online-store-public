import { Data, SortEnum } from "../types/types";
import CardList from "../components/cards";

class Storage {
  cardList: CardList;

  constructor() {
    this.cardList = new CardList();
  }

  public checkStorage(event: Event, filterName: string): void {
    const targetContent = (<HTMLElement>event.target).textContent as string;
    const contentSaved: Array<string> = JSON.parse(
      localStorage.getItem(`${filterName}_saved`) as string
    );

    if (contentSaved.indexOf(targetContent) !== -1) {
      contentSaved.splice(contentSaved.indexOf(targetContent), 1);
      (<HTMLElement>event.target).classList.remove("selected");
    } else {
      contentSaved.push(targetContent);
      (<HTMLElement>event.target).classList.add("selected");
    }

    localStorage.removeItem(`${filterName}_saved`);
    localStorage.setItem(`${filterName}_saved`, JSON.stringify(contentSaved));
  }

  public applyStorageFilter(data: Array<Data>): void {
    const authorSaved: Array<string> = JSON.parse(
      localStorage.getItem("author_saved") as string
    );
    const colorSaved: Array<string> = JSON.parse(
      localStorage.getItem("color_saved") as string
    );
    const popularitySaved: Array<string> = JSON.parse(
      localStorage.getItem("popularity_saved") as string
    );
    const priceMinSaved = Number(localStorage.getItem("price_min_saved"));
    const priceMaxSaved = Number(localStorage.getItem("price_max_saved"));
    const yearMinSaved = Number(localStorage.getItem("year_min_saved"));
    const yearMaxSaved = Number(localStorage.getItem("year_max_saved"));
    const quantityMinSaved = Number(localStorage.getItem("quantity_min_saved"));
    const quantityMaxSaved = Number(localStorage.getItem("quantity_max_saved"));
    const searchSaved = localStorage.getItem("search_saved") as string;

    const valuesFilter: Data[] = [];
    data.forEach((element) => {
      if (
        (authorSaved.includes(element.author) || authorSaved.length === 0) &&
        (colorSaved.includes(element.color) || colorSaved.length === 0) &&
        (popularitySaved.includes(element.popularity) ||
          popularitySaved.length === 0) &&
        (Number(element.price) >= priceMinSaved || priceMinSaved === 0) &&
        (Number(element.price) <= priceMaxSaved || priceMaxSaved === 0) &&
        (Number(element.year) >= yearMinSaved || yearMinSaved === 0) &&
        (Number(element.year) <= yearMaxSaved || yearMaxSaved === 0) &&
        (Number(element.quantity) >= quantityMinSaved ||
          quantityMinSaved === 0) &&
        (Number(element.quantity) <= quantityMaxSaved ||
          quantityMaxSaved === 0) &&
        (element.name.toLowerCase().indexOf(searchSaved) !== -1 ||
          searchSaved === "")
      )
        valuesFilter.push(element);
    });
    this.cardList.drawCards(this.applySorting(valuesFilter));
  }

  private applySorting(data: Data[]): Data[] {
    const sortSaved = localStorage.getItem("sort_saved") as SortEnum;
    if (sortSaved === "name_low")
      data.sort((a, b) => (a.name > b.name ? 1 : -1));
    if (sortSaved === "name_high")
      data.sort((a, b) => (a.name < b.name ? 1 : -1));
    if (sortSaved === "price_low")
      data.sort((a, b) => Number(a.price) - Number(b.price));
    if (sortSaved === "price_high")
      data.sort((a, b) => Number(b.price) - Number(a.price));
    if (sortSaved === "year_low")
      data.sort((a, b) => Number(a.year) - Number(b.year));
    if (sortSaved === "year_high")
      data.sort((a, b) => Number(b.year) - Number(a.year));
    return data;
  }
}

export default Storage;
