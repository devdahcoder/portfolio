import React from 'react';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { useThemeContainer } from '../state/theme'
import IconButton from './IconButton';


type Props = {
}

const ThemeToggleButton = (props: Props) => {

  const { handleThemeToggle, theme } = useThemeContainer();

  const whatTheme = theme === 'light' ? 'light' : 'dark';

  const iconClassName = ""

  return (
    <div className="">
        <IconButton 
            containerClassName="border rounded-full" 
            className={`p-2 small-sm:p-3 bg-black dark:bg-white transition-all duration-500 ease-linear rounded-full`} 
            icon={
                whatTheme === 'light' ? 
                <BsFillMoonStarsFill className={`text-white w-3 h-3 small-sm:w-5 small-sm:h-5 ${whatTheme === 'light' ? "visible opacity-100 scale-100" : "opacity-0 scale-0 invisible"} transition-all delay-300 ease-in-out`} /> : 
                <BsSunFill className={`text-black w-3 h-3 small-sm:w-5 small-sm:h-5 ${whatTheme === 'dark' ? "visible opacity-100 scale-100" : "opacity-0 scale-0 invisible"} transition-all delay-300 ease-in-out`} />
            } 
            handleClick={() => handleThemeToggle(theme)}
        />
    </div>
  )
}

export default ThemeToggleButton