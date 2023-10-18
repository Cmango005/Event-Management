
import './Banner.css'
import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link, useLoaderData } from 'react-router-dom';


// ..
AOS.init();
const Home = () => {
    const events = useLoaderData();
    return (
        <div>
            <section className='flex justify-center items-center'>
                <div className="mx-auto banner bg-no-repeat container mb-5 w-4/6">
                    <p data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" className='mt-16 lg:mt-48 mx-64 text-center font-bold text-xl text-white'>
                        SCROLL DOWN EVENTS ARE COMING SOON..... <br /> JOIN ALL THE EVENTS
                    </p>
                </div>
            </section>
            <div className='mb-10'>
                <Marquee>
                    <p className='font-extrabold text-xl'>CLICK DETAILS TO SEE DETAILS AND JOIN OUR EVENTS HURRY UP TIME IS RUNNING FAST........</p>
                </Marquee>
                <p className='text-center mt-10 text-4xl font-extrabold'>OUR UPCOMING EVENTS/SERVICES</p>
            </div>
            <section data-aos="fade-up-right"
                className=" mx-auto mb-10 container grid grid-cols-1 lg:grid-cols-2 gap-4 ">


                {
                    events.map(eitem => <div key={eitem.id} data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="card h-48 border-2 card-side bg-base-100 shadow-xl">
                        <figure><img className='w-56 ml-3 rounded-xl' src={eitem.img} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{eitem.name}</h2>
                            <p>Location:{eitem.location}</p>
                            <p>Date:{eitem.date}</p>
                            <Link to={`/detail/${eitem.id}`}><button className="btn btn-outline btn-success w-28  ml-44 ">Details</button></Link>
                        </div>
                    </div>)
                }

            </section>
            <section className='mx-auto container'>

                <div className="hero min-h-screen bg-base-200">
                    <div className='mb-96'>
                        <p className='font-bold text-2xl'>IF U HAVE ANY COMPLAIN ABOUT US FEEL FREE TO FILL UP THIS COMPLAIN BOX</p>
                    </div>
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className=" flex-shrink-0 w-full bg-slate-100 mt-16 rounded-xl shadow-2xl p-5 ">
                            <form className="">
                                <div className='flex gap-4'>
                                    <div>
                                        <div className="form-control">
                                            <label className="label">Your Name:</label>
                                            <input type="text" placeholder="name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">Your Phone:</label>
                                            <input type="number" placeholder="phone" className="input input-bordered" required />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-control">
                                            <label className="label">Your Complain:</label>
                                            <textarea type="text" placeholder="your complain" className="input h-56 w-52" required></textarea>
                                        </div>
                                        <div>

                                        </div>
                                    </div>

                                </div>
                                <div className="form-control text-center mt-6">
                                    <button className="btn btn-info">Submit Complain</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mx-auto container p-10'>
                <p className='text-center font-bold text-2xl'>WHY PEOPLE CHOOSE OUR EVENTS</p>
                <div className="collapse w-full bg-red-200">
                    <input type="radio" name="my-accordion-1" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                    Expertise and Experience
                    </div>
                    <div className="collapse-content">
                        <p>Event management companies have the knowledge, expertise, and experience to plan, organize, and execute events successfully. They are well-versed in handling a wide range of events, from weddings and corporate conferences to cultural festivals and product launches. This expertise ensures that the event runs smoothly, is well-coordinated, and meets or exceeds the clients expectations.</p>
                    </div>
                </div>
                <div className="collapse w-full bg-emerald-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                    Time and Stress Savings
                    </div>
                    <div className="collapse-content">
                        <p> Planning and managing an event can be time-consuming and stressful, particularly for individuals or businesses with limited experience in event planning. Event management services take the burden off the clients shoulders, allowing them to focus on other aspects of their life or business. Clients can trust that professionals will handle all the logistical details, leaving them free to enjoy the event or concentrate on their core responsibilities.</p>
                    </div>
                </div>
                <div className="collapse w-full bg-sky-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                    Access to Resources and Networks
                    </div>
                    <div className="collapse-content">
                        <p>Event management companies often have well-established networks and relationships with vendors, venues, caterers, and other event-related service providers. This can result in cost savings and access to resources that the client might not have on their own. Event planners can negotiate deals, secure desirable locations, and ensure that all aspects of the event are of the highest quality.</p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;