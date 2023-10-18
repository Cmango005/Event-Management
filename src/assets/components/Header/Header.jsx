import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  }
 
  return (
    <div className="navbar shadow-2xl bg-base-100 mx-auto container">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] p-1 shadow bg-base-100 rounded-box w-32">
            <nav className="menu menu-horizontal gap-6  px-1">
              <NavLink to="/"><h3>Home</h3></NavLink> <br />
              <NavLink to="/gallery">Gallery</NavLink>
              <NavLink to="/events">Selected-Events</NavLink>
              <NavLink to="/review">Review</NavLink>

            </nav>
          </ul>
        </div>
        <img className="h-14 w-32 shadow-2xl" src="https://i.ibb.co/Q87jZLK/a7477f5b51e89856d0694d4c02dcd506.jpg" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <nav className="menu menu-horizontal gap-14 px-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/events">Selected-Events</NavLink>
            <NavLink to="/review">Review</NavLink>

          </nav>
        </ul>
      </div>
      

      {
        user ?
          <div className="navbar-end flex">
           
             <div className="flex items-center flex-row-reverse">
             <h3 className="">{user.displayName}</h3>
              <img className="w-16 rounded-full border-2" src={user.photoURL} alt="" />
             </div>
 
            <button onClick={handleSignOut} className="btn btn-active btn-neutral hover:bg-orange-500 hover:text-white">LogOut</button>
          </div>
          :
          <div className="navbar-end flex">
            
            <Link to='/login'><button className="btn btn-active btn-neutral hover:bg-orange-500 hover:text-white">LogIn</button></Link>
          </div>
      }



    </div>
  );
};

export default Header;