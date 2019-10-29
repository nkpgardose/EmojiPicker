import React from "react";
import PropTypes from "prop-types";
import searchEmoji from "../../utils/searchEmoji";
import "../../variables.css";
import "./index.css";

const propTypes = {
  /** Force this element to focus after mount. */
  autoFocus: PropTypes.bool,
  /** value reflects on SearchBar's input element. */
  input: PropTypes.string,
  /** field placeholder text. */
  inputPlaceholder: PropTypes.string.isRequired,
  /** reference on a element for scrollTop condition. */
  emojiContent: PropTypes.shape({ current: PropTypes.object }).isRequired,
  /**
   * returns the emojies search result when user is typing words on SearchBar.
   * Typing `'hello'` on SearchBar will return `['wave']`.
   * */
  onFieldSearch: PropTypes.func.isRequired,
  /** new `value` being passed on input field when user enters a key. */
  setInput: PropTypes.func.isRequired,
  /** new `results` being passed here. */
  setResults: PropTypes.func.isRequired
};

const defaultProps = {
  autoFocus: false,
  input: ""
};

function SearchBar({
  autoFocus,
  input,
  inputPlaceholder,
  emojiContent,
  onFieldSearch,
  setInput,
  setResults
}) {
  return (
    <div className="SearchBar">
      <input
        autoFocus={autoFocus}
        className="input"
        onChange={searchEmoji({
          emojiContent,
          onFieldSearch,
          setInput,
          setResults
        })}
        placeholder={inputPlaceholder}
        type="text"
        value={input}
      />
    </div>
  );
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
