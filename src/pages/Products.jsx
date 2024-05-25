import { useEffect, useState } from "react";
import AllProducts from "../components/home/AllProducts";

function Products() {
  const [products, setProducts] = useState();
  
  useEffect(() => {
    fetch("http://localhost:3000/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products)
  return (
    <>
      {products?.map((product) => <AllProducts product={product} key={product.id}/>)}
    </>
  )
}

export default Products