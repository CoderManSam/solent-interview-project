import React from 'react';
import { useLocation } from "react-router";

import { ProfileIdentification, ProfileInformation, Avatar, AvatarCircle, ProfileContainer } from './Profile.styled';
import PhoneSVG from 'Public/icons/phone.svg';
import DobSVG from 'Public/icons/dob.svg';
import EmailSVG from 'Public/icons/email.svg';

const Profile = () => {

    const data = useLocation();
    const user = data.state.user
    const dob = dobReformat(user.dob.date)

    function dobReformat(date) {
        const dobDate = new Date(date)
        const day = dobDate.getDate()
        const month = (dobDate.getMonth())+1
        const year = dobDate.getUTCFullYear()
        const birthDay = day+"/"+month+"/"+year

        return birthDay
    }

    return(
        <ProfileContainer>
            <ProfileIdentification>

                <AvatarCircle>
                    <Avatar src={user.picture.large} alt={`${user.name.first} ${user.name.last} avatar`}/> 
                </AvatarCircle>

                {user.name.first} {user.name.last} 

            </ProfileIdentification>
            <ProfileInformation>
                <EmailSVG alt="Email icon"/>
                {user.email}
                <DobSVG alt="Date of birth icon"/>
                {dob}
                <PhoneSVG alt="Phone icon"/>
                {user.phone}
            </ProfileInformation>
        </ProfileContainer>
    )
};

export default Profile;