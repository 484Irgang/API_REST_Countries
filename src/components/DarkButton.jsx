import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-regular-svg-icons"

export default function DarkButton(){
    function toggleDarkMode(){
        const html = document.children[0];
        if(html.classList.contains("dark"))
            html.classList.remove("dark");
        else{
            html.classList.add("dark");
        }
    }
    return(
        <div className="cursor-pointer">
            <FontAwesomeIcon className="text-lg" icon={faMoon}/>
            <span className="ps-2 font-semibold" onClick={toggleDarkMode}>Dark mode</span>
        </div>
    )
}