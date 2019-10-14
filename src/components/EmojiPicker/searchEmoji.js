import { lib } from "emojilib";

function searchEmoji({ emojiContent, onFieldSearch, setInput, setResults }) {
  return e => {
    const { value } = e.target;
    const searchInputs = value.split(" ");
    const items = Object.entries(lib)
      .filter(([_key, { keywords }]) =>
        searchInputs.find(input => keywords.includes(input.toLowerCase()))
      )
      .map(item => item[0]);

    if (items.length) {
      const { current } = emojiContent;
      if (current.scrollTop) {
        current.scrollTo(0, 0);
      }
    }

    onFieldSearch(items);
    setInput(value);
    setResults(items);
  };
}

export default searchEmoji;
