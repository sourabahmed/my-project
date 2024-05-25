import { useEffect, useState } from "react";

function Products() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:5173/products")
    .then((res) => res.json())
    .then((data) => console.log(data))
  },[])
  return (
    <div>Products</div>
  )
}

export default Products