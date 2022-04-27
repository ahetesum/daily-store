import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth, logout } from "../../Helpers/FirebaseHelper";



export const SideMenu=()=>{


  const [user, loading, error] = useAuthState(auth);



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
          {
            (user)?<li onClick={()=>logout()} className='menuItem'>
            <Link to="/about-us">Log Out</Link>
          </li>:null
          }
        </ul>
      </div>
    );
}