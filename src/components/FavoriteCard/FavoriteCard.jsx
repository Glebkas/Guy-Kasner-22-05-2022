import { FavoriteCardBody } from './FavoriteCardBody';
import { FavoriteCardImg } from './FavoriteCardImg';
import { FavoriteCardSubtitle } from './FavoriteCardSubtitle';
import { FavoriteCardTemp } from './FavoriteCardTemp';
import { FavoriteCardTitle } from './FavoriteCardTitle';
import { FavoriteCardWrapper } from './FavoriteCardWrapper';
import { useNavigate } from 'react-router-dom';
import { setLocationKey } from '../../redux/slices/locationKeySlice';
import { useDispatch } from 'react-redux';
import { setLocationName } from '../../redux/slices/locationKeySlice';

export const FavoriteCard = ({
    name,
    temp,
    weatherDescription,
    iconNum,
    id,
}) => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleFavCardClick = () => {
        navigate('/');
        dispatch(setLocationKey(id));
        dispatch(setLocationName(name));
    };
    return (
        <FavoriteCardWrapper onClick={handleFavCardClick}>
            <FavoriteCardBody>
                <FavoriteCardTitle>{name}</FavoriteCardTitle>
                <FavoriteCardImg iconNum={iconNum}></FavoriteCardImg>
                <FavoriteCardTemp>{temp}°</FavoriteCardTemp>
                <FavoriteCardSubtitle>
                    {weatherDescription}
                </FavoriteCardSubtitle>
            </FavoriteCardBody>
        </FavoriteCardWrapper>
    );
};
