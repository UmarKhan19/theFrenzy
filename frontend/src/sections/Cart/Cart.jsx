import CartProd from '../../Components/CartProd';
import CartBill from '../../Components/cartBill';
import CartCard from '../../Components/CartCard';
import Nav from '../../Components/Nav';
import Footer from "../../Components/Footer";
import { PiShoppingBag } from 'react-icons/pi';


const Cart = () => {
  return (
    <div>
      <Nav/>
      <h1 className='font-bold text-5xl flex justify-center gap-6'><PiShoppingBag/>My Cart</h1>
      <section className='flex items-start flex-wrap gap-10 mt-10 mb-5'>
        <CartProd/>
        <CartBill/>
      </section>
      <section>
        <CartCard/>
      </section>
      <section>
      <Footer/>
      </section>
      </div>
  )
}

export default Cart
