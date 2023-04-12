import React from 'react';
import { ProfileLink, List, ListItem, UserImage, UsersName, CircleArrowIcon, ListingContainer } from './Listing.styled';

const Listing = (props) => {
    const {filteredUsers} = props

    return(
        <ListingContainer>
            <List>
                {filteredUsers.map((user, index) => (
                    <ProfileLink to={{pathname: "/profile", state: {user}}}>
                        <ListItem
                        // index used as some users did not have ID values, using another user key/value would be risky as a different user may share the same key/value
                        key={index}
                        >
                            <UserImage src={user.picture.medium} alt={`${user.name.first} ${user.name.last} image`}/>  
    
                            <UsersName>{user.name.first} {user.name.last}</UsersName> 
    
                            <CircleArrowIcon alt="Circle arrow icon"/>
                        </ListItem>
                    </ProfileLink>
                ))}
            </List>
        </ListingContainer>
    )
};

export default Listing;