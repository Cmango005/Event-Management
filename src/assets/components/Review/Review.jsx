import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";

const Review = () => {
    const customer =useLoaderData();
    return (
        <div className=" gap-10 mx-auto container mb-5">
           <Marquee >
           {
                customer.map(user=> <div key={user.id} className="w-80 space-x-10"> 
                  <img className="w-72 h-56 ml-10 rounded-full" src={user.img} alt="" />
                  <h3 className="font-bold">Name:{user.name}</h3>
                  <p ><i className="font-extrabold">Review:</i>{user.description} </p>
                  <div className="rating">
                     <input type="radio" name="" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="" className="mask mask-star-2 bg-orange-400" />
                     <input type="radio" name="" className="mask mask-star-2 bg-orange-400" />
                   </div>
                </div>)
            }
           </Marquee>
        </div>
    );
};

export default Review;