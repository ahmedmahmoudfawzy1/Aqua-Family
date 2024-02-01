import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaWhatsapp , FaFacebookF, FaInstagram, FaLinkedinIn , FaList, FaRegHeart} from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
// import  {CiLogout } from "react-icons/ci";

import "./NavBar.scss";



export default function NavBar() { 

  const [isClicked , setIsClicked] = useState(false)

  const  handelClick = () =>  {
    setIsClicked(!isClicked);  
    // console.log('Done');
  }

  return (
  <>
    <div className="navUp">
        <div className="emailContact">
          <HiOutlineMailOpen className="mail"/>
          <a href="mailto:afaw6076@gmail.com">aquafamily@gmail.com</a>
        </div>
        <div className="contactIcons">
        <a href="https://facebook.com"  className="whatsApp"><FaWhatsapp/></a>
        <a href="https://facebook.com"  className="face"><FaFacebookF /></a>
        <a href="https://instgram.com"  className="insta"> <FaInstagram /></a>
        <a href="https://linkedin.com"  className="Linked"><FaLinkedinIn /></a>
        </div>
    </div>
            {/* Main Navbar  */}
      <div className="navBar">
        <div className="logo">
          <h3>Ahmed</h3>
        </div> 
        <div className="visible__links">
            <ul>
                <li><Link to="/" className="linkNav">Home</Link> </li>
                <li><Link to="/shop" className="linkNav">shop</Link></li>
                <li><Link to="/contact" className="linkNav">Contact</Link></li>
            </ul>
        </div>
        <div className="cart_wish_log">
        <FaRegHeart />
        <FaShoppingCart />
        <Link to='/login' className="login">Login</Link>
        {/* <Link to='/logout' className="logout"><CiLogout /></Link> */}
        </div>
        <FaList id="faList" onClick={handelClick}/>
      </div>

      {isClicked && (
            <div className="linkList">
            <ul>
                <li className="x"><Link to="/" className="linkNav">Home</Link> </li>
                <li className="x"><Link to="/shop" className="linkNav">shop</Link></li>
                <li className="x"><Link to="/contact" className="linkNav">Contact</Link></li>
            </ul>
        </div>
          )}
    </>
  );
}
