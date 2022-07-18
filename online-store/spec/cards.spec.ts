import CardList from "../src/components/cards";

describe("Method drawCards", () => {
  const testCardList = new CardList();

  test("should be defined", () => {
    expect(testCardList.drawCards).toBeDefined;
  });
});
