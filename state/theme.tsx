import { useState, useEffect } from 'react';
import { createContainer, useContainer } from 'unstated-next';

type ThemeType = {
    theme: string
    handleThemeToggle: (theme: string) => void;
}

export const themeState = {
    theme: 'light',
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
            else {
                setTheme('light');
            }
        }

        return () => {
            isSubscribed = false;
        }
    }, [])
    

    useEffect(() => {
        // if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        //     document.documentElement.classList.add('dark');
        //     // setTheme('dark');
        // } else {
        //     document.documentElement.classList.remove('dark');
        //     // setTheme('light');
        // }
        // const getLocalStorageTheme = localStorage.getItem('theme');
        // if (getLocalStorageTheme) {
        //     setTheme(getLocalStorageTheme);
        // } else {
        //     setTheme('light');
        // }
        localStorage.setItem('theme', `${theme}`);

        if (localStorage.theme === 'dark') {
            window.document.documentElement.classList.add('dark');
        } else {
            window.document.documentElement.classList.remove('dark');
        }

    }, [theme])
    

    // useEffect(() => {
    //     localStorage.setItem('theme', JSON.stringify(theme));

    //     if (localStorage.theme === 'dark') {
    //         document.documentElement.classList.add('dark');
    //         // setTheme('dark');
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //         // setTheme('light');
    //     }
    //     console.log('inside is inside');
    // }, [theme])

    return {
        theme,
        handleThemeToggle,
    }
};

export const ThemeContainer = createContainer(useThemeState);

export const useThemeContainer = () => {
    return ThemeContainer.useContainer();
}