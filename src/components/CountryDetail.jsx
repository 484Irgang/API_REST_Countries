import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function CountryDetail({country}){
    const countryDetail = country[0];
    let currenciesCountry = [];
    for(var key in countryDetail.currencies){
        currenciesCountry = [...currenciesCountry, countryDetail.currencies[key]];
    }
    return(
        <article className="w-[100%] min-h-full px-[4%] pt-[5%] bg-red-900 absolute">
            <button className=" px-8 py-3 shadow-md shadow-stone-300 rounded-md">
                <FontAwesomeIcon icon={faArrowLeftLong}/>
                Back
            </button>

            <div className="w-[100%] mt-12 flex flex-wrap items-center justify-between bg-blue-900">
                <img src={countryDetail.flags.svg} className="md:w-[45%] aspect-[16/10] object-cover"/>
                <div className="w-full md:w-[50%] p-[2%] flex flex-wrap flex-col">
                    <h3 className="text-3xl mt-6 text-dark-blue">{countryDetail.name.common}</h3>

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
                            <p className="mt-1"><span>Languages:</span></p>
                        </ul>
                    </div>

                    <p>

                    </p>
                </div>
            </div>
        </article>
    )
}