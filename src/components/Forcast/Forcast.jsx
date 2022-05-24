import { ForcastContainer } from './ForcastContainer';
import { CurrentCard } from '../CurrentCard/CurrentCard';
import { DailyForcast } from '../DailyForcast/DailyForcast';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../redux/slices/weatherSlice';
import { fetchDailyForcast } from '../../redux/slices/dailyForcastSlice';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { ForcastErr } from './ForcastErr';

export const Forcast = () => {
    const dispatch = useDispatch();

    const degreeUnit = useSelector((state) => state.degreeUnit.value);
    const locatiton = useSelector((state) => state.location);
    const weather = useSelector((state) => state.weather);
    const dailyForcast = useSelector((state) => state.dailyForcast);
    const locationKey = useSelector((state) => state.locationKey.key);
    const locationName = useSelector((state) => state.locationKey.name);

    useEffect(() => {
        dispatch(fetchWeather({ locationKey }));
        dispatch(fetchDailyForcast({ locationKey, degreeUnit }));
    }, [dispatch, locationKey, degreeUnit]);

    const loading =
        locatiton.status === 'loading' ||
        locationKey.status === 'loading' ||
        weather.status === null ||
        weather.status === 'loading' ||
        dailyForcast.status === 'loading' ||
        dailyForcast.status === null
            ? true
            : false;

    const error =
        weather.status === 'rejected' || dailyForcast.status === 'rejected'
            ? true
            : false;
    return (
        <>
            {loading ? (
                <LoadingSpinner></LoadingSpinner>
            ) : error ? (
                <ForcastErr>Error on Server</ForcastErr>
            ) : (
                <ForcastContainer>
                    <CurrentCard
                        weather={weather}
                        locationName={locationName}
                        locationKey={locationKey}
                    ></CurrentCard>
                    <DailyForcast dailyForcast={dailyForcast}></DailyForcast>
                </ForcastContainer>
            )}
        </>
    );
};
