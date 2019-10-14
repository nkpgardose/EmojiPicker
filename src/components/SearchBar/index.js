import React from "react";
import PropTypes from "prop-types";
import searchEmoji from "../EmojiPicker/searchEmoji";
import "./index.css";

const propTypes = {
  input: PropTypes.string,
  emojiContent: PropTypes.shape({ current: PropTypes.object }).isRequired,
  onFieldSearch: PropTypes.func.isRequired,
  setInput: PropTypes.func.isRequired,
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
