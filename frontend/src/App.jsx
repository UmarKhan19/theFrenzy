import HomePage from "./sections/Home/HomePage";
import SingleProduct from "./sections/SingleProduct.jsx/SingleProduct";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/single-product" element={<SingleProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
