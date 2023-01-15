import PropTypes from "prop-types";

import { ProfileDiv, Description, Avatar, UserName, UserInfo, Stats, StatsItem, Label, Quantity } from "./Profile.styled";

export function Profile({
  username,
  tag,
  location,
  avatar,
  stats : {followers, likes, views,}
})  
   {
    return (
  <ProfileDiv>
  <Description>
    <Avatar
      src={avatar}
      alt={username}
    />
    <UserName>{username}</UserName>
    <UserInfo>{tag}</UserInfo>
    <UserInfo>{location}</UserInfo>
  

  <Stats>
    <StatsItem>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </StatsItem>
  </Stats>
  </Description>
</ProfileDiv>
 )
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers : PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};