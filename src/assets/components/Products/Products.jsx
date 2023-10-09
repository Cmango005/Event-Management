import { Link } from "react-router-dom";


const Products = () => {
    return (
      <div>
          <h2 className="mx-auto container font-bold text-xl">We have launched new products. Click at the Latest Button to See All the Gadgets</h2>
           <div className="grid grid-cols-3 gap-16 mx-auto container">
            <div>
              <h2>
                Latest iPhones
              </h2>
              <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/MVYbfbz/i-phone-15-lineup.jpg" alt="" /></figure>
                  <div className="card-body">
                  <h2 className="card-title">
                  Latest iPhone
                  <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>You Can See All The Latest iPhone Here</p>
                <div className="card-actions justify-end">
                <Link to="/latest"><button className="btn btn-secondary hover:text-white">Latest iPhones</button></Link>
                </div>
                </div>
                </div>
            </div>
            <div>
              <h2>
               Latest Mac
              </h2>
              <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/XpR9bxk/download-5.jpg" alt="" /></figure>
                  <div className="card-body">
                  <h2 className="card-title">
                  Latest Mac
                  <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>You Can See All The Latest Mac Here</p>
                <div className="card-actions justify-end">
                <Link to="/mac"><button className="btn btn-secondary hover:text-white">Latest Macs</button></Link>
                </div>
                </div>
                </div>
            </div>
            <div>
            <h2>
               Latest iPad
              </h2>
              <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/sqQQKrs/13359d69-6cbb-4ade-8a47-dc272b9a8849-1632256898935.jpg" alt="" /></figure>
                  <div className="card-body">
                  <h2 className="card-title">
                  Latest iPad
                  <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>You Can See All The Latest Pad Here</p>
                <div className="card-actions justify-end">
                <Link to="/pad"><button className="btn btn-secondary hover:text-white">Latest iPad</button></Link>
                </div>
                </div>
                </div>
            </div>
            <div>
            <h2>
               Latest iWatch
              </h2>
              <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/sHnQnv6/images-1.jpg" alt="" /></figure>
                  <div className="card-body">
                  <h2 className="card-title">
                  Latest iWatch
                  <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>You Can See All The Latest Watch Here</p>
                <div className="card-actions justify-end">
                <Link to="/watch"><button className="btn btn-secondary hover:text-white">Latest iWatch</button></Link>
                </div>
                </div>
                </div>
            </div>
            <div>
            <h2>
               Latest AirPods
              </h2>
              <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/kqmCsSn/New-Air-Pods-3.webp" alt="" /></figure>
                  <div className="card-body">
                  <h2 className="card-title">
                  Latest AirPods
                  <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>You Can See All The Latest AirPods Here</p>
                <div className="card-actions justify-end">
                <Link to="/pod"><button className="btn btn-secondary hover:text-white">Latest AirPods</button></Link>
                </div>
                </div>
                </div>
            </div>
            <div>
            <h2>
               iStore
              </h2>
              <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/SvxYPg8/download-6.jpg" alt="" /></figure>
                  <div className="card-body">
                  <h2 className="card-title">
                  iStore
                  </h2>
                  <p>You Can See All The Latest Gadgets Here</p>
                <div className="card-actions justify-end">
                <Link to="/store"><button className="btn btn-secondary hover:text-white">Address</button></Link>
                </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Products;