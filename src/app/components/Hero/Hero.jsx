import React from 'react';
import { HeroContainer, SearchBox, SearchForm, SearchIcon, Title, UnderTitle } from './Hero.styled';
import SearchSVG from 'Public/icons/seach.svg';

const Hero = (props) => {
    const {randomUsers, filteredUsers, setFilteredUsers, searchInput, setSearchInput} = props

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
        console.log("searchInput", searchInput)

        const newFilteredUsers = randomUsers.filter(user => user.name.first.toLowerCase().includes(e.target.value) || user.name.last.toLowerCase().includes(e.target.value))
        setFilteredUsers([...newFilteredUsers])
        console.log("newFilteredUsers", newFilteredUsers)
    }

    return(
        <HeroContainer>
            <Title>Find a member of staff</Title>
            <UnderTitle>Use the search box to get started</UnderTitle>
            <SearchForm>
                <SearchIcon/>
                <SearchBox  placeholder='Start typing...'  value={searchInput} onChange={(e) => handleChange(e)}></SearchBox>
            </SearchForm>
        </HeroContainer>
    )
};

export default Hero;