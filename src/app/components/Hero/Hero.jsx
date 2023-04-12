import React from 'react';
import { HeroContainer, ProfilePageHeroContainer, SearchBox, SearchForm, SearchIcon, Title, UnderTitle } from './Hero.styled';

const Hero = (props) => {
    const {randomUsers, setFilteredUsers, searchInput, setSearchInput} = props

    const handleChange = (e) => {
        e.preventDefault()

        setSearchInput(e.target.value)

        const newFilteredUsers = randomUsers.filter(user => user.name.first.toLowerCase().includes(e.target.value) || user.name.last.toLowerCase().includes(e.target.value))
        setFilteredUsers([...newFilteredUsers])
    }

    return(
        <>
            {randomUsers ? 
                (
                    <HeroContainer>

                        <Title>Find a member of staff</Title>

                        <UnderTitle>Use the search box to get started</UnderTitle>

                        <SearchForm>

                            <SearchIcon/>
                            <SearchBox  placeholder='Start typing...'  value={searchInput} onChange={(e) => handleChange(e)}></SearchBox>
                            
                        </SearchForm>

                    </HeroContainer>
                )
                :
                (
                    <ProfilePageHeroContainer>

                        <Title>Find a member of staff</Title>

                        <UnderTitle>Use the search box to get started</UnderTitle>

                        <SearchForm>
                            
                            <SearchIcon/>
                            <SearchBox disabled placeholder='Start typing...'/>
                            
                        </SearchForm>

                    </ProfilePageHeroContainer>
                )
            }
        </>   
    )
};

export default Hero;