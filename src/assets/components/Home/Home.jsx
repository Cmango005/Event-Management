import Marquee from "react-fast-marquee";
import './Facebook.css'
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Home = () => {
    return (
        <div>
            <div className="flex mx-auto container mb-5 w-4/6">
                <Link to="/iphone"><button className="btn btn-secondary w-28 hover:text-white hover:bg-red-600 "><span>Buy Now</span></button></Link>
                <Marquee>
                    <i className="font-bold text-2xl">Latest iPhone 15 Has Been Released .Buy Now.</i>
                </Marquee>
            </div>
            <section data-aos="fade-up-right"
                className=" mx-auto mb-10 container">
                <Link to="/service">
                    <div className="service  bg-no-repeat">
                        <p className="text-pink-400 p-6 ml-96 font-extrabold text-lg text-center "><i className="ml-6 p-6 bg-slate-200 rounded-lg">Click This Section to See Our Latest Gadgets</i></p>
                    </div>
                </Link>
            </section>
            <section data-aos="fade-up-left" className=" mx-auto mb-10 container">
                <Link to="/review">
                    <div className="review   bg-no-repeat">
                        <p className="text-black p-5 font-extrabold text-lg text-center "><i>Click This Section to See Our Happy Customer</i></p>
                    </div>
                </Link>
            </section>
            <section data-aos="fade-up-right" className=" mx-auto mb-10 container">
                <div className="grid grid-cols-2">
                <div className="card-body ">
                <Link to='https://www.facebook.com/apple'>
                    <div className="find-facebook h-screen bg-no-repeat">
                        <p className="text-white p-5 font-extrabold text-2xl text-center ">Click to Find Us on Facebook</p>
                    </div>
                </Link>
                </div>
                <div className="card-body" >
                <Link to='https://www.instagram.com/apple/'>
                    <div className="find-instagram h-screen bg-no-repeat">
                        <p className="text-white p-5 font-extrabold text-2xl text-center ">Click to Find Us on Instagram</p>
                    </div>
                </Link>
                </div>
                </div>
            </section>

        </div>
    );
};

export default Home;