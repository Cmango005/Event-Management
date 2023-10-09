import { Link, useLoaderData } from "react-router-dom";


const Mac = () => {
    const products=useLoaderData();

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 mx-auto gap-5 container">
            {
                products.map(mac=> 
                    <div className="rounded-xl shadow-2xl" key={mac.id}>
                    <Link to={`/mac/${mac.id}`}><img className="w-72 h-56" src={mac.img} alt="" />
                    <h3 className="ml-2">Product:{mac.name}</h3>
                    <p className="ml-2">Available Storage:{mac.storage}</p>
                    <p className="ml-2">Prices:{mac.price}</p></Link>
                     
                </div>)
            }
        </div>
        </div>
    );
};

export default Mac;