import styled from 'styled-components';
import { Link } from "react-router-dom";
import CircleArrowSVG from 'Public/icons/circle-arrow.svg';

export const ListingContainer = styled.main`
    background: #ECECEC;
    padding: 75px 24% 225px 
    margin: 0;
    text-align: center;
    @media (max-width: 860px) {
        zoom: 0.4
    };
`;

export const List = styled.ul`
    padding: 0
`;

export const ProfileLink = styled(Link)`
    text-decoration: none
    color: black
`;

export const ListItem = styled.li`
    height: 5.2rem
    list-style: none
    border: 2px solid black
    border-radius: 5px
    margin-bottom: 1.4rem
    background-color: white
    &:hover {
        border: 2px solid #66FF99;
    }
    display: flex;
    align-items: center;
    padding: 2px 15px
    font-size: 23px
`;

export const UserImage = styled.img`
    border-radius: 50%
    border: 2px solid black
`;

export const UsersName = styled.p`
    padding-left: 10px
`;

export const CircleArrowIcon = styled(CircleArrowSVG)`
    margin-left:auto
    padding-right: 8px
`;

export const ErrorMessage = styled.strong`
    font-size: 32px
`; 