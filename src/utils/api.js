export const CURRENT_LOCATION_BASE_URL =
    'https://dataservice.accuweather.com/currentconditions/v1/';

export const AUTOCOMPLETE_BASE_URL =
    'https://dataservice.accuweather.com/locations/v1/cities/autocomplete/';

export const DAILYFORCAST_BASE_URL =
    'https://dataservice.accuweather.com/forecasts/v1/daily/5day/';

export const LOCATIONKEY_BASE_URL =
    'https://dataservice.accuweather.com/locations/v1/cities/geoposition/search';

export const LOCATION_BY_IP_BASE_URL =
    'https://api.ipstack.com/check?access_key=';

export const LOCATION_KEY =
    process.env.REACT_APP_LOCATION_BY_IP_BASE_URL_API_KEY;

export const ACUWEATHER_KEY = process.env.REACT_APP_ACU_WEATHER_API_KEY;
