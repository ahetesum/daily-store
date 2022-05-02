import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../Store/Actions/userAction";



export const SideMenu=()=>{

  const user= useSelector(state=>state.user);

  let userDispatch=useDispatch();
  const logout=()=>{
    userDispatch(logOut)
  }



    return (
        <div className='menuContainer'>
        <ul>
          <li className='menuItem'>
            <Link to="/">Home</Link>
          </li>
          <li className='menuItem'>
            <Link to="/products">Products</Link>
          </li>
          <li className='menuItem'>
            <Link to="/product-mngr">Manager</Link>
          </li>
          { ( user && user.currentUser)?<li className='menuItem'>
            <Link to="/add-product">Add Product</Link>
          </li>:null}
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
             ( user && user.currentUser)?<li onClick={()=>logout()} className='menuItem'>
            <Link to="/">Log Out</Link>
          </li>:null
          }
        </ul>
      </div>
    );
}