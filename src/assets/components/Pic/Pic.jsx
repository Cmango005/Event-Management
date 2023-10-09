/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Pic = ({pic}) => {
    const {name,img}=pic;
    return (
        <div >
            
                <p className="font-semibold">{pic.name}</p>
                <img className="h-11/12 flex flex-row items-center" src={pic.img} alt="" />
            
        </div>
    );
};

export default Pic;