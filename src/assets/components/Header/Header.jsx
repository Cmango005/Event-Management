import { Link, NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div className="navbar bg-base-100 mx-auto container">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] p-1 shadow bg-base-100 rounded-box w-32">
      <nav className="menu menu-horizontal gap-6  px-1">
                 <NavLink to="/"><h3>Home</h3></NavLink> <br />
                 <NavLink to="/gallery">Gallery</NavLink>
                 <NavLink to="/purchase">Purchased Items</NavLink>
                 <NavLink to="/review">Review</NavLink>
                 
                </nav>
      </ul>
    </div>
    <img className="h-14 w-32" src="https://i.ibb.co/bFdsDdx/apple-logo-icon-168588.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <nav className="menu menu-horizontal gap-14 px-1">
                  <NavLink to="/">Home</NavLink>
                 <NavLink to="/gallery">Gallery</NavLink>
                 <NavLink to="/purchase">Purchased Items</NavLink>
                 <NavLink to="/review">Review</NavLink>
                </nav>
    </ul>
  </div>
  <div className="navbar-end flex">
  <div className="avatar online">
  <div className="w-16 rounded-full">
  <img  src="https://i.ibb.co/Ybffmcv/6596121.png" alt="" />
  </div>
</div>
<Link to='/login'><button className="btn btn-active btn-neutral hover:bg-orange-500 hover:text-white">Login</button></Link>
  
    
  </div>
</div>
    );
};

export default Header;