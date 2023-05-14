import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons"
import { faEarth } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function SearchCountries(){
    const[toggleFilter, setToggleFilter] = useState(false);

    function toggleShowAllButton(){
        const toggleShowAll = document.querySelector("#showAllToggle");
        if(toggleShowAll.childNodes[1].classList.contains("showAllButton"))
            toggleShowAll.childNodes[1].classList.remove("showAllButton");
        else
            toggleShowAll.childNodes[1].classList.add("showAllButton");
    }

    return(
        <div className="p-[4%]">
            <label className="bg-white p-5 shadow-md shadow-stone-200 w-[100%] flex rounded-md items-center mt-2">
                <FontAwesomeIcon className="pe-5 text-stone-400" icon={faMagnifyingGlass}/>
                <input type="text" className="focus:outline-none w-[100%] placeholder:text-sm placeholder:text-stone-400" placeholder="Search for a country..."/>
            </label>

            <div className="flex items-center mt-4 justify-between relative flex-wrap">
                <button onClick={() => setToggleFilter(!toggleFilter)} className="p-5 w-[215px] bg-white font-semibold shadow-md shadow-stone-300 flex rounded-md items-center">Filter by region
                    <FontAwesomeIcon className="ps-12" icon={faArrowCircleDown}/>
                </button>

                <p id="showAllToggle" className=" font-semibold flex justify-center flex-wrap w-20">
                    Show all
                    <button onClick={toggleShowAllButton} className="flex h-[24px] w-12 rounded-2xl items-center relative bg-slate-700">
                        <span className="w-[26px] h-[26px] rounded-[50%] bg-slate-200 absolute">
                            <FontAwesomeIcon className=" text-[26px]" icon={faEarth}/>
                        </span>
                    </button>
                </p>

                {toggleFilter? 
                <ul className="p-5 w-[215px] min-h-[160px] absolute bottom-[100%] z-10 rounded-md text-left font-semibold top-[100%] left-0 mt-1 bg-white shadow-md shadow-stone-300 roleFilter">
                    {["Africa","America","Asia","Europe","Oceania"].map((val,i) => {
                        return <li key={i} className="hover:text-stone-500 cursor-pointer">{val}</li>
                    })}
                </ul>
                :
                null}
            </div>

            
        </div>
    )
}