import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const HeaderTitleContainer = styled(Link).attrs({
    to: '/',
})`
    display: flex;
    color: var(--colors-text);

    align-items: center;
    cursor: pointer;
    text-decoration: none;
`;
