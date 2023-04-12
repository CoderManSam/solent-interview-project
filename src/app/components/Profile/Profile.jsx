import React from 'react';
import { useLocation } from "react-router";

import { ProfileIdentification, ProfileInformation, Avatar, ProfileContainer, ProfileUsersName, Email, Dob, Phone } from './Profile.styled';
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

                <Avatar src={user.picture.large} alt={`${user.name.first} ${user.name.last} avatar`}/> 

                <ProfileUsersName>

                    {user.name.first} {user.name.last} 

                </ProfileUsersName>

            </ProfileIdentification>

            <ProfileInformation>

                <Email>
                    <EmailSVG alt="Email icon"/>
                    {user.email}
                </Email>

                <Dob>
                    <DobSVG alt="Date of birth icon"/>
                    {dob}
                </Dob>

                <Phone>
                    <PhoneSVG alt="Phone icon"/>
                    {user.phone}
                </Phone>

            </ProfileInformation>

        </ProfileContainer>
    )
};

export default Profile;