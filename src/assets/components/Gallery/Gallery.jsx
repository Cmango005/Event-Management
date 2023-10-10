import { useLoaderData } from "react-router-dom";

import Pic from "../Pic/Pic";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Gallery = () => {
    const gallery =useLoaderData();
    return (
        <div  className="grid grid-cols-2 mx-auto container" data-aos="flip-left">
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