import styled from 'styled-components';
import backgroundImageURL from 'Public/images/background.jpg';
import worldImageURL from 'Public/images/world.png';


export const HeroContainer = styled.div`
    height: 40vh
    background: #dbe3ff;
    background-image: url(${worldImageURL})
    padding: 5rem;
`;

export const Title = styled.h1`
    color: white
`;

export const UnderTitle = styled.h2`
    color: white
`;

export const Image = styled.img`
`;