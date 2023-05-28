import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ResetButton from './ResetButton';
import { formatStopwatchFromMilliseconds } from '../utils';

function Stopwatch({ color }) {
  const [timeInMillis, setTimeInMillis] = useState(0);

  useEffect(() => {
    console.log('efek dijalankan');
    const intervalId = setInterval(() => {
      setTimeInMillis((prevValue) => prevValue + 100);
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  const onReset = () => { setTimeInMillis(0); };

  return (
    <div className="stopwatch" style={{ color }}>
      <p className="stopwatch-time">{formatStopwatchFromMilliseconds(timeInMillis)}</p>
      <ResetButton reset={onReset} color={color} />
    </div>
  );
}

Stopwatch.defaultProps = {
  color: '#FFFFFF',
};

Stopwatch.propTypes = {
  color: PropTypes.string,
};

export default Stopwatch;
