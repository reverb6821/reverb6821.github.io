"use client";
import * as React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { toggleMode } from "@/redux/reducer/theme.reducer";
import { RootState } from "@/redux/store";

const ThemeSwitcher = () => {
    const isThemeDark = useSelector((content: RootState) => content.theme.isThemeDark) || null;
    const dispatch = useDispatch();
    const toggleModeHandler = () => {dispatch(toggleMode());};

    return(
        <React.Fragment>
             <button 
                type="button"
                className="rounded focus:outline-none text-yellow-500 dark:text-yellow-500 text-sm"
                onClick={toggleModeHandler}
            >
                {isThemeDark === true ? (<i className="ri-moon-line"/>): (<i className="ri-sun-line"/>)}
            </button>
        </React.Fragment>
    )
}

export default ThemeSwitcher