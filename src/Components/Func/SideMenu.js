import { Link } from "react-router-dom";



export const SideMenu=()=>{
    return (
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
    );
}