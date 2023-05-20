import DarkButton from "./components/DarkButton"
import HomePage from "./components/HomePage"

export default function App(){
  return (
    <section>
      
      <header className="px-[4%] py-8 flex justify-between items-center relative z-10 bg-white dark:bg-dark-blue shadow-md shadow-stone-200">
        <h3>Where in the world</h3>
        <DarkButton/>
      </header>

      <HomePage/>

    </section>
  )
}
