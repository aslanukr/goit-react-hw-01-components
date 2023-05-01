import css from './Profile.module.css';
import user from '../../user.json';
import { UserData } from './UserData/UserData';
import { UserStats } from './UserStats/UserStats';

export function Profile() {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div className={css.profile}>
      <UserData
        name={username}
        profile={tag}
        location={location}
        avatar={avatar}
      />
      <UserStats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
}
