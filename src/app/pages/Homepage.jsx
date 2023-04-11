import React, { useEffect } from 'react';
import { useState } from "react";
import Listing from 'App/components/Listing/Listing';
import Hero from 'App/components/Hero/Hero';

const Homepage = () => {
    const [randomUsers, setRandomUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [searchInput, setSearchInput] = useState('')

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
            <Hero randomUsers={randomUsers} filteredUsers={filteredUsers} setFilteredUsers={setFilteredUsers} searchInput={searchInput} setSearchInput={setSearchInput}/>
            {filteredUsers.length ? <Listing randomUsers={randomUsers} filteredUsers={filteredUsers}/> : null}
        </>
    );
};

export default Homepage;
