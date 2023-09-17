import Nav from '../../Components/Nav';
import HeroSingle from '../../Components/HeroSingle';
import SingleCard from "../../Components/SingleCard";
import SingleCard2 from "../../Components/SingleCard2";
import Footer from "../../Components/Footer";
import Reviews from '../../Components/Reviews';

const SingleProduct = () => {
  return (
    <main>
      <Nav/>
      <div>
      <HeroSingle/>
      </div>
      <div>
        <SingleCard/>
      </div>
      <div>
        <SingleCard2/>
      </div>
      <div>
        <Reviews/>
      </div>
      <Footer/>
    </main>
  )
}

export default SingleProduct
