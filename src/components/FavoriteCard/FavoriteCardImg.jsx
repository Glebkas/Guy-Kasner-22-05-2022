import styled from 'styled-components';

export const FavoriteCardImg = styled.img.attrs((props) => ({
    src: `https://developer.accuweather.com/sites/default/files/${
        props.iconNum < 10 ? `0` + props.iconNum : props.iconNum
    }-s.png`,
}))`
  
    max-height: 45px;
    margin: 1rem auto;
`;
