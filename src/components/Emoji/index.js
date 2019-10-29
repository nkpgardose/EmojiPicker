import React from "react";
import PropTypes from "prop-types";

import "../../variables.css";
import "./index.css";

const propTypes = {
  /**
   * Specific emoji for display.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  /**
   * For button a11y label & title.
   */
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

function Emoji({ children, title, onClick }) {
  return (
    <button
      aria-label={title}
      className="Emoji"
      title={title}
      role="img"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Emoji.propTypes = propTypes;

export default Emoji;
