import styled from 'styled-components';
import logo from '../../images/Header-logo.svg';

export const HeaderLogo = styled.img.attrs({
    src: `${logo}`,
})`
    width: 50px;
    height: 50px;

    @media (max-width: 630px){
        width: 40px;
        height: 40px;
    };
`;
