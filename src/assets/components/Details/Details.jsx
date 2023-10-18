import {  useLoaderData, useParams } from "react-router-dom";
import { saveEvent } from "../utility/LocalStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Details = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail => detail.id === idInt);
    const handleJoin = () => {
        saveEvent(idInt);
        toast('Successfully Joined The Event');

    }

    return (

        <div className="container  mx-auto  p-16">
            <div className="flex ">
                <div className=" flex flex-col items-center">
                    <img className="w-5/6 h-3/4 lg:w-9/12 lg:h-full rounded-xl" src={detail.img} alt="" />
                </div>
                <div className="space-y-2">
                    <h3 className="font-bold text-4xl">
                        Event-Name: {detail.name}
                    </h3>
                    <p className=" font-medium text-lg">
                        Description: {detail.description}
                    </p>
                    <p className="font-bold text-lg">
                        Our Services: {detail.service} <br />
                        Entry Fee: {detail.entry_fee} $ 

                    </p>
                    <button onClick={handleJoin} className="btn btn-outline btn-error ">Join-Event</button>
                    <ToastContainer />
                </div>
            </div>

        </div>


    );
};

export default Details;