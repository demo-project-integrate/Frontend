import axios from "axios";
// Define the Product Type
interface Product {
  name: string;
  description: string;
  hsnCode: string;
  price: number; // Use number for BigDecimal
}

// Function to send data to the backend
export const addProduct = async (product: Product) => {
  

  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/product/create`, product, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("keycloak-token")}`,
     
      },
      withCredentials: true, 
    });
    return response.data;
  } catch (error) {
    console.error("Error sending product data:", error);
    throw error;
  }
};

//Function to get data from the backend
export const getProducts = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/get-all` , {
      headers: {
        "Content-Type": "application/json",
         "Authorization":`Bearer ${localStorage.getItem("keycloak-token")}`,
       
      },
    });


    
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};