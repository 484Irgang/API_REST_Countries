import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons"
import { faEarth } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function SearchInput(){
    return(
        <label className="bg-white relative shadow-md shadow-stone-200 w-[100%] max-w-sm lg:max-w-lg h-16 flex rounded-md items-center mt-2 md:mt-0">
                <FontAwesomeIcon className="w-6 ps-8 h-6 absolute text-stone-400 z-[1]" icon={faMagnifyingGlass}/>
                <input type="text" className="focus:outline-none focus:z-[2] focus:placeholder:ps-0 px-7 placeholder:ps-12 h-12 w-[100%] absolute placeholder:text-sm placeholder:text-stone-400" placeholder="Search for a country..."/>
        </label>
    )
}

function FilterCountries(){
    const[toggleFilter, setToggleFilter] = useState(false);

    return(
        <div className="relative">
            <button onClick={() => setToggleFilter(!toggleFilter)} className="p-5 w-[215px] bg-white font-semibold shadow-md shadow-stone-300 flex rounded-md items-center">Filter by region
                    <FontAwesomeIcon className="ps-12" icon={faArrowCircleDown}/>
            </button>

            {toggleFilter? 
                <ul className="p-5 w-[215px] min-h-[160px] absolute bottom-[100%] z-10 rounded-md text-left font-semibold top-[100%] left-0 mt-1 bg-white shadow-md shadow-stone-300 roleFilter">
                    {["Africa","America","Asia","Europe","Oceania"].map((val,i) => {
                        return <li key={i} className="hover:text-stone-500 cursor-pointer">{val}</li>
                    })}
                </ul>
            :
            null}
        </div>
    )
}

function ShowAllButton(){
    const [toggleShowAll, setToggleShowAll] = useState(false);

    return(
        <p id="showAllToggle" className=" font-semibold flex justify-center flex-wrap w-20">
            Show all
            <button onClick={() => setToggleShowAll(!toggleShowAll)} className="flex h-[24px] w-[52px] rounded-2xl items-center relative bg-slate-700">
                <span style={{animationName: toggleShowAll? 'activeBg':'desactiveBg'}} className="absolute h-[100%] rounded-2xl bg-green-700 toggleBg"></span>
                <span style={{animationName: toggleShowAll? 'activeShowAll':'desactiveShowAll'}} className="w-[26px] h-[26px] rounded-[50%] bg-slate-200 absolute toggleButton">
                    <FontAwesomeIcon className=" text-[26px]" icon={faEarth}/>
                </span>
            </button>
        </p>
    )
}

export default function SearchCountries(){    

    return(
        <div className="p-[4%] md:flex justify-between">
            <SearchInput/>

            <div className="flex items-center md:w-80 mt-4 md:mt-0 justify-between">
                <FilterCountries/>
                <ShowAllButton/>
            </div>

            
        </div>
    )
}