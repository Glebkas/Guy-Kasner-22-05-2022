import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FavNavBtnContainer = styled(Link).attrs({
    to: '/fav',
})`
    color: var(--colors-text);
    cursor: pointer;
    font-size: var(--fs-dsvbg);
    display: flex;
    
    @media (max-width: 630px) {
        font-size: var(--fs-mvbg);
    } ;
`;
