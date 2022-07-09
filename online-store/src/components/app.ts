import { Data } from "../types/types";
import { platesArray } from "../data/platedata";
import CardList from "../components/cards";

class App {
  cardList: CardList;
  data: Array<Data>;

  constructor() {
    this.cardList = new CardList();
    this.data = platesArray;
  }

  public start(): void {
    // console.log(platesArray);
    this.cardList.drawCards(this.data);
  }
}

export default App;
