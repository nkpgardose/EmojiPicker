import React from "react";
import PropTypes from "prop-types";
import { lib } from "emojilib";
import "../../variables.css";
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
  results: PropTypes.arrayOf(PropTypes.string),
  onEmojiPick: PropTypes.func.isRequired
};

const defaultProps = {
  results: []
};

function Emojis({ emojis, results, onEmojiPick }) {
  function onClick(emoji) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      onEmojiPick(emoji);
    };
  }

  return (
    <div className="Emojis">
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
                  onClick={onClick(emoji)}
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
            {value.map(emoji => (
              <button
                aria-label={emoji.key}
                className="item"
                key={emoji.key}
                role="img"
                title={emoji.key}
                onClick={onClick(emoji)}
              >
                {emoji.char}
              </button>
            ))}
          </dd>
        </dl>
      ))}
    </div>
  );
}

Emojis.propTypes = propTypes;
Emojis.defaultProps = defaultProps;

export default Emojis;
