import MessageWindow from "../src/components/message";

describe("Method createMessage", () => {
  const testMessageWindow = new MessageWindow();

  test("should be defined", () => {
    expect(testMessageWindow.createMessage).toBeDefined;
  });

  it("create correct message", () => {
    const text = "This is a message";
    testMessageWindow.createMessage(text);
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
