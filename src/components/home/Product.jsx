import { Link } from "react-router-dom";


function Product({product}) {
    const {name, id, description, price, imageUrl} = product;
  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={imageUrl} alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description.slice(0, 45)}</p>
        <div className="card-actions justify-end">
        <Link className="btn btn-active btn-accent" to={`/products/${id}`}>See details</Link>
        </div>
    </div>
    </div>
    </>
  )
}

export default Product;