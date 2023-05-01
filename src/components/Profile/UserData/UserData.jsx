import PropTypes from 'prop-types';
import css from './UserData.module.css';

export const UserData = ({ name, tag, location, avatar }) => {
  return (
    <div className={css.user}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.username}>{name}</p>
      <p className={css.info}>@{tag}</p>
      <p className={css.info}>{location}</p>
    </div>
  );
};

UserData.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
