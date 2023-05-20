import DarkButton from "./components/DarkButton"
import HomePage from "./components/HomePage"

export default function App(){
  return (
    <section>
      
      <header className="px-[4%] py-8 flex justify-between items-center relative z-10 bg-white dark:bg-dark-blue shadow-md shadow-stone-200 dark:shadow-very-dark-blue-bg">
        <h3 className="dark:text-very-light-gray text-very-dark-blue-txt">Where in the world</h3>
        <DarkButton/>
      </header>

      <HomePage/>

    </section>
  )
}
