import styled from 'styled-components';

export const FavoritesList = styled.ul`
    list-style-type: none;
    padding: 0;
    list-style: none;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, minmax(100px, 280px));
    max-width: 900px;
    gap: 17px;
    align-items: center;
    margin: 0 auto 0 auto;
    justify-items: center;

    @media (max-width: 880px) {
        grid-template-columns: repeat(3, minmax(100px, 280px));
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(2, minmax(100px, 280px));
    }
`;
