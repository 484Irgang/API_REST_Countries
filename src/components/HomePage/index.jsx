import ShowContent from "../Content"
import SearchCountries from "../SearchCountries"

export default function HomePage(){
    return(
        <section className="w-100 h-100">
            <SearchCountries/>
            <ShowContent/>
        </section>
    )
}