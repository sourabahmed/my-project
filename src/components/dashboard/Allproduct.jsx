import { Link } from "react-router-dom";


function AllProduct({product}) {
    const {name, id, description, price, imageUrl} = product;
  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={imageUrl} alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
        </div>
        
        <div className="card-actions justify-center">
        <button className="btn btn-primary">Buy Now</button>
        <button className="btn btn-primary">Buy Now</button>
        <button className="btn btn-primary">Buy Now</button>
        </div>

    </div>
    </div>
    </>
  )
}

export default AllProduct;