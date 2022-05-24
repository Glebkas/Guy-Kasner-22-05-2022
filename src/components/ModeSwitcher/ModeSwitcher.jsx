import { ModeSwitcherContainer } from './ModeSwitcherContainer';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import { useState, useEffect } from 'react';
export const ModeSwitcher = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ModeSwitcherContainer onClick={toggleTheme}>
            {theme === 'light' ? <IoMoonOutline /> : <IoMoon />}
        </ModeSwitcherContainer>
    );
};
