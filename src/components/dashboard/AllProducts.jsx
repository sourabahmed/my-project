import { useEffect, useState } from "react";
import AllProduct from "./Allproduct";

function AllProducts() {
  const [products, setProducts] = useState();
  
  useEffect(() => {
    fetch("http://localhost:3000/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products)
  return (
    <>
      <div>
        <h1 className="text-4xl text-center bold p-4">Products</h1>
        <div className="flex flex-wrap justify-center gap-4">
      {products?.map((product) => <AllProduct product={product} key={product.id}/>)}
      </div>
      </div>
    </>
  )
}

export default AllProducts;