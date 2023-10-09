import { useLoaderData, useParams } from "react-router-dom";


const LatestDetails = () => {
    const details =useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail=> detail.id === idInt);
    
    return (
        <div className="flex ">
            
            <div className=" flex flex-col items-center">
            <img className="w-8/12" src={detail.img} alt="" />
            </div>
            <div className="space-y-6">
            <h2 className="font-bold text-4xl">{detail.name}</h2>
            <p className="w-3/4">{detail.description}</p>
            <div className=" w-8/12  "><button className="py-3 px-10  border-2 btn btn-outline btn-success  font-bold rounded-lg">Buy</button>
            </div>
            </div>
           
            
        </div>
    );
};

export default LatestDetails;