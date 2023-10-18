
import './Banner.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {  useLoaderData } from 'react-router-dom';


// ..
AOS.init();
const Home = () => {
    const events = useLoaderData();
    return (
        <div>
            <section className='flex justify-center items-center'>
                <div className="mx-auto banner container mb-5 w-4/6">
                    <p data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" className='mt-48 mx-64 text-center font-bold text-xl text-white'>
                        SCROLL DOWN EVENTS ARE COMING SOON..... <br /> JOIN ALL THE EVENTS
                    </p>
                </div>
            </section>

            <section data-aos="fade-up-right"
                className=" mx-auto mb-10 container grid grid-cols-2 gap-4 ">
                {
                    events.map(eitem => <div key={eitem.id} data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="card h-48 border-2 card-side bg-base-100 shadow-xl">
                        <figure><img className='w-56 ml-3 rounded-xl' src={eitem.img} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{eitem.name}</h2>
                            <p>Location:{eitem.location}</p>
                            <p>Date:{eitem.date}</p>

                            <button className="btn btn-outline btn-success w-28  ml-44 ">Details</button>

                        </div>
                    </div>)
                }
            </section>
            <section>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">Your Name:</label>
                                    <input type="text" placeholder="name" id="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit Complain</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default Home;