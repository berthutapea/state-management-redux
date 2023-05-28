import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineRestartAlt } from 'react-icons/md';

function ResetButton({ reset, color }) {
  return (
    <button className="reset" style={{ color }} type="button" aria-label="reset" title="reset" onClick={reset}><MdOutlineRestartAlt /></button>
  );
}

ResetButton.defaultProps = {
  color: '#FFFFFF',
};

ResetButton.propTypes = {
  reset: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default ResetButton;
