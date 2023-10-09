import { useLoaderData } from "react-router-dom";

import Pic from "../Pic/Pic";


const Gallery = () => {
    const gallery =useLoaderData();
    return (
        <div  className="grid grid-cols-2 mx-auto container">
            {
                gallery.map(pic=> <Pic 
                 key={pic.id}
                 pic={pic}>
               </Pic>)
            }
        </div>
    );
};

export default Gallery;