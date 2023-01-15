import PropTypes from "prop-types";
import { FriendItem, Status, Name } from "./FriendListItem.styled";

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <FriendItem>
  <Status statusType={isOnline}>{isOnline}</Status>
  <img className="avatar" src={avatar} alt="User avatar" width="65px" />
  <Name>{name}</Name>
</FriendItem>
  );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};