import { useState } from "react";
import { createInvoice } from "../../api/invoice";

const  Invoice = () => {
 // Ensure you import the User type
  
  const [ user , setUser] = useState("");
  const[phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  
     // Ensure user is of type User
   
     const handleGenerateInvoice = async () => {
      const invoiceData = {
        user: {
          name: user,
          email: email,
          phone: phone,
        },
        products: [
          {
            productId: Math.floor(Math.random() * 1000), // Replace with real ID if available
            productName: productName,
            quantity: Number(quantity),
            price: Number(price),
          },
        ],
      };
  
      try {
        const response = await createInvoice(invoiceData);
        console.log("Invoice created successfully:", response);
        alert("Invoice created successfully!");
      } catch (error) {
        console.error("Failed to create invoice", error);
        alert("Failed to create invoice");
      }
    };
  

    return (
      <div className="Invoice">
       
          <div className="bg-white p-5 sm:p-10 md:p-20">
            <div className="flex justify-between gap-10 sm:gap-0 flex-col-reverse sm:flex-row sm:items-start">
              <div className="border-[1px] border-black p-2 lg:text-2xl md:text-xl sm:text-lg text-base font-bold rounded-md px-10 h-auto text-center">
                Invoice
              </div>
              <div className="h-[100px] px-28 flex justify-center items-center border-[1px] rounded">
                Logo
              </div>
            </div>
            <div className="flex justify-between gap-10 my-10 md:flex-row flex-col">
              <div className="w-[100%] md:w-[50%]">
                <div className="font-semibold text-gray-600 text-2xl">From</div>
                <div className="mt-5 w-[100%] flex flex-row items-center">
                  <div className="hidden md:block w-[30%]"> Name</div>
                  <input
                    type="text"
                    placeholder="Business Name"
                    className="w-full md:w-[70%] border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
                <div className="mt-5 w-[100%] flex flex-row items-center">
                  <div className="hidden md:block w-[30%]"> Email</div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full md:w-[70%] border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
                <div className="mt-5 w-[100%] flex flex-row items-center">
                  <div className="hidden md:block w-[30%]"> Address</div>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full md:w-[70%] border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
                <div className="mt-5 w-[100%] flex flex-row items-center">
                  <div className="hidden md:block w-[30%]"> Phone</div>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full md:w-[70%] border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
                <div className="mt-5 w-[100%] flex flex-row items-center">
                  <div className="hidden md:block w-[30%]"> Business Number</div>
                  <input
                    type="text"
                    placeholder="Business Number"
                    className="w-full md:w-[70%] border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-[100%] md:w-[50%]">
                <div className="font-semibold text-gray-600 text-2xl">
                  Bill To
                </div>
                <div className="mt-5 w-[100%] flex flex-row items-center">
                  <div className="hidden md:block w-[30%]"> Name</div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full md:w-[70%] border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>
                <div className="mt-5 w-[100%] flex flex-row items-center">
                  <div className="hidden md:block w-[30%]"> Email</div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full md:w-[70%] border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-5 w-[100%] flex flex-row items-center">
                  <div className="hidden md:block w-[30%]"> Address</div>
                  <input
                    type="text"
                    placeholder="Client Address"
                    className="w-full md:w-[70%] border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"

                  />
                </div>
                <div className="mt-5 w-[100%] flex flex-row items-center">
                  <div className="hidden md:block w-[30%]"> Phone</div>
                  <input
                    type="text"
                    placeholder="Client Phone"
                    className="w-full md:w-[70%] border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                  />
                </div>
                <div className="mt-5 w-[100%] flex flex-row items-center">
                  <div className="hidden md:block w-[30%]"> Mobile</div>
                  <input
                    type="text"
                    placeholder="Mobile"
                    className="w-full md:w-[70%] border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="py-10">
              <div className="w-full md:w-[50%] flex flex-col md:flex-row md:items-center">
                <div className="w-[30%]"> Number</div>
                <input
                  type="text"
                  disabled
                  value={`INV${Math.floor(Math.random() * 10000000)}`}
                  className="w-full md:w-[70%] border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div className="mt-5 w-full md:w-[50%] flex flex-col md:flex-row md:items-center">
                <div className="w-[30%]"> Date</div>
                <input
                  type="text"
                  disabled
                  value={`${new Date().toLocaleString().split(",")[0]}`}
                  className="w-full md:w-[70%] border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div className="mt-5 w-full md:w-[50%] flex flex-col md:flex-row md:items-center">
                <div className="w-[30%]"> Terms</div>
                <input
                  type="text"
                  disabled
                  value={`On Receipt`}
                  className="w-full md:w-[70%] border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-10">
              <hr className="border-black md:block hidden" />
              <div className="w-full flex-row items-center md:flex hidden">
                <div className="w-[10%]"></div>
                <div className="w-[30%] p-2">DESC</div>
                <div className="w-[20%] p-2 text-right">RATE</div>
                <div className="w-[20%] p-2 text-right">QTY</div>
                <div className="w-[20%] p-2 text-right">AMOUNT</div>
              </div>
              <hr className="border-black" />
              <div className="w-full flex md:flex-row items-start flex-col">
                <div className="md:block hidden w-[10%] p-2">
                  <input type="checkbox" className="w-10 h-10" />
                </div>
                <div className="w-[100%] md:w-[30%] p-2 flex flex-col">
                  <input
                    type="text"
                    placeholder="Item Description"
                    className="w-full border-[1px] border-gray-400 rounded-md p-2"
                    value={productName}
                    onChange={(e)=>setProductName(e.target.value)}
                  />
                  <textarea
                    placeholder="Additional Details"
                    className="w-full border-[1px] border-gray-400 rounded-md p-2 mt-2"
                  />
                </div>
   
                <div className="w-[50%] md:w-[20%] p-2">
                  <input
                    type="text"
                    placeholder="Rate"
                    className="w-full border-[1px] border-gray-400 rounded-md p-2"
                  />
                </div>
                <div className="w-[50%] md:w-[20%] p-2">
                  <input
                    type="text"
                    placeholder="Qty"
                    className="w-full border-[1px] border-gray-400 rounded-md p-2"
                    value={quantity}
                    onChange={(e)=>setQuantity(e.target.value)}
                  />
                </div>
                <div className="w-[100%] md:w-[20%] p-2 md:block flex flex-row items-center justify-between gap-2">
                  <input
                    type="text"
                    placeholder="Amount"
                    className="w-[50%] md:w-full border-[1px] border-gray-400 rounded-md p-2"
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                  />
                  <div className="w-[50%] md:hidden block bg-red-500 text-white p-2 rounded"> DELETE </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="my-5 flex flex-row">
              <div className="w-[75%] flex flex-col items-end justify-between">
                <div>Subtotal</div>
                <div>Total</div>
                <div className="font-semibold">Balance Due</div>
              </div>
              <div className="w-[25%] flex flex-col items-end justify-between">
                <div>
                  $ 0.00
                </div>
                <div>
                  $ 0.00
                </div>
                <div className="font-semibold">
                  $ 0.00
                </div>
              </div>
            </div>
            <hr/>
            <div className="mt-5 w-full flex flex-col">
                <div className=""> Notes</div>
                <textarea
                //   type="text"
                  value={`Additional notes`}
                  className="w-full h-28 border-[1px] border-gray-400 rounded-md p-2"
                />
              </div>
              <button
              type="submit"
              className="bg-blue-400 w-fit text-white font-bold py-2 px-4 rounded-lg hover:bg-[#2849a3] transition duration-300 mt-4"
              onClick={handleGenerateInvoice}>
              Generate Invoice
            </button>
        </div>
       
      </div>
    );
  }
   
  export default Invoice;
