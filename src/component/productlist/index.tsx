import React, { useEffect, useState } from "react";

import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { getProducts } from "../../api/product";
const ProductList = () => {
  interface Product {
    name: string;
    description: string;
    price: number;
    hsnCode: string;
  }
  
  const [productData, setProductData] = useState<Product[]>([]);


  useEffect(() => { 
    const fetchProducts = async () => {
      const response = await getProducts();
      console.log("Product List:", response);
      setProductData(response);
    };
    fetchProducts();
  }, []);

  console.log("HYE",productData)


  
  return (
    <>
      {/* <h1 className="text-3xl font-bold mb-10 mt-15 ml-30 ">Product List</h1> */}
      <div className="flex flex-1 justify-between items-center mx-30 mt-15 mb-10">
      <h1 className="text-3xl font-bold ">Product List</h1>
        <input type="text"  className="h-10 border-[1px] border-gray-500 rounded-lg py-2 px-5" placeholder="Search"/>
      </div>

      <div className="overflow-x-auto flex">
        <table className="table-auto flex-1 mx-30  border-collapse border border-gray-300 shadow-md rounded-lg">
          <thead className="">
            <tr>
                <th  className="py-2 px-4 text-left whitespace-nowrap">S. No.</th>
              <th className="py-2 px-4 text-left">Product Name</th>
              <th className="py-2 px-4 text-left">Description</th>
              <th className="py-2 px-4 text-left">Price (₹)</th>
              <th className="py-2 px-4 text-left whitespace-nowrap">HSN Code</th>
              <th  className="py-2 px-4 text-left"></th>
              <th  className="py-2 px-4 text-left"></th>
            </tr>
          </thead>
          <tbody className=" flex-1 ">
            {productData.map((product, index) => (
              <tr
                key={index}
                className={`border-t w-[100%] border-gray-300 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="py-2 px-4 text-center">{index + 1}</td>
                <td className="py-2 px-4 whitespace-nowrap">{product.name}</td>
                <td className="py-2 px-4">{product.description}</td>
                <td className="py-2 px-4 ">
                  ₹{product.price}
                </td>
                <td className="py-2 px-4 text-gray-500">{product.hsnCode}</td>
                <td data-testid="delete-icon">
                  <MdDelete />
                </td>
                <td data-testid="edit-icon">
                  <MdEditSquare />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;

