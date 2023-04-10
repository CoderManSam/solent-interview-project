import React from 'react';
import { Link } from "react-router-dom";

import { ProfileLink, List, ListItem, Thumbnail } from './Listing.styled';
import PhoneSVG from 'Public/icons/phone.svg';
import CircleArrowSVG from 'Public/icons/circle-arrow.svg';

import worldImageURL from 'Public/images/world.png';

const Listing = (props) => {
    const {randomUsers, filteredUsers} = props
    console.log("filteredUsers", filteredUsers)

    return(
        <List>
            {filteredUsers.map((user, index) => (
                // <ProfileLink to="/profile" state={{user: true}}>
                <ProfileLink to={{pathname: "/profile", state: {user}}}>
                    <ListItem
                    // index used as some users did not have ID values, using another user key/value would be risky as a different user may share the same key/value
                    key={index}
                    >
                        <Thumbnail src={user.picture.thumbnail} alt="User thumbnail"/>   

                        {user.name.first} {user.name.last} 

                        <CircleArrowSVG alt="Circle arrow icon"/>
                    </ListItem>
                </ProfileLink>
            ))}
        </List>
    )
};

export default Listing;