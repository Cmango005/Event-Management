import { Link, useLoaderData } from "react-router-dom";


const Watch = () => {
    const products=useLoaderData();

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 mx-auto gap-5 container">
            {
                products.map(watch=> 
                    <div className="rounded-xl shadow-2xl" key={watch.id}>
                    <Link to={`/watch/${watch.id}`}><img className="w-72 h-56" src={watch.img} alt="" />
                    <h3 className="ml-2">Product:{watch.name}</h3>
                    <p className="ml-2">Available Storage:{watch.storage}</p>
                    <p className="ml-2">Prices:{watch.price}</p></Link>
                     
                </div>)
            }
        </div>
        </div>
    );
};

export default Watch;