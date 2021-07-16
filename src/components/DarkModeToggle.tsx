import useDarkMode from 'use-dark-mode';
import './DarkModeToggle.css';
import '../App.css';
export default function DarkModeToggle() {
    const darkMode = useDarkMode(true, { classNameDark: 'dark', classNameLight: 'light' })
    return (
        <div>
            <button id="togglebutton" onClick={() => {
                darkMode.toggle();
            }}> Toggle theme </button>
        </div>
    )
}
