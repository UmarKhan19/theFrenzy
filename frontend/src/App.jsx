import HomePage from "./sections/Home/HomePage";
import SingleProduct from "./sections/SingleProduct/SingleProduct";
import Wishlist from "./sections/Wishlist/Wishlist";
import Cart from "./sections/Cart/Cart";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from "./sections/Profile/Profile";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Profile" element={<Profile/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
