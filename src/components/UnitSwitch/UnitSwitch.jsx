import { UnitSwitchContainer } from './UnitSwitchContainer';
import { WiCelsius, WiFahrenheit } from 'react-icons/wi';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDegreeUnit } from '../../redux/slices/degreeUnitSlice';

export const UnitSwitch = () => {
    const dispacth = useDispatch();
    const degreeUnit = useSelector((state) => state.degreeUnit.value);
    const handleSwitchUnitClick = () => {
        dispacth(toggleDegreeUnit());
    };

    return (
        <UnitSwitchContainer onClick={handleSwitchUnitClick}>
            {degreeUnit ? <WiCelsius /> : <WiFahrenheit />}
        </UnitSwitchContainer>
    );
};
