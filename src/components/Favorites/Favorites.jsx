import { FavoritesList } from './FavoritesList';
import { FavoriteCard } from '../FavoriteCard/FavoriteCard';
import { useSelector } from 'react-redux';
import {FavorietsMsg} from './FavorietsMsg'

export const Favorites = () => {
    const favorites = useSelector((state) => state.favoriteLocations.favorites);

    return (
        <>
            {favorites.length === 0 ? (
                <FavorietsMsg>No favorite locations yet</FavorietsMsg>
            ) : (
                <FavoritesList>
                    {favorites.map((favLoc) => (
                        <FavoriteCard
                            key={favLoc.id}
                            id={favLoc.id}
                            name={favLoc.name}
                            temp={favLoc.temp}
                            weatherDescription={favLoc.weatherDescription}
                            iconNum={favLoc.iconNum}
                        ></FavoriteCard>
                    ))}
                </FavoritesList>
            )}
        </>
    );
};
