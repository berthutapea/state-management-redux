import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function TalkReplyInput({ replyTalk }) {
  const [text, setText] = useState('');
  const navigate = useNavigate('/');

  function replyTalkHandler() {
    if (text.trim()) {
      replyTalk(text);
      setText('');
      navigate('/');
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setText(target.value);
    }
  }

  return (
    <div className="talk-reply-input">
      <textarea type="text" placeholder="Talk your reply" value={text} onChange={handleTextChange} />
      <p className="talk-reply-input__char-left">
        <strong>{text.length}</strong>
        /320
      </p>
      <button type="submit" onClick={replyTalkHandler}>Reply</button>
    </div>
  );
}

TalkReplyInput.propTypes = {
  replyTalk: PropTypes.func.isRequired,
};

export default TalkReplyInput;
