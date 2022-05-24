import { MainEl } from './MainEl';
import { MainContainer } from './MainContainer';

export const Main = ({ children }) => {
    return (
        <MainEl>
            <MainContainer>{children}</MainContainer>
        </MainEl>
    );
};
