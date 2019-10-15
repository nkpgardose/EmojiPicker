import React from "react";
import PropTypes from "prop-types";
import searchEmoji from "../EmojiPicker/searchEmoji";
import "../../variables.css";
import "./index.css";

const propTypes = {
  /** value reflects on SearchBar's input element. */
  input: PropTypes.string,
  /** reference on a element for scrollTop condition. */
  emojiContent: PropTypes.shape({ current: PropTypes.object }).isRequired,
  /**
   * Returns the emojies search result when user is typing words on SearchBar.
   * Typing `'hello'` on SearchBar will return `['wave']`.
   * */
  onFieldSearch: PropTypes.func.isRequired,
  /** new `value` being passed on input field when user enters a key. */
  setInput: PropTypes.func.isRequired,
  /** new `results` being passed here. */
  setResults: PropTypes.func.isRequired
};

const defaultProps = {
  input: ""
};

function SearchBar({
  emojiContent,
  onFieldSearch,
  setInput,
  setResults,
  input
}) {
  return (
    <div className="SearchBar">
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
  );
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
