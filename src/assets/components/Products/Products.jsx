import { Link } from "react-router-dom";


const Products = () => {
    return (
        <div className="flex justify-around mx-auto container">
            <div>
              <h2>
                Latest Launced Products
              </h2>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/VCpRXTB/All-Apple-Products-and-Accessories-on-MC-Solution-Apple-Store-in-BD-1.webp" alt="" /></figure>
                  <div className="card-body">
                  <h2 className="card-title">
                  Apple Products
                  <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>You Can See All The Latest Products Here</p>
                <div className="card-actions justify-end">
                <Link to="/latest"><button className="btn btn-secondary hover:text-white">See All Latest Products</button></Link>
                </div>
                </div>
                </div>
            </div>
            <div>
              <h2>
                Old Products
              </h2>
            </div>
        </div>
    );
};

export default Products;