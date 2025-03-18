import "../../index.css";
import { useState } from "react";
const Product = () => {
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [hcnCode, setHcnCode] = useState("");
  const [price, setPrice] = useState("");

  return (
    <>
      <div className="min-h-screen px-20 m-0 flex justify-center ">
        <div className="bg-white p-8  w-full">
          <h1 className="text-3xl  font-extrabold mb-6  text-center ">
            Add Product
          </h1>
          <form action="" className="flex flex-col  gap-10">
            <div className="flex gap-10">
            <div className="flex flex-col w-[50%] gap-10">
              <div className="flex flex-col gap-2 w-[100%] ">
                <label
                  htmlFor="productName"
                  className="text-gray-700 font-semibold"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                   placeholder="Enter product name"
                />
              </div>
              <div className="flex flex-col gap-2 w-[100%] ">
                <label
                  htmlFor="productDesc"
                  className="text-gray-700 font-semibold"
                >
                  Product Description
                </label>
                <textarea
                  name="productDesc"
                  id="productDesc"
                  className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 h-[200px] focus:outline-none resize-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter product description"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col gap-10 w-[50%]">
              <div className="flex flex-col gap-2  w-[100%]">
                <label
                  htmlFor="hcnCode"
                  className="text-gray-700 font-semibold"
                >
                  HSN Code
                </label>
                <input
                  type="text"
                  value={hcnCode}
                  id="hcnCode"
                  onChange={(e) => setHcnCode(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter HSN code"
                />
              </div>
              <div className="flex flex-col gap-2  w-[100%]">
                <label
                  htmlFor="productPrice"
                  className="text-gray-700 font-semibold"
                >
                  Price
                </label>
                <input
                  type="text"
                  value={price}
                  id="productPrice"
                  onChange={(e) => setPrice(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter price"
                />
              </div>
              
            </div>
            </div>
            <button
              type="submit"
              className="bg-blue-400 w-fit text-white font-bold py-2 px-4 rounded-lg hover:bg-[#2849a3] transition duration-300 mt-4"
            >
              Submit
            </button>
          </form>
        
        </div>
      </div>
    </>
  );
};

export default Product;
