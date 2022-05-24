import styled from 'styled-components';

export const CurrentCardImg = styled.img.attrs((props) => ({
    src: `https://developer.accuweather.com/sites/default/files/${
        props.iconNum < 10 ? `0` + props.iconNum : props.iconNum
    }-s.png`,
}))`
    max-height: 45px;
    margin-right: -20px;
`;
