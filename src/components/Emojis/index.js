import React from "react";
import PropTypes from "prop-types";
import { lib } from "emojilib";
import Emoji from "../Emoji";
import "../../variables.css";
import "./index.css";

const propTypes = {
  /**
   * emojies group by their respective emoji category.
   * Recommended to use [emojib](https://github.com/muan/emojilib) in this
   * component.
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
  navRefs: PropTypes.objectOf(PropTypes.object),
  /**
   * consists of emoji keys and this will display `Search Result`
   */
  results: PropTypes.arrayOf(PropTypes.string),
  /** returns the value of a selected emoji. */
  onEmojiPick: PropTypes.func.isRequired
};

const defaultProps = {
  navRefs: {},
  results: []
};

function Emojis({ emojis, navRefs, onEmojiPick, results }) {
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
                <Emoji key={key} onClick={onClick(emoji)} title={key}>
                  {emoji.char}
                </Emoji>
              );
            })}
          </dd>
        </dl>
      ) : null}
      {Object.entries(emojis).map(([key, value]) => (
        <dl
          ref={navRefs[key]}
          key={key}
          className="category"
          id={`content_${key}`}
        >
          <dt className="title">{key.replace(/_/g, " ")}</dt>
          <dd className="collection">
            {value.map(emoji => {
              const { key, char } = emoji;

              return (
                <Emoji key={key} title={key} onClick={onClick(emoji)}>
                  {char}
                </Emoji>
              );
            })}
          </dd>
        </dl>
      ))}
    </div>
  );
}

Emojis.propTypes = propTypes;
Emojis.defaultProps = defaultProps;

export default Emojis;
