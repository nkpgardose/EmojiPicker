import sinon from "sinon";
import searchEmoji from "./searchEmoji";

it("executes given callbacks", () => {
  const mockElement = {
    target: {
      value: "Hello"
    }
  };
  const mockEmojiContent = {
    current: {
      scrollTop: 0
    }
  };
  const onFieldSearch = sinon.spy();
  const setInput = sinon.spy();
  const setResults = sinon.spy();

  searchEmoji({
    emojiContent: mockEmojiContent,
    onFieldSearch,
    setInput,
    setResults
  })(mockElement);

  expect(onFieldSearch.calledWith(["wave"])).toBe(true);
  expect(setInput.calledWith("Hello")).toBe(true);
  expect(setResults.calledWith(["wave"])).toBe(true);
});

it("execute scrollTop of given element", () => {
  const scrollTo = sinon.spy();
  const mockElement = {
    target: {
      value: "Hello"
    }
  };
  const mockEmojiContent = {
    current: {
      scrollTop: 123,
      scrollTo
    }
  };
  const onFieldSearch = sinon.spy();
  const setInput = sinon.spy();
  const setResults = sinon.spy();

  searchEmoji({
    emojiContent: mockEmojiContent,
    onFieldSearch,
    setInput,
    setResults
  })(mockElement);

  expect(scrollTo.calledWith(0, 0)).toBe(true);
  expect(onFieldSearch.calledWith(["wave"])).toBe(true);
  expect(setInput.calledWith("Hello")).toBe(true);
  expect(setResults.calledWith(["wave"])).toBe(true);
});

it("logs performance on multiple words on search", () => {
  const mockElement = {
    target: {
      value: `
			Hello world one cup smile sad lonely awesome. Non
			accusantium iusto ipsa nihil. Thumbs up possimus libero quasi ipsam
			doloribus. Deserunt aliquid quo aperiam distinctio sed sint dolores
			excepturi
			`
    }
  };
  const mockEmojiContent = {
    current: {
      scrollTop: 0
    }
  };

  const t0 = performance.now();
  searchEmoji({
    emojiContent: mockEmojiContent,
    onFieldSearch: () => {},
    setInput: () => {},
    setResults: () => {}
  })(mockElement);
  const t1 = performance.now();
  console.log("Call searchEmoji took " + (t1 - t0) + " milliseconds.");
});
