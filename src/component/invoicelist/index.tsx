
import { useState, useEffect } from "react";
import invoiceData from "../../data/invoice.json"; // Import JSON data

const InvoiceList = () => {
    interface Invoice {
        invoice_number: string;
        date: string;
        bill_to: string;
        items: { desc: string; qty: number; price: number; total: number }[];
        subtotal: number;
        tax: number;
        total: number;
        status: string;
    }

    const [invoices, setInvoices] = useState<Invoice[]>([]);

    useEffect(() => {
        return setInvoices(invoiceData);
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
                        <th className="border p-2">Subtotal</th>
                        <th className="border p-2">Tax</th>
                        <th className="border p-2">Total</th>
                        <th className="border p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice, index) => (
                        <tr key={index} className="text-center">
                            <td className="border p-2">{invoice.invoice_number}</td>
                            <td className="border p-2">{invoice.date}</td>
                            <td className="border p-2">{invoice.bill_to}</td>
                            <td className="border p-2">${invoice.subtotal}</td>
                            <td className="border p-2">${invoice.tax}</td>
                            <td className="border p-2 font-bold">${invoice.total}</td>
                            <td className={`border p-2 font-semibold ${invoice.status === "Paid" ? "text-green-600" : invoice.status === "Pending" ? "text-yellow-600" : "text-red-600"}`}>
                                {invoice.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvoiceList;
