import React from "react";
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
  ).isRequired
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

function EmojiPicker({ emojis }) {
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
          <div className="input"></div>
          <div className="submit"></div>
        </div>
      </header>
      <div className="content">
        <div className="emojis">
          {Object.entries(emojis).map(emojisArr => {
            const key = emojisArr[0];
            const value = emojisArr[1];

            return (
              <dl key={key} className="category" id={`emoji_${key}`}>
                <dt className="title">{key.replace(/_/g, " ")}</dt>
                <dd className="collection">
                  {value.map(emoji => (
                    <button
                      aria-label={emoji.key}
                      className="item"
                      key={emoji.key}
                      role="img"
                    >
                      {emoji.char}
                    </button>
                  ))}
                </dd>
              </dl>
            );
          })}
        </div>
      </div>
    </div>
  );
}

EmojiPicker.propTypes = propTypes;
EmojiPicker.defaultProps = defaultProps;

export default EmojiPicker;
