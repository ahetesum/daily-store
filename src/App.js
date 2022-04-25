import logo from './logo.svg';
import './App.css';
import { Regstration } from './Pages/Regtration';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from './Pages/Login';
import { DailyStoreHeader } from './Components/Func/DailyStoreHeader';
import { DailyStoreFooter } from './Components/Func/DailyStoreFooter';
import { Products } from './Pages/Products';
import { Orders } from './Pages/Orders';
import { Contact } from './Pages/Contact';
import { About } from './Pages/About';
import { Dashboard } from './Pages/Dashboard';

function App() {
  return (
    <div className='appContainer'>
      <DailyStoreHeader />
      <div className='bodyContainer'>
        <BrowserRouter>
          <div className='menuContainer'>
            <ul>
              <li className='menuItem'>
                <Link to="/">Home</Link>
              </li>
              <li className='menuItem'>
                <Link to="/product-mngr">Products</Link>
              </li>
              <li className='menuItem'>
                <Link to="/order-mngr">Order History</Link>
              </li>
              <li className='menuItem'>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li className='menuItem'>
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
          </div>
          <div className='mainContainer'>

            <Routes>
              <Route path='/' element={<Dashboard />} ></Route>
              <Route path='/register' element={<Regstration />} ></Route>
              <Route path='/product-mngr' element={<Products />} ></Route>
              <Route path='/order-mngr' element={<Orders />} ></Route>
              <Route path='/contact-us' element={<Contact />} ></Route>
              <Route path='/about-us' element={<About />} ></Route>
            </Routes>
          </div>
          <div className='menuContainer'>
          </div>
        </BrowserRouter>
      </div>

      <DailyStoreFooter />
    </div>
  );
}

export default App;
