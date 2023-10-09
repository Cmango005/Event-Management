import { useLoaderData, useParams } from "react-router-dom";
import { saveProduct } from "../utility/LocalStorage";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const PadDetails = () => {
    const PadDetails =useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const pad = PadDetails.find(pad=> pad.id === idInt);
    const handleBuy =()=>{
        saveProduct(idInt);
        toast('Successfully Purchased');
     
}
    return (
        <div className="flex ">
            
            <div className=" flex flex-col items-center">
            <img className="w-8/12" src={pad.img} alt="" />
            </div>
            <div className="space-y-6">
            <h2 className="font-bold text-4xl">{pad.name}</h2>
            <p className="w-3/4">{pad.description}</p>
            <div className=" w-8/12  "><button onClick={handleBuy} className="py-3 px-10  border-2 btn btn-outline btn-success  font-bold rounded-lg">Buy</button>
            <ToastContainer />
            </div>
            </div>
            </div>
    );
};

export default PadDetails;