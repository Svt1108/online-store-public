import { Data } from "../types/types";

class FilterList {
  drawData: Array<Data>;
  setAuthor: Set<string>;
  setColor: Set<string>;
  setType: Set<string>;
  setPopularity: Set<string>;
  //  arrayOfFilters: Array<string>;

  constructor() {
    this.drawData = [];
    this.setAuthor = new Set();
    this.setColor = new Set();
    this.setType = new Set();
    this.setPopularity = new Set();
    //   this.arrayOfFilters = ["author", "color", "type", "popularity"];
  }

  public setFilters(data: Array<Data>): void {
    this.drawData = data;
    this.drawData.forEach((element) => {
      this.setAuthor.add(element.author);
      this.setColor.add(element.color);
      this.setType.add(element.type);
      this.setPopularity.add(element.popularity);
    });
    this.drawFilters();
  }

  private drawFilters(): void {
    const authorSaved: Array<string> = JSON.parse(
      localStorage.getItem("author_saved") as string
    );
    const colorSaved: Array<string> = JSON.parse(
      localStorage.getItem("color_saved") as string
    );
    const typeSaved: Array<string> = JSON.parse(
      localStorage.getItem("type_saved") as string
    );
    const popularitySaved: Array<string> = JSON.parse(
      localStorage.getItem("popularity_saved") as string
    );

    const author = document.getElementById("author") as HTMLElement;
    author.innerHTML = "";
    const setArray = Array.from(this.setAuthor);
    setArray.sort();
    setArray.forEach((element) => {
      const authorItem = document.createElement("div");
      authorItem.classList.add("filter-content");
      if (authorSaved.includes(element)) authorItem.classList.add("selected");
      authorItem.textContent = `${element}`;
      author.appendChild(authorItem);
    });

    const color = document.getElementById("color") as HTMLElement;
    color.innerHTML = "";
    const setArrayColor = Array.from(this.setColor);
    setArrayColor.sort();
    setArrayColor.forEach((element) => {
      const colorItem = document.createElement("div");
      colorItem.classList.add("filter-content_color", "z-depth-1");
      if (colorSaved.includes(element)) colorItem.classList.add("selected");
      colorItem.textContent = `${element}`;
      if (element === "blue")
        colorItem.style.borderBottom = `solid 3px mediumblue`;
      else if (element === "red")
        colorItem.style.borderBottom = `solid 3px crimson`;
      else colorItem.style.borderBottom = `solid 3px ${element}`;
      color.appendChild(colorItem);
    });

    const type = document.getElementById("type") as HTMLElement;
    type.innerHTML = "";
    const setArrayType = Array.from(this.setType);
    setArrayType.sort();
    setArrayType.forEach((element) => {
      const typeItem = document.createElement("div");
      typeItem.classList.add("filter-content_color", "z-depth-1");
      if (typeSaved.includes(element)) typeItem.classList.add("selected");
      typeItem.textContent = `${element}`;
      if (element === "porcelain") {
        typeItem.style.borderRight = `solid 3px #bbdefb`;
        typeItem.style.borderLeft = `solid 3px #bbdefb`;
      } else {
        typeItem.style.borderRight = `solid 3px #bcaaa4`;
        typeItem.style.borderLeft = `solid 3px #bcaaa4`;
      }
      type.appendChild(typeItem);
    });

    const popularity = document.getElementById("popularity") as HTMLElement;
    popularity.innerHTML = "";
    const setArrayPopularity = Array.from(this.setPopularity);
    setArrayPopularity.sort();
    setArrayPopularity.forEach((element) => {
      if (element === "no") return;
      const popularityItem = document.createElement("div");
      popularityItem.classList.add("filter-content_color", "z-depth-1");
      if (popularitySaved.includes(element))
        popularityItem.classList.add("selected");
      popularityItem.textContent = `${element}`;
      popularity.appendChild(popularityItem);
    });
  }
}

export default FilterList;
