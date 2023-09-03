import HeroHome from "../../Components/HeroHome";
import Navbar from "../../Components/Navbar";
import Footer from"../../Components/Footer";
import PopularPicks from "../../Components/PopularPicks"

const HomePage = () => {
  return (
    <>
    <main className="mx-[4%]">
      <nav>
      <Navbar/>
      </nav>
    <section>
            <HeroHome/>
    </section>
    </main>
    <section>
      <PopularPicks/>
    </section>
      <Footer/>
      </> 
  )
}

export default HomePage
