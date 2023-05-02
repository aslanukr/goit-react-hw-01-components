import PropTypes from 'prop-types';
import css from './Profile.module.css';

export function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div className={css.user}>
        <div className={css.avatarWrapper}>
          <img src={avatar} alt="User avatar" className={css.avatar} />
        </div>
        <p className={css.username}>{username}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Followers</span>
          <span className={css.statsQuantity}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Views</span>
          <span className={css.statsQuantity}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Likes</span>
          <span className={css.statsQuantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
