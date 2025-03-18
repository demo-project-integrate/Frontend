import React from "react";
import productData from "../../data/product.json";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
const ProductList = () => {
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
                <td className="py-2 px-4 whitespace-nowrap">{product.productName}</td>
                <td className="py-2 px-4">{product.description.slice(0,50)}{"..."}</td>
                <td className="py-2 px-4 ">
                  ₹{product.price.toFixed(2)}
                </td>
                <td className="py-2 px-4 text-gray-500">{product.hcnCode}</td>
                <td>
                  <MdDelete />
                </td>
                <td>
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
