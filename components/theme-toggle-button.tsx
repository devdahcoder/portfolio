import React from 'react';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { useThemeContainer } from '../state/theme'
import IconButton from './IconButton';


type Props = {
}

const ThemeToggleButton = (props: Props) => {

  const { handleThemeToggle, theme } = useThemeContainer();

  const whatTheme = theme === 'light' ? 'light' : 'dark';

  return (
    <div className="">
        <IconButton 
            containerClassName="border rounded-full" 
            className={`p-3 bg-black dark:bg-white transition-all duration-500 ease-linear rounded-full`} 
            icon={
                whatTheme === 'light' ? 
                <BsFillMoonStarsFill className={`text-white ${whatTheme === 'light' ? "visible opacity-100 scale-100" : "opacity-0 scale-0 invisible"} transition-all delay-300 ease-in-out`} /> : 
                <BsSunFill className={`text-black ${whatTheme === 'dark' ? "visible opacity-100 scale-100" : "opacity-0 scale-0 invisible"} transition-all delay-300 ease-in-out`} />
            } 
            handleClick={() => handleThemeToggle(theme)}
        />
    </div>
  )
}

export default ThemeToggleButton