import React from 'react';
import PropTypes from 'prop-types';
import TalkItem, { talkItemShape } from './TalkItem';

function TalksList({ talks, like }) {
  return (
    <div className="talks-list">
      {
         talks.map((talk) => (
           <TalkItem key={talk.id} {...talk} like={like} />
         ))
      }
    </div>
  );
}

TalksList.propTypes = {
  talks: PropTypes.arrayOf(PropTypes.shape(talkItemShape)).isRequired,
  like: PropTypes.func.isRequired,
};

export default TalksList;
