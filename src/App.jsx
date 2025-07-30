import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import './App.css';
import Cart from './components/Cart';
import Products from './components/Products';
import About from './components/About';
import shoppingCart from './assets/shopping-cart.png';

const App = () => {
  const cartList = useSelector(state => state.cart.cartList); 

  return (
    <BrowserRouter>
      <nav>
        <NavLink  to="/About" className={({ isActive }) => (isActive ? "active" : undefined)}>About</NavLink>
        <NavLink  to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>Products</NavLink>
        <NavLink  to="/Cart" className={({ isActive }) => (isActive ? "active" : undefined)}>
          <img src={shoppingCart} alt="Loading" width="25" height="25" />
          {cartList.length > 0 && <span>({cartList.length})</span>}
        </NavLink>
      </nav>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

 