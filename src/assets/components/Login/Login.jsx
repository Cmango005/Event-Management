/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Login = () => {
  const {logIn}=useContext(AuthContext);
  const location =useLocation();
  const navigate = useNavigate();
  const handleLogin= e =>{
    e.preventDefault();
    const form =new FormData(e.currentTarget);
    const email= form.get('email');
    const password= form.get('password')
    logIn(email,password)
    .then(result=>{
      console.log(result.user)
      navigate(location?.state ? location.state : "/")
    })
    .catch(error =>{
      console.log(error)
    })
  }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      
      <p className="p-4">Haven't Account.Register Now<NavLink to='/register'><button className="btn btn-link">Registration</button></NavLink></p>
    </div>
  </div>
</div>
    );
};

export default Login;