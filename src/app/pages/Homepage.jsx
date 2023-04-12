import React, { useEffect } from 'react';
import { useState } from "react";
import Listing from 'App/components/Listing/Listing';
import Hero from 'App/components/Hero/Hero';

const Homepage = () => {
    const [randomUsers, setRandomUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [searchInput, setSearchInput] = useState('')

    const getTenRandomUsers = async () => {
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
        getTenRandomUsers()    
    }, [])

    return (
        <>
            <Hero randomUsers={randomUsers} setFilteredUsers={setFilteredUsers} searchInput={searchInput} setSearchInput={setSearchInput}/>
            <Listing filteredUsers={filteredUsers}/>
        </>
    );
};

export default Homepage;
