import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { ordered, lib } from "emojilib";
import searchEmoji from "./searchEmoji";
import "./../../variables.css";
import "./index.css";

const propTypes = {
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
  onFieldSearch: PropTypes.func,
  searchText: PropTypes.string
};

const defaultProps = {
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

function EmojiPicker({ emojis, searchText, onFieldSearch }) {
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
            onChange={searchEmoji({
              emojiContent,
              onFieldSearch,
              setInput,
              setResults
            })}
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
                  const emoji = lib[key];
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
                {value.map(({ key, char }) => (
                  <button
                    aria-label={key}
                    className="item"
                    key={key}
                    role="img"
                    title={key}
                  >
                    {char}
                  </button>
                ))}
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
