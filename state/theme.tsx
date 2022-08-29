import { useState, useEffect } from 'react';
import { createContainer, useContainer } from 'unstated-next';

type ThemeType = {
    theme: string
    handleThemeToggle: (theme: string) => void;
}

export const themeState = {
    theme: '',
    handleThemeToggle: (theme: string) => {},
}

const useThemeState = (state = themeState): ThemeType => {
    
    const [theme, setTheme] = useState<string>('');

    const handleThemeToggle = (theme: string) => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        let isSubscribed = true;

        if (isSubscribed) {
            const getLocalStorageTheme = localStorage.getItem('theme');
            if (getLocalStorageTheme) {
                setTheme(getLocalStorageTheme);
            }
            else if (!getLocalStorageTheme) {
                setTheme('light');
            }
        }

        return () => {
            isSubscribed = false;
        }
    }, [])
    
    useEffect(() => {

        localStorage.setItem('theme', `${theme}`);

        if (localStorage.theme === 'dark') {
            window.document.documentElement.classList.add('dark');
        } else {
            window.document.documentElement.classList.remove('dark');
        }

    }, [theme])

    return {
        theme,
        handleThemeToggle,
    }
};

export const ThemeContainer = createContainer(useThemeState);

export const useThemeContainer = () => {
    return ThemeContainer.useContainer();
}