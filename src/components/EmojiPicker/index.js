import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import emojilib from "emojilib";
import "./../../index.css";
import "./index.css";

const propTypes = {
  emojis: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        category: PropTypes.string.isRequired,
        char: PropTypes.string.isRequired,
        fitzpatrick_scale: PropTypes.bool.isRequired,
        keywords: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
      }).isRequired
    ).isRequired
  ).isRequired,
  searchText: PropTypes.string
};

const defaultProps = {
  emojis: emojilib.ordered.reduce((acc, key) => {
    const currentEmojiObj = { ...emojilib.lib[key], key };
    const category = currentEmojiObj.category;
    const categoryEmojis = acc[category];

    return {
      ...acc,
      [category]: categoryEmojis ? [...categoryEmojis, currentEmojiObj] : []
    };
  }, {})
};

export function searchEmoji({ setResults, setInput, emojiContent }) {
  return e => {
    const { value } = e.target;
    const searchInputs = value.split(" ");
    const items = Object.entries(emojilib.lib)
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

    setResults(items);
    setInput(value);
  };
}

function EmojiPicker({ emojis, searchText }) {
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
        <div className="searchbar">
          <input
            autoFocus
            className="input"
            onChange={searchEmoji({ setResults, setInput, emojiContent })}
            placeholder="🔎 Search emoji..."
            type="text"
            value={input}
          />
        </div>
      </header>
      <div ref={emojiContent} className="content">
        <div className="emojis">
          {results.length ? (
            <dl className="category">
              <dt className="title" id="emoji_search_results">
                Search Results
              </dt>
              <dd className="collection">
                {results.map(key => {
                  const emoji = emojilib.lib[key];
                  return (
                    <button
                      aria-label={key}
                      className="item"
                      key={key}
                      title={key}
                      role="img"
                    >
                      {emoji.char}
                    </button>
                  );
                })}
              </dd>
            </dl>
          ) : null}
          {Object.entries(emojis).map(([key, value]) => (
            <dl key={key} className="category" id={`emoji_${key}`}>
              <dt className="title">{key.replace(/_/g, " ")}</dt>
              <dd className="collection">
                {value.map(emoji => {
                  const { key } = emoji;
                  return (
                    <button
                      aria-label={key}
                      className="item"
                      key={key}
                      title={key}
                      role="img"
                    >
                      {emoji.char}
                    </button>
                  );
                })}
              </dd>
            </dl>
          ))}
        </div>
      </div>
    </div>
  );
}

EmojiPicker.propTypes = propTypes;
EmojiPicker.defaultProps = defaultProps;

export default EmojiPicker;
