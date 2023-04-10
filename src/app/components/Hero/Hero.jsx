import React from 'react';

import { HeroContainer, Title, UnderTitle } from './Hero.styled';
import PhoneSVG from 'Public/icons/phone.svg';

import worldImageURL from 'Public/images/world.png';


const Hero = () => {
    // const {randomUsers, filteredUsers} = props
    // console.log("filteredUsers", filteredUsers)

    return(
        <HeroContainer>
            <Title>Find a member of staff</Title>
            <UnderTitle>Use the search box to get started</UnderTitle>
        </HeroContainer>
        // <List>
        //     {filteredUsers.map((user, index) => (
        //         // <ProfileLink to="/profile" state={{user: true}}>
        //         <ProfileLink to={{pathname: "/profile", state: {user}}}>
        //             <ListItem
        //             // index used as some users did not have ID values, using another user key/value would be risky as a different user may share the same key/value
        //             key={index}
        //             >
        //                 <Thumbnail src={user.picture.thumbnail} alt="User thumbnail"/>   

        //                 {user.name.first} {user.name.last} 

        //                 <CircleArrowSVG alt="Circle arrow icon"/>
        //             </ListItem>
        //         </ProfileLink>
        //     ))}
        // </List>
    )
};

export default Hero;