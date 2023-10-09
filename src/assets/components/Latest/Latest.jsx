import { Link, useLoaderData } from "react-router-dom";

const Latest = () => {
    const products=useLoaderData();
    return (
        <div className="grid grid-cols-4 mx-auto gap-5 container">
            {
                products.map(item=> 
                    <div className="rounded-xl shadow-2xl" key={item.id}>
                    <Link to={`/item/${item.id}`}><img className="w-72 h-56" src={item.img} alt="" />
                    <h3 className="ml-2">Product:{item.name}</h3>
                    <p className="ml-2">Available Storage:{item.storage}</p>
                    <p className="ml-2">Prices:{item.price}</p></Link>
                     
                </div>)
            }
        </div>
    );
};

export default Latest;