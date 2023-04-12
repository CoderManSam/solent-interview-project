import React from 'react';

import styled from 'styled-components';
import backgroundImageURL from 'Public/images/background.jpg';
import SearchSVG from 'Public/icons/seach.svg';

export const HeroContainer = styled.div`
    background: url(${backgroundImageURL});
    height: auto;
    padding: 195px 24% 70px 
    background-size: cover;
`;

export const Title = styled.h1`
    color: white
    margin: 0;
    font-size: 112px;
`;

export const UnderTitle = styled.h2`
    color: white
    margin: 0 0 60px 0;
    font-size: 34px;
`;

export const SearchForm = styled.form`
    position: relative;
    padding: 0 30px;
    background: white;
    border-radius: 8px;
`;

export const SearchBox = styled.input`
    padding: 15px 0;
    outline: 0;
    border: 0;
    width: 100%;
    font-size: 36px;
`;

export const SearchIcon = styled(SearchSVG)`
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
`;