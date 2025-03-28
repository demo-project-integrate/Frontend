import React, { useState, useEffect } from "react";

import { getInvoices } from "../../api/invoice";

const InvoiceList = () => {
  interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
  }

  interface Item {
    id: number;
    productId: number;
    productName: string;
    quantity: number;
    price: number;
  }

  interface Invoice {
    id: number;
    invoiceNumber: string;
    createdAt: string;
    user: User;
    items: Item[];
  }

  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getInvoices();
      console.log("Product List:", response);
      response;
      setInvoices(response);
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Invoice List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Invoice #</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Bill To</th>
            <th className="border p-2">Product</th>
            <th className="border p-2">quantity</th>
            <th className="border p-2">price</th>

            <th className="border p-2">total</th>
          </tr>
        </thead>

        <tbody>
          {invoices.map((invoice, index) =>
            invoice.items.map((item, itemIndex) => (
              <tr key={`${index}-${itemIndex}`} className="text-center">
                {/* Show Invoice details only for the first item */}
                {itemIndex === 0 && (
                  <>
                    <td className="border p-2" rowSpan={invoice.items.length}>
                      {invoice.invoiceNumber.slice(0, 8)}...
                    </td>
                    <td className="border p-2" rowSpan={invoice.items.length}>
                      {new Date(invoice.createdAt).toLocaleDateString()}
                    </td>
                    <td className="border p-2" rowSpan={invoice.items.length}>
                      {invoice.user.name}
                    </td>
                  </>
                )}

                {/* Product details */}
                <td className="border p-2">{item.productName}</td>
                <td className="border p-2">{item.quantity}</td>
                <td className="border p-2">${item.price}</td>
                <td className="border p-2 font-bold">
                  ${item.price * item.quantity}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceList;
