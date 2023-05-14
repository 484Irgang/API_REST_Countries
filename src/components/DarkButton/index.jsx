import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-regular-svg-icons"

export default function DarkButton(){
    function toggleDarkMode(){
        const body = document.body;
        if(body.classList.contains("dark"))
            body.classList.remove("dark");
        else{
            body.classList.add("dark");
        }
    }
    return(
        <div className="cursor-pointer">
            <FontAwesomeIcon className="text-lg" icon={faMoon}/>
            <span className="ps-2 font-semibold" onClick={toggleDarkMode}>Dark mode</span>
        </div>
    )
}