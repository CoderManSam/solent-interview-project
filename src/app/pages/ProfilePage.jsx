import React from 'react';
import { useState } from "react";
import Example from 'Components/Example/Example';
import Profile from 'Components/Profile/Profile';

const ProfilePage = () => {
    const [randomUsers, setRandomUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])

    return (
        <>
            <Example />
            <Profile />
        </>
    );
};

export default ProfilePage;
