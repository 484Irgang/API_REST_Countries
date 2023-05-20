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
    const response = await fetch(url.href);
    const data = await response.json();

    const newData = data.map((country,i,array) => {

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

export async function filterCountry(value, countries){
    let re = new RegExp(value.toUpperCase());
    const newCountries = countries.filter((country, i) => {
        return re.exec(country.name.common.toUpperCase());
    });

    return newCountries;
}