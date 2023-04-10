import styled from 'styled-components';
import { Link } from "react-router-dom";

export const List = styled.ul`
    background: #dbe3ff;
    padding: 5rem;

`;

export const ListItem = styled.li`
    height: 3.4rem
    list-style: none
    border: 1px solid black
    border-radius: 5px
    margin: 1rem
    background-color: white
`;

export const Thumbnail = styled.img`
    border-radius: 50%
`;

export const ProfileLink = styled(Link)`
    text-decoration: none
    color: black
`;