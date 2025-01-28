'use client'

import * as React from 'react'
import useThemeStore from '@/store/useThemeStore';
import { applyThemePreference } from '@/utils/themeUtils';
import { CiSun } from 'react-icons/ci'
import { IoMoonOutline } from 'react-icons/io5'

const ThemeSwitcher: React.FC = () => {
    const toggleTheme = useThemeStore((state) => state.toggleTheme);
    const theme = useThemeStore((state) => state.theme);

    React.useEffect(() => {
        applyThemePreference(theme);
      }, [theme]);
    

    return (
        <React.Fragment>
            <button
                type="button"
                className="rounded focus:outline-none"
                onClick={toggleTheme}
            >
                {theme === 'dark' ? <CiSun size={25} /> : <IoMoonOutline size={25} />}
            </button>
        </React.Fragment>
    )
}

export default ThemeSwitcher