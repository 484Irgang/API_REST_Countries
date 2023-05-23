const url = new URL("/", "https://restcountries.com")

export function fetchRandomCountries(data){
    let dataToSend = [];
    for(var i=0;i<8;i++){
        var randomIndex = Math.floor(Math.random() * data.length);
        var country = data.filter((country, i) => i === randomIndex);
        dataToSend = [...dataToSend, country[0]];
    }

    return dataToSend;
}

export async function fetchAllCountries(){
    url.pathname = "/v3.1/all";

    try{
        const response = await fetch(url.href);
        const data = await response.json();

        const newData = data.map((country,i) => {

        let newPopulation = country.population.toString().split("");

        if(newPopulation.length > 3)
            newPopulation.splice(newPopulation.length-3,0,".");
        if(newPopulation.length > 7)
            newPopulation.splice(newPopulation.length-7,0,".");
        if(newPopulation.length > 11)
            newPopulation.splice(newPopulation.length-11,0,".");

        let population = newPopulation.join("");
        return {...country, population};
    })

        return newData; 
    } 
    catch(err){
        console.log(err.message+", we will use the localy data");

        const response = await fetch("./src/assets/data.json");
        const data = await response.json();

        const newData = data.map((country,i) => {
            let name = {common: country.name};
            let newPopulation = country.population.toString().split("");
            let capital = [country.capital];
            let tld = country.topLevelDomain;
            let cca3 = country.alpha3Code;
            let languages = {};
            country.languages.forEach((lang, i) => {
               return languages = {...languages, [i]: lang.name};
            });
            

            if(newPopulation.length > 3)
                newPopulation.splice(newPopulation.length-3,0,".");
            if(newPopulation.length > 7)
                newPopulation.splice(newPopulation.length-7,0,".");
            if(newPopulation.length > 11)
                newPopulation.splice(newPopulation.length-11,0,".");
    
            let population = newPopulation.join("");
            
            return {...country, population, name, capital, tld, cca3, languages};
        })
    
            return newData; 
    }
}

export async function filterCountry(value, countries){
    let re = new RegExp(value.toUpperCase());
    const newCountries = countries.filter((country, i) => {
        return re.exec(country.name.common.toUpperCase());
    });

    return newCountries;
}