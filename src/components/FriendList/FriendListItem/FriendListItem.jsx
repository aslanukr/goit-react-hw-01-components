import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from './FriendListItem.module.css';

const OnlineIcon = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className={css.item}>
      <OnlineIcon isOnline={isOnline}></OnlineIcon>
      <div className={css.friendWrapper}>
        <img
          className={css.avatar}
          src={avatar}
          alt={`${name} avatar`}
          width="48"
        />
        <p className={css.name}>{name}</p>
      </div>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
