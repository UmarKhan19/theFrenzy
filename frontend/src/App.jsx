import HomePage from "./sections/Home/HomePage";
import SingleProduct from "./sections/SingleProduct/SingleProduct";
import Wishlist from "./sections/Wishlist/Wishlist";
import Cart from "./sections/Cart/Cart";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from "./sections/Profile/Profile";
import {Provider} from 'react-redux';
import Product from "./sections/Product"
import store from "./store/store"

function App() {
  return (
    <Provider store={store}> 
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Profile" element={<Profile/>}></Route>
          <Route path="/Product" element={<Product/>}></Route>
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
