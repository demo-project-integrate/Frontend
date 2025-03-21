import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/LoginPage";
import App from "../App";
import ProductPage from "../pages/ProductPage";
import InvoicePage from "../pages/InvoicePage";
import RootLayout from "../component/RootLayout";
import ProductListPage from "../pages/ProductListPage";
let router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    element: <RootLayout />,
    // Component: Root,
    children: [
        {
            path: "/dashboard",
            element: <App />,
          },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/invoice",
        element: <InvoicePage />,
      },
      {
        path: "/productlist",
        element: <ProductListPage />,
      },
    ]
  }
]);

export default router;