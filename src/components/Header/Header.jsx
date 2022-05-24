import { HeaderContainer } from './HeaderContainer';
import { HeaderEl } from './HeaderEl';
import { HeaderLogo } from './HeaderLogo';
import { HeaderTitle } from './HeaderTitle';
import { HeaderWrapper } from './HeaderWrapper';
import { HeaderTitleContainer } from './HeaderTitleContainer';
import { ModeSwitcher } from '../ModeSwitcher/ModeSwitcher';
import { HeaderControlsContainer } from './HeaderControlsContainer';
import { FavNavBtn } from '../FavNavBtn/FavNavBtn';
import { LocationBtn } from '../LocationBtn/LocationBtn';

export const Header = () => {
    return (
        <HeaderEl>
            <HeaderContainer>
                <HeaderWrapper>
                    <HeaderTitleContainer>
                        <HeaderLogo />
                        <HeaderTitle>Weather App</HeaderTitle>
                    </HeaderTitleContainer>

                    <HeaderControlsContainer>
                        <FavNavBtn />
                        <LocationBtn />
                        <ModeSwitcher />
                    </HeaderControlsContainer>
                </HeaderWrapper>
            </HeaderContainer>
        </HeaderEl>
    );
};
