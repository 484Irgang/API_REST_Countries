import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarth, faRocket } from "@fortawesome/free-solid-svg-icons"

export default function Loader(){
    return(
        <div className=" w-20 h-20 mt-[10%] mx-auto flex justify-center items-center relative">
                <span className=" w-12 h-12 rounded-[50%] bg-green-900 animate-pulse absolute z-10">
                    <FontAwesomeIcon className=" text-blue-950 text-5xl" icon={faEarth}/>
                </span>

                <span className="w-20 h-20 absolute animate-spin">
                    <FontAwesomeIcon className=" text-xl text-gray-600" icon={faRocket}/>
                </span>
        </div>
    )
}