import axios from "axios";

// Define Invoice Item Type
interface InvoiceItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
}

// Define User Type
interface User {
  name: string;
  email: string;
  phone: string;
}

// Define Invoice Type
interface Invoice {
  user: User;
  products: InvoiceItem[];
}

// Function to create an invoice
export const createInvoice = async (invoice: Invoice) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/invoices/create`,
      invoice,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("keycloak-token")}`,
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating invoice:", error);
    throw error;
  }
};

// Function to get all invoices
export const getInvoices = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/invoices/get-all`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("keycloak-token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching invoices:", error);
    throw error;
  }
};
