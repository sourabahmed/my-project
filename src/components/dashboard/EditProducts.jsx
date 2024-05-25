import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const EditProducts = () => {
  const products = useLoaderData();

  const [title, setName] = useState(products.name);
  const [price, setPrice] = useState(products.price);
  const [brand, setBrand] = useState(products.brand);
  const [id, setId] = useState(products.id);
  const [description, setDescription] = useState(products.description);
  const [imageUrl, setImageUrl] = useState(products.imageUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const imageUrl = form.imageUrl.value;

    const data = { id, name, brand, price, description, imageUrl };

      await fetch(`http://localhost:3000/products/${products.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold text-center">Edit Product</h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="id"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="btn mt-4 w-full bg-red-500 text-white p-4"
              type="submit"
              value="Edit product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;