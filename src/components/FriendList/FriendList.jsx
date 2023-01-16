import PropTypes from "prop-types";

import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { FriendUl } from "./FriendList.styled";

export const FriendList = ({friends}) => {
  return (
    <FriendUl>
    {friends.map(({id, avatar, name, isOnline}) =>(
    <FriendListItem 
      key={id}
      avatar={avatar}
      name={name}
      isOnline={isOnline}
      />))}
   </FriendUl>)
};

FriendList.propTypes = {
 friends: PropTypes.arrayOf(
  PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })
 ).isRequired,
};

FriendList.defaultProps = {
  friends: [],
};