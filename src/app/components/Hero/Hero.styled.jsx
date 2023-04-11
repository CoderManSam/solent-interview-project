import React from 'react';

import styled from 'styled-components';
import backgroundImageURL from 'Public/images/background.jpg';
import SearchSVG from 'Public/icons/seach.svg';

export const HeroContainer = styled.div`
    background: #dbe3ff;
    background-image: url(${backgroundImageURL})
    height: auto;
    padding: 150px 20%;
    background-size: cover;
`;

export const Title = styled.h1`
    color: white
    margin: 0;
    font-size: 70px;
`;

export const UnderTitle = styled.h2`
    color: white
    margin: 0 0 25px 0;
`;

export const SearchForm = styled.form`
    position: relative;
    padding: 0 30px;
    background: white;
`;

export const SearchBox = styled.input`
    padding: 20px 0;
    outline: 0;
    border: 0;
    width: 100%;
`;

export const SearchIcon = styled(SearchSVG)`
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
`;