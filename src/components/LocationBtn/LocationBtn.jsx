import { LocationBtnContainer } from './LocationBtnContainer';
import { IoLocationOutline } from 'react-icons/io5';
import { fetchCurrentLocation } from '../../redux/slices/locationSlice';
import { fetchLocationKey } from '../../redux/slices/locationKeySlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setLocationKey } from '../../redux/slices/locationKeySlice';
import { setLocationName } from '../../redux/slices/locationKeySlice';

export const LocationBtn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const locationLat = useSelector((state) => state.location.coords.lat);
    const locationLng = useSelector((state) => state.location.coords.lng);
    const currentLocationKey = useSelector(
        (state) => state.locationKey.currentLocationKey
    );
    const currentLocationName = useSelector(
        (state) => state.locationKey.currentLocationName
    );

    const setCurrentLocation = () => {
        dispatch(fetchCurrentLocation());
        dispatch(setLocationKey(currentLocationKey));
        dispatch(setLocationName(currentLocationName));
        navigate('/');
    };
    useEffect(() => {
        dispatch(fetchLocationKey({ locationLat, locationLng }));
    }, [locationLat, locationLng]);

    return (
        <LocationBtnContainer onClick={setCurrentLocation}>
            <IoLocationOutline />
        </LocationBtnContainer>
    );
};
