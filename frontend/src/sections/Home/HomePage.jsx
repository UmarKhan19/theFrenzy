import HeroHome from "../../Components/HeroHome";
import Navbar from "../../Components/Navbar";
import Footer from"../../Components/Footer";
import PopularPicks from "../../Components/PopularPicks"
import HomeFollow from "../../Components/HomeFollow";
import CategoryA from "../../Components/CategoryA";
import Trending from "../../Components/Trending";
import CategoryProd from "../../Components/CategoryProd";
import Testimonials from "../../Components/Testimonials";
import Contact from "../../Components/Contact";

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
      <CategoryA/>
    </section>
    <section>
      <PopularPicks/>
    </section>
    <section>
      <Trending/>
    </section>
    <section>
      <CategoryProd/>
    </section>
    <section>
      <Testimonials/>
    </section>
    <section>
      <HomeFollow/>
    </section>
    <section>
      <Contact/>
    </section>
      <Footer/>
      </> 
  )
}

export default HomePage
