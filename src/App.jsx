import DarkButton from "./components/DarkButton"
import HomePage from "./components/HomePage"

export default function App(){
  return (
    <section className="dark:bg-very-dark-blue-bg bg-very-light-gray">
      
      <header className="px-[4%] py-8 flex justify-between items-center bg-white dark:bg-dark-blue shadow-md shadow-stone-200">
        <h3>Where in the world</h3>
        <DarkButton/>
      </header>

      <HomePage/>

    </section>
  )
}
