import { Data } from "../types/types";
import { platesArray } from "../data/platedata";
import CardList from "../components/cards";
import FilterList from "../components/filters";

class App {
  cardList: CardList;
  filterList: FilterList;
  data: Array<Data>;

  constructor() {
    this.cardList = new CardList();
    this.filterList = new FilterList();
    this.data = platesArray;
  }

  public start(): void {
    //   if (!localStorage.getItem('author_saved')) localStorage.setItem('author_saved', 'light');

    const author = document.getElementById("author") as HTMLElement;
    author.addEventListener("click", (event: Event) => {
      if (event.target !== author) {
        if (!localStorage.getItem("author_saved")) {
          const author_saved = [(<HTMLElement>event.target).textContent];
          localStorage.setItem("author_saved", JSON.stringify(author_saved));
        } else {
          const author_saved: Array<string> = JSON.parse(
            localStorage.getItem("author_saved") as string
          );
        }
      }
      //      console.log((<HTMLElement>event.target).textContent);
    });

    this.cardList.drawCards(this.data);
    this.filterList.setFilters(this.data);
  }
}

export default App;
