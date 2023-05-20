import { useEffect, useState } from "react"
import {ShowAllContent,ShowContent} from "./Content"
import {SearchInput, ShowAllButton, FilterCountries} from "./FilterCountries"
import { fetchRandomCountries, fetchAllCountries, filterCountry } from "../assets/CountriesApi";
import Loader from "./Loader";
import CountryDetail from "./CountryDetail";

export default function HomePage(){
    const [allCountries, setAllCoutries] = useState([]);
    const [currentCountries, setCurrentCountries] = useState([]);
    const [randomCountries, setRandomCountries] = useState([]);
    const [toggleShowAll, setToggleShowAll] = useState(false);
    const [loading, setLoading] = useState(true);
    const [region, setRegion] = useState("");
    const [country,setCountry] = useState("");
    const [countryDetail, setCountryDetail] = useState([]);

    function handleShowAll(status){
        setToggleShowAll(status);
    }

    function handleFilterRegion(val){
        setRegion(val);
        setToggleShowAll(true);
        let newCurrentCountries = allCountries.filter((country, i) => {
            return val? country.region === val:country;
        });
        setCurrentCountries(newCurrentCountries);
    }

    function handleCountry(value){
        setCountry(value);
        setLoading(true);
        filterCountry(value, allCountries).then(data => {
            setToggleShowAll(true);
            setCurrentCountries(data);
            setLoading(false);
        });
    }

    function handleCountryDetail(value){
        let newCountryDetail = allCountries.filter((country, i) => {
            return country.cca3 === value.cca3;
        })

        setCountryDetail(newCountryDetail);
    }

    useEffect(() => {
        fetchAllCountries().then(data => {
            setAllCoutries(data);
            setCurrentCountries(data);
            let randomData = fetchRandomCountries(data);
            setRandomCountries(randomData);
            setTimeout(() => {
                setLoading(false);
            },1000)
        });
    },[]);

    return(
        <section className="relative">
            
            {
                countryDetail.length === 0 &&
                <div className="p-[4%] md:flex justify-between">

                    <SearchInput country={country} setCountry={handleCountry}/>

                    <div className="flex items-center md:w-80 mt-4 md:mt-0 justify-between">
                        <FilterCountries region={region} setRegion={handleFilterRegion}/>
                        <ShowAllButton toggleShowAll={toggleShowAll} handleShowAll={handleShowAll}/>
                    </div>

                </div>
            }
            
            {
                countryDetail.length > 0?
                <CountryDetail country={countryDetail}/>
                :
                (loading? 
                    <Loader/>
                    :
                    (toggleShowAll?
                    (currentCountries.length >0?
                    <ShowAllContent seeDetailCountry={handleCountryDetail} countries={currentCountries}/>
                    :
                    <h3 className="w-[100%] text-center text-2xl text-gray-400 mt-10">Sorry, no countries founded</h3>
                    )
                    :
                    <ShowContent seeDetailCountry={handleCountryDetail} countries={randomCountries}/>)
                )
            }
        </section>
    )
}