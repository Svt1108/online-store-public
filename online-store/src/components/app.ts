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
    const author = document.getElementById("author") as HTMLElement;
    author.addEventListener("click", (event: Event) => {
      if (event.target !== author) {
        const author_item = (<HTMLElement>event.target).textContent as string;
        if (!localStorage.getItem("author_saved")) {
          const author_saved = [author_item];
          localStorage.setItem("author_saved", JSON.stringify(author_saved));
          (<HTMLElement>event.target).classList.add("selected");
          //         console.log(event.target);
        } else {
          const author_saved: Array<string> = JSON.parse(
            localStorage.getItem("author_saved") as string
          );
          if (author_saved.indexOf(author_item) === -1) {
            author_saved.push(author_item);
            (<HTMLElement>event.target).classList.add("selected");
          } else {
            author_saved.splice(author_saved.indexOf(author_item), 1);
            (<HTMLElement>event.target).classList.remove("selected");
          }
          localStorage.removeItem("author_saved");
          localStorage.setItem("author_saved", JSON.stringify(author_saved));
        }

        const author_saved: Array<string> = JSON.parse(
          localStorage.getItem("author_saved") as string
        );
        const valuesFilter: Data[] = [];
        this.data.forEach((element) => {
          if (author_saved.includes(element.author)) valuesFilter.push(element);
        });
        //       console.log(valuesFilter);
        this.cardList.drawCards(valuesFilter);
      }
    });

    this.cardList.drawCards(this.data);
    this.filterList.setFilters(this.data);
  }
}

export default App;
