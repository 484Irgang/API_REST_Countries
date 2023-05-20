import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function CountryDetail({setCountry,country}){
    const countryDetail = country[0];
    const countryBorders = country.filter((country, i) => {
        return i != 0;
    });

    let currenciesCountry = [];
    let countryLanguage = [];

    for(var key in countryDetail.currencies){
        currenciesCountry = [...currenciesCountry, countryDetail.currencies[key]];
    }
    for(var key in countryDetail.languages){
        countryLanguage = [...countryLanguage, countryDetail.languages[key]];
    }
    return(
        <article className="w-[100%] min-h-full px-[4%] pt-[5%] pb-[3%] absolute dark:bg-very-dark-blue-bg bg-very-light-gray">
            <button onClick={() => {setCountry([])}} className=" dark:text-very-light-gray px-8 py-3 shadow-md dark:bg-dark-blue dark:shadow-very-dark-blue-bg shadow-stone-300 rounded-md dark:hover:bg-dark-gray hover:bg-stone-100 transition">
                <FontAwesomeIcon className="me-2" icon={faArrowLeftLong}/>
                Back
            </button>

            <div className="w-[100%] mt-12 flex flex-wrap items-center justify-between">
                <img src={countryDetail.flags.svg} className="md:w-[45%] aspect-[16/10] object-cover shadow-md dark:shadow-very-dark-blue-bg shadow-stone-200"/>
                <div className="w-full md:w-[50%] p-[2%] flex flex-wrap flex-col dark:text-very-light-gray">
                    <h3 className="text-3xl mt-6 dark:text-white text-dark-blue">{countryDetail.name.common}</h3>

                    <div className=" mt-6 md:mt-[2%] w-full flex flex-wrap justify-between items-top">
                        <ul className=" w-full lg:w-[50%]">
                            <p className="mt-1"><span>Native Name: </span>{countryDetail.altSpellings[1]}</p>
                            <p className="mt-1"><span>Population: </span>{countryDetail.population}</p>
                            <p className="mt-1"><span>Region: </span>{countryDetail.region}</p>
                            <p className="mt-1"><span>Sub Region: </span>{countryDetail.subregion}</p>
                            <p className="mt-1"><span>Capital: </span>{countryDetail.capital? countryDetail.capital:"Capital not founded"}</p>
                        </ul>
                        <ul className="w-full lg:w-[45%] mt-8 lg:mt-0">
                            <p className="mt-1"><span>Top Level Domain: </span>{countryDetail.tld[0]}</p>
                            <p className="mt-1"><span>Currences: </span>{currenciesCountry[0].name+" ("+currenciesCountry[0].symbol+")"}</p>
                            <p className="mt-1"><span>Languages: </span>{countryLanguage.map((lang, i) => {
                               return i === countryLanguage.length-1? lang:lang+", ";
                            })}</p>
                        </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center">
                        <h3 className=" text-lg font-semibold me-2">Borders countries: </h3>
                        <div className=" flex flex-wrap ">
                            {
                                countryBorders.length > 0?
                                countryBorders.map((country, i) => {
                                    return <button onClick={() => setCountry(country)} key={i} className="mx-1 mt-1 py-2 px-4 rounded-sm shadow-md dark:bg-dark-blue dark:shadow-very-dark-blue-bg dark:hover:bg-dark-gray shadow-stone-400 hover:bg-stone-100 transition">{country.name.common}</button>
                                })
                                :
                                <p className="text-lg"> No border countries</p>
                            }
                        </div>    
                    </div>
                </div>
            </div>
        </article>
    )
}