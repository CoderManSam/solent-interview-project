import React from 'react';

import { CircleArrow, List, ListItem, Thumbnail } from './Listing.styled';
import PhoneSVG from 'Public/icons/phone.svg';

import worldImageURL from 'Public/images/world.png';

const Listing = (props) => {
    const {randomUsers, filteredUsers} = props
    console.log("filteredUsers", filteredUsers)

    return(
        <List>
            {filteredUsers.map((user, index) => (
                <ListItem
                // onClick={() => fetchStudentTestData(student.id)}
                // index used as some users did not have ID values, using another user key/value would be risky as a different user may share the same key/value
                key={index}
                // className="student"
                >
                    <Thumbnail src={user.picture.thumbnail} alt="User thumbnail"/>   
                    {user.name.first} {user.name.last} 
                    <CircleArrow src="/public/icons/circle-arrow.svg" alt="User thumbnail"/>
                </ListItem>
            ))}
        </List>
    )
};

export default Listing;