import styled from 'styled-components';

export const DailyForcatContainer = styled.div`
    border-radius: var(--radii);
    background-color: var(--colors-ui-base);
    display: flex;
    max-width: 750px;
    width: 100%;
    height: 195px;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    box-shadow: var(--shadow);


    @media (max-width: 700px) {
        overflow: scroll;
    } ;
`;
