// import { useEffect, useState } from "react";
// import AllProduct from "./Allproduct";

// function AllProducts() {
//   const [products, setProducts] = useState();
  
//   useEffect(() => {
//     fetch("http://localhost:3000/products/")
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);

//   console.log(products)
//   return (
//     <>
//       <div>
//         <h1 className="text-4xl text-center bold p-4">Products</h1>
//         <div className="flex flex-wrap justify-center gap-4">
//       {products?.map((product) => <AllProduct product={product} key={product.id}/>)}
//       </div>
//       </div>
//     </>
//   )
// }

// export default AllProducts;


import { useEffect, useState } from "react";
import AllProduct from "./Allproduct";


const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (_id) => {
    setProducts(products.filter((product) => product._id !== _id || product._id === ""));
  };

  return (
    <div className="flex justify-center flex-wrap" >
      <h1 className="text-4xl m-5 font-bold text-center">All Produts</h1>
      <div className="flex justify-center flex-wrap gap-4">
        {products.map((product) => (
          <AllProduct
            key={product._id}
            product={product}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;