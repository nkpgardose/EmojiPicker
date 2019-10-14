import React from "react";
import PropTypes from "prop-types";
import { lib } from "emojilib";
import { propTypes as EmojiPickerPropTypes } from "../EmojiPicker";
import "../../variables.css";
import "./index.css";

const propTypes = {
  emojis: EmojiPickerPropTypes.emojis,
  results: PropTypes.arrayOf(PropTypes.string)
};

const defaultProps = {
  results: []
};

function Emojis({ emojis, results }) {
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
  );
}

Emojis.propTypes = propTypes;
Emojis.defaultProps = defaultProps;

export default Emojis;
