import PropTypes from 'prop-types';

import css from './Profile.module.css';

import { UserData } from './UserData/UserData';
import { UserStats } from './UserStats/UserStats';

export function Profile({ user, stats }) {
  return (
    <div className={css.profile}>
      <UserData
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <UserStats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
