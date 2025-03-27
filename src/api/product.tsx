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
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/product`, product, {
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIQ0NpOWQwc3R1WlZfNm16VjI2ZmZZLWY5UXFJN0JMVDNLa2JEeXZPdjIwIn0.eyJleHAiOjE3NDMwNTkxODUsImlhdCI6MTc0MzA1ODg4NSwiYXV0aF90aW1lIjoxNzQzMDU4ODg1LCJqdGkiOiI3Njk1Yzg2ZS00N2RhLTRjZWYtODI4MS1lNGU4NzJmNmIwOWMiLCJpc3MiOiJodHRwOi8vMjAuMjQ0LjEwMi4xODU6OTAwMC9yZWFsbXMvaW1zIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImM0ZmU2MDg0LThlMTEtNGM5MS1hMTZjLTllYjhmYzExY2IyYiIsInR5cCI6IkJlYXJlciIsImF6cCI6Imltcy1jbGllbnQiLCJzaWQiOiI2YzlkMmU2OC1iNjQ3LTRkNjgtYWJjYy0zYTFjYjljODMwNTYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6NTE3My8qIiwiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLWltcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6IlJpc2hpa2EgSmF0IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXZpbmFzaCIsImdpdmVuX25hbWUiOiJSaXNoaWthIiwiZmFtaWx5X25hbWUiOiJKYXQiLCJlbWFpbCI6InJpc2hpa2FqYXQwM0BnbWFpbC5jb20ifQ.eXh6hPFNAGrKFMPpryEHyKzeQ4CgrLNnqkNqtWw_GO_uKQVt2aDJywjqN2lPgsHcw8s-rh7VOdTOtYkkzhTxES9XJ8Arzo-ymcj_2f1k27NTyQ1e52fXs81LgCbkS8eK1HLTBSXbJIk8tq5IwonGqa9Ng39teAvSF31vE7anHmldiuZ9knT1gAjSqzDWUW6RoMo5f2zyE15xw-pQhWtH5rNVVwK2EqAYVW19aj-PrXEUhvp1eOvwz-y5CQGdmxrFo7346L3FFinfoOPVAQdF43N5ihccXSOYZIUGKZzk5y92eZrPEDIGh7E9uOTEG67IrBuQcNK2GkUyOhnqjwyOyg"
     
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
         "Authorization":"Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIQ0NpOWQwc3R1WlZfNm16VjI2ZmZZLWY5UXFJN0JMVDNLa2JEeXZPdjIwIn0.eyJleHAiOjE3NDMwNjQwODksImlhdCI6MTc0MzA2Mzc4OSwiYXV0aF90aW1lIjoxNzQzMDYzMDE5LCJqdGkiOiJiNDM2NDJlMy00NmM4LTRjMjMtOTBjMC1iZTY1Njc2YjZmYjMiLCJpc3MiOiJodHRwOi8vMjAuMjQ0LjEwMi4xODU6OTAwMC9yZWFsbXMvaW1zIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImM0ZmU2MDg0LThlMTEtNGM5MS1hMTZjLTllYjhmYzExY2IyYiIsInR5cCI6IkJlYXJlciIsImF6cCI6Imltcy1jbGllbnQiLCJzaWQiOiI2NzE4ZGMxOC02MzE5LTQ1ZWUtOGY3Zi1jNWM0MWJjYjRhNGIiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6NTE3My8qIiwiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLWltcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6IlJpc2hpa2EgSmF0IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXZpbmFzaCIsImdpdmVuX25hbWUiOiJSaXNoaWthIiwiZmFtaWx5X25hbWUiOiJKYXQiLCJlbWFpbCI6InJpc2hpa2FqYXQwM0BnbWFpbC5jb20ifQ.fFLZxnTkQ0L0EqL_aEx8-6zm9re9v6EVyQTXOV-CqLYZjj2GTtCiqffDrXrfjUkFscEdRZE165YzK4Q3rOWslt9negjLwNWK7iWrnhE_YZY7q_uNVqDcF4356UfpxuIU0FkwGeQxAYsYUv7CPYmGHmmQmCMeybHHn63XCdQMBcRBlSUQOY4Ls6WfoTaGWlqe8Eu7rJfkEcZvvZq6-lFyI3Z8NCAtZNkc0fYLYBNNWDTRRN3ilJRuICEG3Odr-JtcxMix13XeT46XngyqZ_zJrjnhxeX-xUrWlE1XeBcDtqK5GH5T1jQZJ4C1FqRn2RRuDoSTnASPZ6VPkoNsdCSwpw"
       
      },
    });


    
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};