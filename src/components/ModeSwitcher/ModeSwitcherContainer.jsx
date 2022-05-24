import styled from 'styled-components';

export const ModeSwitcherContainer = styled.div`
    cursor: pointer;
    font-size: var(--fs-dsvbg);
    display: flex;

    @media (max-width: 630px) {
        font-size: var(--fs-mvbg);
    } ;
`;
