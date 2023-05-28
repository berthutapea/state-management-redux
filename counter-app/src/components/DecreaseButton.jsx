/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

function DecreaseButton({ decrease }) {
  return (
    <button className="decrease" onClick={decrease}>
      <span role="img" aria-label="minus">
        -
      </span>
    </button>
  );
}

DecreaseButton.propType = {
  decrease: PropTypes.func.isRequired,
};

export default DecreaseButton;