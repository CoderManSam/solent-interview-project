import React from 'react';
import { useLocation } from "react-router";

import { ProfileIdentification, ProfileInformation, Avatar, AvatarCircle } from './Profile.styled';
import PhoneSVG from 'Public/icons/phone.svg';
import DobSVG from 'Public/icons/dob.svg';
import EmailSVG from 'Public/icons/email.svg';

const Profile = () => {

    const dobReformat = (date) => {
        const dateArray = date.split("")
        let day
        dateArray[8] === "0" ? day = `${dateArray[9]}` : day = `${dateArray[8]}${dateArray[9]}`
        let month
        dateArray[5] === "0" ? month = `${dateArray[6]}` : month = `${dateArray[5]}${dateArray[6]}`
        const year = `${dateArray[0]}${dateArray[1]}${dateArray[2]}${dateArray[3]}`
        const dobReformatted = day+"/"+month+"/"+year

        return dobReformatted
    }

    const data = useLocation();
    const user = data.state.user
    const dobDate = user.dob.date.slice(0, 10)
    const dob = dobReformat(dobDate)
    console.log("dob", dob)
    console.log("user info", user)

    return(
        <>
            <ProfileIdentification>

                <AvatarCircle>
                    <Avatar src={user.picture.large} alt="User avatar"/> 
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
        </>
    )
};

export default Profile;