import { SearchContainer } from './SearchContainer';
import { SearchInput } from './SearchInput';
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAutocomplete } from '../../redux/slices/autocompleteLocationSlice';
import { resetAutocomplete } from '../../redux/slices/autocompleteLocationSlice';
import { setLocationKey } from '../../redux/slices/locationKeySlice';
import { setLocationName } from '../../redux/slices/locationKeySlice';

export const Search = () => {
    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 1000);
        };
    };

    const dispatch = useDispatch();
    const locations = useSelector((state) => state.autoComplete);
    const [selectedValue, setSelectedValue] = useState(null);

    const handleChange = (value) => {
        setSelectedValue(value);
        if (value !== null) {
            dispatch(setLocationKey(value.Key));
            dispatch(setLocationName(value.LocalizedName));
        } else {
            dispatch(resetAutocomplete());
        }
    };

    const handleInputChange = (value) => {
        if (value.length !== 0) {
            dispatch(fetchAutocomplete(value));
        }
    };
    const optimizeSearch = useCallback(debounce(handleInputChange), []);

    return (
        <>
            <SearchContainer>
                <SearchInput
                    options={locations.data}
                    placeholder='Search for location'
                    cacheOptions
                    getOptionLabel={(e) => e.LocalizedName}
                    getOptionValue={(e) => e.Key}
                    isClearable
                    isSearchable={true}
                    value={selectedValue}
                    onChange={handleChange}
                    onInputChange={optimizeSearch}
                ></SearchInput>
            </SearchContainer>
        </>
    );
};
