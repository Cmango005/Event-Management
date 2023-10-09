import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Registration = () => {
  const {createUser} =useContext(AuthContext);
  const handleRegister= e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email= form.get('email');
    const password= form.get('password');
    createUser(email,password)
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error)
    })
    toast('Registration Complete');

  }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
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
          <button className="btn btn-primary">Registration</button>
        </div>
        {
          createUser && <ToastContainer />
        }
      </form>
    </div>
  </div>
</div>
    );
};

export default Registration;