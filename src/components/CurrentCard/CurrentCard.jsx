import { CurrentCardBody } from './CurrentCardBody';
import { CurrentCardTop } from './CurrentCardTop';
import { CurrentCardWrapper } from './CurrentCardWrapper';
import { CurrentCardTemp } from './CurrentCardTemp';
import { CurrentCardImg } from './CurrentCardImg';
import { CurrentCardTitle } from './CurrentCardTitle';
import { CurrentCardSubtitle } from './CurrentCardSubtitle';
import { CurrentCardBtn } from './CurrentCardBtn';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../redux/slices/favoriteLocationsSlice';
import { removeFromFavorites } from '../../redux/slices/favoriteLocationsSlice';
import { UnitSwitch } from '../UnitSwitch/UnitSwitch';
import { useSelector } from 'react-redux';

export const CurrentCard = ({ weather, locationName, locationKey }) => {
    const dispatch = useDispatch();
    const favoriteLocations = useSelector(
        (state) => state.favoriteLocations.favorites
    );
    const degreeUnit = useSelector((state) => state.degreeUnit.value);

    const currentTempC = weather.data.Temperature.Metric.Value;
    const currentTempF = weather.data.Temperature.Imperial.Value;
    const weatherDescription = weather.data.WeatherText;
    const iconNum = weather.data.WeatherIcon;

    const handleClick = () => {
        if (favoriteLocations.find((obj) => obj.id === locationKey)) {
            dispatch(removeFromFavorites(locationKey));
        } else {
            dispatch(
                addToFavorites({
                    name: locationName,
                    temp: degreeUnit ? currentTempC : currentTempF,
                    id: locationKey,
                    iconNum: iconNum,
                    weatherDescription: weatherDescription,
                })
            );
        }
    };

    return (
        <CurrentCardWrapper>
            <CurrentCardBtn onClick={handleClick}>
                {favoriteLocations.find((obj) => obj.id === locationKey) ? (
                    <IoHeartSharp />
                ) : (
                    <IoHeartOutline />
                )}
            </CurrentCardBtn>
            <UnitSwitch></UnitSwitch>
            <CurrentCardBody>
                <CurrentCardTop>
                    <CurrentCardTemp>
                        {degreeUnit ? currentTempC : currentTempF}°
                    </CurrentCardTemp>
                    <CurrentCardImg iconNum={iconNum}></CurrentCardImg>
                </CurrentCardTop>
                <CurrentCardTitle>{locationName}</CurrentCardTitle>
                <CurrentCardSubtitle>{weatherDescription}</CurrentCardSubtitle>
            </CurrentCardBody>
        </CurrentCardWrapper>
    );
};
