import { Link, useLoaderData } from "react-router-dom";


const Pad = () => {
    const products=useLoaderData();

    return (
        <div>
            <div className="grid grid-cols-4 mx-auto gap-5 container">
            {
                products.map(pad=> 
                    <div className="rounded-xl shadow-2xl" key={pad.id}>
                    <Link to={`/pad/${pad.id}`}><img className="w-72 h-56" src={pad.img} alt="" />
                    <h3 className="ml-2">Product:{pad.name}</h3>
                    <p className="ml-2">Available Storage:{pad.storage}</p>
                    <p className="ml-2">Prices:{pad.price}</p></Link>
                     
                </div>)
            }
        </div>
        </div>
    );
};

export default Pad;