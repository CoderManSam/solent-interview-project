import React from 'react';
import { HeroContainer, SearchBox, SearchForm, SearchIcon, Title, UnderTitle } from './Hero.styled';

const Hero = (props) => {
    const {randomUsers, setFilteredUsers, searchInput, setSearchInput} = props

    const handleChange = (e) => {
        e.preventDefault()

        setSearchInput(e.target.value)

        const newFilteredUsers = randomUsers.filter(user => user.name.first.toLowerCase().includes(e.target.value) || user.name.last.toLowerCase().includes(e.target.value))
        setFilteredUsers([...newFilteredUsers])
    }

    return(
        <HeroContainer>
            <Title>Find a member of staff</Title>
            <UnderTitle>Use the search box to get started</UnderTitle>
            <SearchForm>
                <SearchIcon/>
                {randomUsers ? 
                    (<SearchBox  placeholder='Start typing...'  value={searchInput} onChange={(e) => handleChange(e)}></SearchBox>) 
                    : 
                    (<SearchBox disabled placeholder='Start typing...'/>)
                }
                
            </SearchForm>
        </HeroContainer>
    )
};

export default Hero;