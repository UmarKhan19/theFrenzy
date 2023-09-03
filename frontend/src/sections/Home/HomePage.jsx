import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from"../../Components/Footer";
import PopularPicks from "./PopularPicks"

const HomePage = () => {
  return (
    <>
    <main className="mx-[4%]">
      <nav>
      <Navbar/>
      </nav>
    <section>
            <Hero/>
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
