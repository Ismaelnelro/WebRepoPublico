import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi'

/*Styles*/
import '../../styles/lightmode.css'

export const LightMode = () => {

    const [theme, settheme] = useState('dark');

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }

    }, [theme])

    const handdleThemeSwitch = () => {
        settheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div className={`lightmode__container`}>
            <div className={`lightmode dark:bg-[#84b4ac] bg-slate-200`}
                onClick={handdleThemeSwitch}>
                <FiSun size={17} color={`${theme === 'dark' ? "#84b4ac" : "#84b4ac"}`} />
                <FiMoon size={17} color={`${theme === 'dark' ? "#e7e5e4" : "#e7e5e4"}`} />
            </div>
        </div>
    )
}


