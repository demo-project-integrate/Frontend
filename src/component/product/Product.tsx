import "../../index.css";
import { useEffect, useState } from "react";
import { addProduct, getProducts } from "../../api/product"; // Import the API function

const Product = () => {
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [hsnCode, setHsnCode] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page refresh

    const productData = {
      name: product,
      description: description,
      hsnCode: hsnCode,
      price: parseFloat(price), // Convert price to number
    };

    try {
      const response = await addProduct(productData);
      console.log("Product created successfully:", response);
      alert("Product added successfully!");

      // Clear input fields after submission
      setProduct("");
      setDescription("");
      setHsnCode("");
      setPrice("");
    } catch (error) {
      
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again.");
    }
  };

useEffect(() => { 
  const response =  getProducts();
  console.log("Product List:", response);
}
  , []);

  return (
    <>
      <div className="min-h-screen px-20 m-0 flex justify-center ">
        <div className="bg-white p-8 w-full">
          <h1 className="text-3xl font-extrabold mb-6 text-center">Add Product</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="flex gap-10">
              <div className="flex flex-col w-[50%] gap-10">
                <div className="flex flex-col gap-2 w-[100%]">
                  <label htmlFor="productName" className="text-gray-700 font-semibold">
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="productName"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    placeholder="Enter product name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 w-[100%]">
                  <label htmlFor="productDesc" className="text-gray-700 font-semibold">
                    Product Description
                  </label>
                  <textarea
                    name="productDesc"
                    id="productDesc"
                    className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 h-[200px] focus:outline-none resize-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter product description"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col gap-10 w-[50%]">
                <div className="flex flex-col gap-2 w-[100%]">
                  <label htmlFor="hcnCode" className="text-gray-700 font-semibold">
                    HSN Code
                  </label>
                  <input
                    type="text"
                    value={hsnCode}
                    id="hcnCode"
                    onChange={(e) => setHsnCode(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    placeholder="Enter HSN code"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 w-[100%]">
                  <label htmlFor="productPrice" className="text-gray-700 font-semibold">
                    Price
                  </label>
                  <input
                    type="number"
                    value={price}
                    id="productPrice"
                    onChange={(e) => setPrice(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    placeholder="Enter price"
                    required
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
