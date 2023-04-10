import React, { useEffect } from 'react';
import { useState } from "react";
import Example from 'Components/Example/Example';
import Listing from 'App/components/Listing/Listing';

const Homepage = () => {
    const [randomUsers, setRandomUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])

    const getRandomUsers = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        };
        let result
        await fetch(
            "https://randomuser.me/api/?results=10",
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                console.log('Random users: ', data.results);
                result = data.results;
                setRandomUsers(result) 
                setFilteredUsers(result) 
            });
        return result;
    };

    useEffect(() => {
        getRandomUsers()    
    }, [])

    return (
        <>
            <Example />
            {filteredUsers.length ? <Listing randomUsers={randomUsers} filteredUsers={filteredUsers}/> : null}
        </>
    );
};

export default Homepage;
