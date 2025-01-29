'use client'

import * as React from 'react'
import useThemeStore from '@/store/useThemeStore';
import { applyThemePreference } from '@/utils/themeUtils'
import * as motion from 'motion/react-client'
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
            <motion.button
                type="button"
                className="focus:outline-none text-color-primary hover:text-color-secondary"
                onClick={toggleTheme}
                whileHover={{
                    scaleX: [1, 1.1, 0.95, 1],
                    scaleY: [1, 0.9, 1.05, 1]
                }}
                whileTap={{ scale: 0.8 }}
            >
                {theme === 'dark' ? <CiSun size={25} /> : <IoMoonOutline size={25} />}
            </motion.button>
        </React.Fragment>
    )
}

export default ThemeSwitcher