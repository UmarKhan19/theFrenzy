import Nav from '../../Components/Nav';
import Hero from './Hero';
import SingleCard from "./SingleCard";
import Footer from "../../Components/Footer";
import Reviews from './Reviews';

const SingleProduct = () => {
  return (
    <main>
      <Nav/>
      <div>
      <Hero/>
      </div>
      <div>
        <SingleCard/>
      </div>
      <div>
        <Reviews/>
      </div>
      <Footer/>
    </main>
  )
}

export default SingleProduct
