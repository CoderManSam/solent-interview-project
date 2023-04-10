import React from 'react';
import { useLocation } from "react-router";

import { ProfileIdentification, ProfileInformation, Avatar } from './Profile.styled';
import PhoneSVG from 'Public/icons/phone.svg';
import DobSVG from 'Public/icons/dob.svg';
import EmailSVG from 'Public/icons/email.svg';

const Profile = () => {
    // const {randomUsers, filteredUsers} = props
    // console.log("filteredUsers", filteredUsers)

    const data = useLocation();
    const user = data.state.user

    console.log("user info", user)
    console.log("user email", user.email)

    return(
        <>
            <ProfileIdentification>

                <Avatar src={user.picture.large} alt="User avatar"/>   

                {user.name.first} {user.name.last} 

            </ProfileIdentification>
            <ProfileInformation>
                <EmailSVG alt="Email icon"/>
                {user.email}
                <DobSVG alt="Date of birth icon"/>
                {user.dob.date}
                <PhoneSVG alt="Phone icon"/>
                {user.phone}
            </ProfileInformation>
        </>

        // <List>
        //     {filteredUsers.map((user, index) => (
        //         <ListItem
        //         // onClick={() => fetchStudentTestData(student.id)}
        //         // index used as some users did not have ID values, using another user key/value would be risky as a different user may share the same key/value
        //         key={index}
        //         // className="student"
        //         >
        //             <Thumbnail src={user.picture.thumbnail} alt="User thumbnail"/>   
        //             {user.name.first} {user.name.last} 
        //             <CircleArrowSVG alt="User thumbnail"/>
        //         </ListItem>
        //     ))}
        // </List>
    )
};

export default Profile;