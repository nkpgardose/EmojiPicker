import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { ordered, lib } from "emojilib";
import SearchBar from "../SearchBar";
import Emojis from "../Emojis";
import "../../variables.css";
import "./index.css";

const propTypes = {
  /**
   * Emojies group by their respective emoji category.
   * By default, it pulls emojies at [emojib](https://github.com/muan/emojilib)
   *
   * ```
   * {
   * 	people: [{char: 😃, ... }, ...],
   * 	objects: [{char: ⌚️, ... }, ...],
   * 	...
   * }
   * ```
   * */
  emojis: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.string.isRequired,
        char: PropTypes.string.isRequired,
        fitzpatrick_scale: PropTypes.bool.isRequired,
        key: PropTypes.string,
        keywords: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
      }).isRequired
    ).isRequired
  ).isRequired,
  /** Returns the value of a selected emoji. */
  onEmojiPick: PropTypes.func.isRequired,
  /** Initial value for search bar field. */
  searchText: PropTypes.string,
  /**
   * Returns the emojies search result when user is typing words on SearchBar.
   * Typing `'hello'` on SearchBar will return `['wave']`.
   * */
  onFieldSearch: PropTypes.func
};

export const defaultProps = {
  emojis: ordered.reduce((acc, key) => {
    const currentEmojiObj = { ...lib[key], key };
    const category = currentEmojiObj.category;
    const categoryEmojis = acc[category];

    return {
      ...acc,
      [category]: categoryEmojis ? [...categoryEmojis, currentEmojiObj] : []
    };
  }, {}),
  searchText: "",
  onFieldSearch() {}
};

function EmojiPicker({ emojis, searchText, onFieldSearch, onEmojiPick }) {
  const emojiContent = useRef(null);
  const [input, setInput] = useState(searchText);
  const [results, setResults] = useState([]);

  return (
    <div className="EmojiPicker">
      <header className="head">
        <nav className="nav">
          {Object.keys(emojis).map(key => {
            return (
              <a key={`nav_${key}`} className="item" href={`#emoji_${key}`}>
                {emojis[key][0].char}
              </a>
            );
          })}
        </nav>
        <SearchBar
          input={input}
          emojiContent={emojiContent}
          onFieldSearch={onFieldSearch}
          setInput={setInput}
          setResults={setResults}
        />
      </header>
      <div ref={emojiContent} className="content">
        <Emojis emojis={emojis} results={results} onEmojiPick={onEmojiPick} />
      </div>
    </div>
  );
}

EmojiPicker.propTypes = propTypes;
EmojiPicker.defaultProps = defaultProps;

export default EmojiPicker;
