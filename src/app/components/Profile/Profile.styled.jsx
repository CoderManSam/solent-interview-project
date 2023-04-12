import styled from 'styled-components';

export const ProfileContainer = styled.main`
    background: #ECECEC;
    padding: 5rem 24%;
    display: flex;
    flex-direction: column
    align-items: center
    @media (max-width: 540px) {
        zoom: 0.7
    };
`;

export const ProfileIdentification = styled.section`
    display: flex;
    flex-direction: column
    align-items: center
    padding: 30px
`;

export const ProfileInformation = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 370px;   
    @media (max-width: 1230px) {
        flex-direction: column;
    };
`;

export const Avatar = styled.img`
    border-radius: 50%
    width: 180px;
    height: auto
    padding: 17px
    background: white
    border: 1px solid rgba(0, 0, 0, 0.25)
`;

export const ProfileUsersName = styled.p`
    font-size: 48px;
    text-align: center;
    color: rgba(0, 0, 0, 0.65);
    margin: 0;
    padding: 8px
`;

export const Email = styled.div`
    display: flex;
    gap: 10px
    font-size: 24px;
    color: rgba(0, 0, 0, 0.65);
    @media (max-width: 1230px) {
        flex-direction: column;
        align-items: center;
        padding-bottom: 30px;
    };
`;

export const Dob = styled.div`
    display: flex;
    gap: 10px
    font-size: 24px;
    color: rgba(0, 0, 0, 0.65);
    @media (max-width: 1230px) {
        flex-direction: column;
        align-items: center;
        padding-bottom: 30px;
    };
`;

export const Phone = styled.div`
    display: flex;
    gap: 10px
    font-size: 24px;
    color: rgba(0, 0, 0, 0.65);
    @media (max-width: 1230px) {
        flex-direction: column;
        align-items: center;
    };
`;