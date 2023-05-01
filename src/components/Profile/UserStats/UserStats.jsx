import PropTypes from 'prop-types';
import css from './UserStats.module.css';

export const UserStats = ({ followers, views, likes }) => {
  return (
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
  );
};

UserStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
