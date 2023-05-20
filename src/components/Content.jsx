export function ShowAllContent({countries,seeDetailCountry}){
    return(
        <article className="w-[100%] mx-auto flex flex-wrap mt-8 justify-around">
            {
                countries.map((country, i) => {
                    return(
                        <div onClick={() => seeDetailCountry(country)} key={i} className=" w-80 m-1 flex shadow-md shadow-stone-400 cursor-pointer rounded-md hover:bg-stone-200 transition">
                            <img src={country.flags.svg} className="w-[45%] aspect-[16/10] object-cover"/>
                            <div className="py-1 px-2">
                                <p className=" text-xs font-bold mb-1">{country.name.common}</p>
                                <p className=" text-xs "><span>Region:</span> {country.region}</p>
                                <p className=" text-xs "><span>Population:</span> {country.population}</p>
                                <p className=" text-xs "><span>Capital:</span> {country.capital? country.capital[0]:"Capital not founded"}</p>
                            </div>
                        </div>
                    )
                })
            }
        </article>
    )
}

export function ShowContent({countries,seeDetailCountry}){
    return(
        <article className="mx-auto flex flex-wrap justify-center">
            <h3 className="w-[100%] text-center text-3xl mb-3 text-dark-blue">Learn more about random countries</h3>
            {
                countries.map((country, i) => {
                    return(
                        <div onClick={() => seeDetailCountry(country)} key={i} className=" max-w-[19rem] mx-2 my-6 bg-white shadow-md hover:bg-stone-200 transition shadow-stone-300 cursor-pointer rounded-md">
                            <img className=" aspect-[16/10] w-[100%] object-cover" src={country.flags.svg}/>
                            <div className=" p-6">
                                <h3>{country.name.common}</h3>
                                <ul className="py-4">
                                    <li><span>Population:</span> {country.population}</li>
                                    <li><span className="mt-2 ">Region:</span> {country.region}</li>
                                    <li><span className="mt-2 ">Capital:</span> {country.capital? country.capital[0]:"Capital not founded"}</li>
                                </ul>
                            </div>    
                        </div>
                    )
                })
            }
        </article>
    )
}