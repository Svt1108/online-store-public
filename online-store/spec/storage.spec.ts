import Storage from "../src/components/storage";
import { sortType } from "../src/components/storage";
import { Data } from "../src/types/types";

describe("Function sortType", () => {
  let a: Data;
  let b: Data;

  beforeEach(() => {
    a = {
      id: "1",
      name: "Lovely Mexico",
      img: "plate-1.jpg",
      type: "stoneware",
      author: "Grazielli David",
      year: "2022",
      color: "chocolate",
      secondColor: "green",
      quantity: "3",
      popularity: "yes",
      price: "10",
    };
    b = {
      id: "2",
      name: "Coffee time",
      img: "plate-2.jpg",
      type: "stoneware",
      author: "Milena Kibede",
      year: "2021",
      color: "pink",
      secondColor: "red",
      quantity: "5",
      popularity: "no",
      price: "37",
    };
  });

  test("to be instance of function", () => {
    expect(sortType).toBeInstanceOf(Function);
  });

  test("to work correctly with string low", () => {
    expect(sortType(a, b, "name", "low")).toBe(1);
  });
  test("to work correctly with string high", () => {
    expect(sortType(a, b, "name", "high")).toBe(-1);
  });
  test("to work correctly with price low", () => {
    expect(sortType(a, b, "price", "low")).toBeLessThan(0);
  });
  test("to work correctly with price high", () => {
    expect(sortType(a, b, "price", "high")).toBeGreaterThan(0);
  });
  test("to work correctly with year low", () => {
    expect(sortType(a, b, "year", "low")).toBeGreaterThan(0);
  });
  test("to work correctly with year high", () => {
    expect(sortType(a, b, "year", "high")).toBeLessThan(0);
  });
});

describe("Method applySorting", () => {
  const testStorage = new Storage();

  test("should be defined", () => {
    expect(testStorage.applySorting).toBeDefined;
    expect(testStorage.applySorting).not.toBeUndefined();
  });

  test("should return array", () => {
    expect(testStorage.applySorting([])).toEqual([]);
  });

  if (localStorage.getItem("sort_saved") === "name_low") {
    test("should return right Array", () => {
      expect(
        testStorage.applySorting([
          {
            id: "1",
            name: "Lovely Mexico",
            img: "plate-1.jpg",
            type: "stoneware",
            author: "Grazielli David",
            year: "2022",
            color: "chocolate",
            secondColor: "green",
            quantity: "3",
            popularity: "yes",
            price: "10",
          },
          {
            id: "2",
            name: "Coffee time",
            img: "plate-2.jpg",
            type: "stoneware",
            author: "Milena Kibede",
            year: "2021",
            color: "pink",
            secondColor: "red",
            quantity: "5",
            popularity: "no",
            price: "37",
          },
        ])
      ).toEqual([
        {
          id: "2",
          name: "Coffee time",
          img: "plate-2.jpg",
          type: "stoneware",
          author: "Milena Kibede",
          year: "2021",
          color: "pink",
          secondColor: "red",
          quantity: "5",
          popularity: "no",
          price: "37",
        },
        {
          id: "1",
          name: "Lovely Mexico",
          img: "plate-1.jpg",
          type: "stoneware",
          author: "Grazielli David",
          year: "2022",
          color: "chocolate",
          secondColor: "green",
          quantity: "3",
          popularity: "yes",
          price: "10",
        },
      ]);
    });
  }
});
