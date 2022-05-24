import styled from 'styled-components';

export const LocationBtnContainer = styled.div`
    color: var(--colors-text);
    cursor: pointer;
    font-size: var(--fs-dsvbg);
    display: flex;

    @media (max-width: 630px) {
        font-size: var(--fs-mvbg);
    } ;
`;
