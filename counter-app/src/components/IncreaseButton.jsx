import React from 'react';
import PropTypes from 'prop-types';

function IncreaseButton({ increase }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className="increase" onClick={increase}>
      <span role="img" aria-label="plus">
        +
      </span>
    </button>
  );
}

IncreaseButton.propTypes = {
  increase: PropTypes.func.isRequired,
};

export default IncreaseButton;