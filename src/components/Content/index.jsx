

export default function ShowContent(){
    const countries = [{
        name: "Afghanistan",
        population: 40218234,
        region: "Asia",
        capital: "Kabul", 
        flags: {
            svg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
            jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
        }},
        {
            name: "Afghanistan",
            population: 40218234,
            region: "Asia",
            capital: "Kabul", 
            flags: {
                svg: "https://flagcdn.com/lv.svg",
                jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
        }},{
            name: "Afghanistan",
            population: 40218234,
            region: "Asia",
            capital: "Kabul", 
            flags: {
                svg: "https://flagcdn.com/ke.svg",
                jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
        }},{
            name: "Afghanistan",
            population: 40218234,
            region: "Asia",
            capital: "Kabul", 
            flags: {
                svg: "https://flagcdn.com/ga.svg",
                jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
        }},{
            name: "Afghanistan",
            population: 40218234,
            region: "Asia",
            capital: "Kabul", 
            flags: {
                svg: "https://flagcdn.com/ge.svg",
                jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
        }},{
            name: "Afghanistan",
            population: 40218234,
            region: "Asia",
            capital: "Kabul", 
            flags: {
                svg: "https://flagcdn.com/de.svg",
                jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
        }}]
    return(
        <article className="mx-auto flex flex-wrap">
            {
                countries.map((country, i) => {
                    return(
                        <div className=" max-w-[19rem] mx-auto my-6 bg-white shadow-md shadow-stone-300 cursor-pointer">
                            <img src={country.flags.svg}/>
                            <div className=" p-6">
                                <h3>{country.name}</h3>
                                <ul className="py-4">
                                    <li><span className="font-semibold">Population:</span> {country.population}</li>
                                    <li><span className="font-semibold">Region:</span> {country.region}</li>
                                    <li><span className="font-semibold">Capital:</span> {country.capital}</li>
                                </ul>
                            </div>    
                        </div>
                    )
                })
            }
        </article>
    )
}