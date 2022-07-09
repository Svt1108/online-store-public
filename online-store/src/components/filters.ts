import { Data } from "../types/types";

class FilterList {
  drawData: Array<Data>;
  setAuthor: Set<string>;
  setColor: Set<string>;
  setPopularity: Set<string>;

  constructor() {
    this.drawData = [];
    this.setAuthor = new Set();
    this.setColor = new Set();
    this.setPopularity = new Set();
  }

  public setFilters(data: Array<Data>): void {
    this.drawData = data;
    this.drawData.forEach((element) => {
      this.setAuthor.add(element.author);
      this.setColor.add(element.color);
      this.setPopularity.add(element.popularity);
    });
    this.drawFilters();
  }

  private drawFilters(): void {
    const author = document.getElementById("author") as HTMLElement;
    const setArray = Array.from(this.setAuthor);
    setArray.sort();
    setArray.forEach((element) => {
      const authorItem = document.createElement("div");
      authorItem.classList.add("filter-content");
      authorItem.textContent = `${element}`;
      author.appendChild(authorItem);
    });

    const color = document.getElementById("color") as HTMLElement;
    const setArrayColor = Array.from(this.setColor);
    setArrayColor.sort();
    setArrayColor.forEach((element) => {
      const colorItem = document.createElement("div");
      colorItem.classList.add("filter-content");
      colorItem.textContent = `${element}`;
      colorItem.style.backgroundColor = `${element}`;
      color.appendChild(colorItem);
    });

    const popularity = document.getElementById("popularity") as HTMLElement;
    const setArrayPopularity = Array.from(this.setPopularity);
    setArrayPopularity.sort();
    setArrayPopularity.forEach((element) => {
      const popularityItem = document.createElement("div");
      popularityItem.classList.add("filter-content");
      popularityItem.textContent = `${element}`;
      popularity.appendChild(popularityItem);
    });
  }
}

export default FilterList;
