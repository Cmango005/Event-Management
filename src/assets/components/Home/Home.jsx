import Marquee from "react-fast-marquee";
import './Facebook.css'
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <div className="flex mx-auto container mb-5 w-4/6">
            <Link to="/latest"><button className="btn btn-secondary w-28 hover:text-white hover:bg-red-600 "><span>Buy Now</span></button></Link>
            <Marquee>
              <i className="font-bold text-2xl">Latest iPhone 15 Has Been Released .Buy Now.</i>
            </Marquee>
            </div>
            <section className=" mx-auto container">
                   <Link to="/products">
                   <div className="service  bg-no-repeat">
                    <p className="text-pink-400 p-6 ml-96 font-extrabold text-lg text-center "><i>Click to See Our Latest and Old Products</i></p>
                    </div>
                   </Link>
            </section>
            <section className="h-screen  mx-auto container">
                <Link to="/review">
                    <div className="review   bg-no-repeat">
                    <p className="text-black p-5 font-extrabold text-lg text-center "><i>Click to See Our Happy Customer</i></p>
                    </div>
                </Link>
            </section>
            <section className="h-screen  mx-auto container">
                <Link to='https://www.facebook.com/apple'>
                <div className="find-facebook h-screen bg-no-repeat">
                <p className="text-white p-5 font-extrabold text-2xl text-center ">Click to Find Us on Facebook</p>
                </div>
                </Link>
            </section>

        </div>
    );
};

export default Home;