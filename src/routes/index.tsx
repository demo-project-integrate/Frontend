import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/LoginPage";
import App from "../App";
import ProductPage from "../pages/ProductPage";
import InvoicePage from "../pages/InvoicePage";
import RootLayout from "../component/RootLayout";
import ProductListPage from "../pages/ProductListPage";
import InvoiceListPage from "../pages/InvoiceListPage";
import BalanceSheet from "../pages/BalanceSheet";
import Cashflow from "../pages/Cashflow";
import ProfiitLoss from "../pages/Profit&Loss";
import KeycloakProvider from "../providers/keycloak";
const router = createBrowserRouter([
  {
    element: <KeycloakProvider />, // Wrap all routes with KeycloakProvider
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        element: <RootLayout />,
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
            path: "/invoicelist",
            element: <InvoiceListPage />,
          },
          {
            path: "/productlist",
            element: <ProductListPage />,
          },
          {
            path: "/balancesheet",
            element: <BalanceSheet />
          },
          {
            path: "/cashflow",
            element: <Cashflow />
          },
          {
            path: "/p&l",
            element: <ProfiitLoss />
          }
        ]
      }
    ]
  }
]);

export default router;