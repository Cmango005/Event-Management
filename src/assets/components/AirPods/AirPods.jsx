import { Link, useLoaderData } from "react-router-dom";


const AirPods = () => {
    const products=useLoaderData();

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 mx-auto gap-5 container">
            {
                products.map(pod=> 
                    <div className="rounded-xl shadow-2xl" key={pod.id}>
                    <Link to={`/pod/${pod.id}`}><img className="w-72 h-56" src={pod.img} alt="" />
                    <h3 className="ml-2">Product:{pod.name}</h3>
                    <p className="ml-2">Available Storage:{pod.storage}</p>
                    <p className="ml-2">Prices:{pod.price}</p></Link>
                     
                </div>)
            }
        </div>
        </div>
    );
};

export default AirPods;