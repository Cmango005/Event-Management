import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredProduct } from "../utility/LocalStorage";


const Purchased = () => {
    const products = useLoaderData();
  const [appliedProducts, setAppliedProducts] = useState([])
  useEffect(() => {
    const storedProductId = getStoredProduct();
    if (products.length > 0) {
      const productsApplied = [];
      for (const id of storedProductId) {
        const product = products.find((product) => product.id === id);
        if (product) {
            productsApplied.push(product);
        }
      }
      setAppliedProducts(productsApplied);
    }
  }, [products]);
    return (
        <div className="mx-auto container">
            {
                appliedProducts.map((product) => <div key={product.id}>
                <div className="flex mt-5 rounded-lg w-10/12 space-x-5">
                  <div>
                    <img className="w-52 h-44" src={product.img} alt="" />
                  </div>
                  <div className="mt-3 space-y-2">
                    <h3 className="font-bold shadow-2xl w-20 rounded-lg py-1 text-center">
                      {product.title}
                    </h3>
                    <h2 className="font-bold text-lg">{product.name}</h2>
                    <h3 className="font-bold">
                      ${product.price}
                    </h3>
                    
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default Purchased;