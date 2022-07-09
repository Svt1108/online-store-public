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
    // console.log(platesArray);
    this.cardList.drawCards(this.data);
    this.filterList.setFilters(this.data);
  }
}

export default App;
