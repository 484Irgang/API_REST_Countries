import { useState } from 'react';
import iconNight from './assets/icon-night.svg'

export default function DarkButton(){
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode(value){
        setDarkMode(value);
        const html = document.children[0];
        return value? html.classList.add("dark"):html.classList.remove("dark");
    }
    return(
            <button onClick={() => toggleDarkMode(!darkMode)} style={{animationName: darkMode? "applyBgDark":"applyBgLight"}} className="flex h-[24px] w-[52px] rounded-2xl items-center relative darkModeBg">
                <span style={{animationName: darkMode? "applyDark":"applyLight"}} className="w-[26px] h-[26px] rounded-[50%] absolute darkMode"></span>
            </button>
    )
}