import image from "../assets/yt_logo_rgb_light.png";
import searchlogo from "../assets/search-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  
  const [value,setvalue] = useState('');

  const handleChange=(value)=>{
    setvalue(value);
  }

  const handleKeyPress=(e)=>{
    if (e.key === 'Enter') {
      window.location.replace(`/search/${value}`);
    }
  }


  return (
    <nav className="navbar">
      <div className="menu-logo">
        <Link to="/">
        <img className="logo" src={image} alt=""/>
        </Link>
      </div>
      <div className="search-bar">
        <input className="search" type="text" name="search" placeholder="Search" value={value} onKeyUp={(e)=>handleKeyPress(e)} onChange={(e)=>handleChange(e.target.value)}/>
        <Link to={`/search/${value}`}>
          <button className="search-button"><img src={searchlogo} alt="" /></button>
        </Link>
      </div>
      <div className="right"></div>
    </nav>
  );
};

export default Navbar;
