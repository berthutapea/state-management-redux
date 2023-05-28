import React from 'react';
import PropTypes from 'prop-types';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';

function TalkItem({
  id, text, createdAt, likes, user, authUser, like,
}) {
  const navigate = useNavigate();
  const isTalkLiked = likes.includes(authUser);

  const onLikeClick = (event) => {
    event.stopPropagation();
    like(id);
  };

  const onTalkClick = () => {
    navigate(`/talks/${id}`);
  };

  const onTalkPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/talks/${id}`);
    }
  };

  return (
    <div role="button" tabIndex={0} className="talk-item" onClick={onTalkClick} onKeyDown={onTalkPress}>
      <div className="talk-item__user-photo">
        <img src={user.photo} alt={user} />
      </div>
      <div className="talk-item__detail">
        <header>
          <div className="talk-item__user-info">
            <p className="talk-item__user-name">{user.name}</p>
            <p className="talk-item__user-id">
              @
              {user.id}
            </p>
          </div>
          <p className="talk-item__created-at">{postedAt(createdAt)}</p>
        </header>
        <article>
          <p className="talk-item__text">{text}</p>
        </article>
        {
          like && (
            <div className="talk-item__likes">
              <p>
                <button type="button" aria-label="like" onClick={onLikeClick}>
                  { isTalkLiked ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
                </button>
                {' '}
                {likes.length}
              </p>
            </div>
          )
        }
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

const talkItemShape = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  likes: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

TalkItem.propTypes = {
  ...talkItemShape,
  like: PropTypes.func,
};

TalkItem.defaultProps = {
  like: null,
};

export { talkItemShape };

export default TalkItem;
