import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  const [isProductSubMenuOpen, setIsProductSubMenuOpen] = useState(false);
  const [isInvoiceSubMenuOpen, setIsInvoiceSubMenuOpen] = useState(false);

  const toggleProductSubMenu = () => {
    const newState = !isProductSubMenuOpen;
    setIsProductSubMenuOpen(newState);
    localStorage.setItem("isProductSubMenuOpen", JSON.stringify(newState));
  
  };
  const toggleInvoiceSubMenu = () => {    
    const newState = !isInvoiceSubMenuOpen;
    setIsInvoiceSubMenuOpen(newState);
    localStorage.setItem("isInvoiceSubMenuOpen", JSON.stringify(newState));

  }

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("isProductSubMenuOpen") || "false");
    setIsProductSubMenuOpen(savedState || false); 

    const savedStateInvoice = JSON.parse(localStorage.getItem("isInvoiceSubMenuOpen") || "false");
    setIsInvoiceSubMenuOpen(savedStateInvoice || false);
  }, []);


  return (
    <div className="w-[250px] h-full bg-gradient-to-r from-[#000d30] to-[#2849a3] hover:bg-blue-800 fixed top-0 left-0 overflow-x-hidden pt-2">
      {/* Logo */}
      <div className="text-center text-white text-xl flex justify-center font-bold pt-4">
        <img src="./logo.png" alt="Logo" width={150} />
      </div>

      <div className="flex flex-col gap-2 mt-20">
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            `py-2 px-4 text-white font-semibold ${
              isActive ? "bg-blue-400 rounded px-2 mx-2" : ""
            }`
          }
        >
          Dashboard
        </NavLink>

        <div>
          <div
            onClick={toggleInvoiceSubMenu}
            className={`py-2 px-4 text-white font-semibold cursor-pointer `}
          >
            Invoice
          </div>
          {isInvoiceSubMenuOpen && (
            <div className="flex flex-col ml-6 mt-1">
              <NavLink
                to="/invoice"
                className={({ isActive }) =>
                  `py-2 px-6 text-white font-semibold ${
                    isActive ? "bg-blue-400 rounded px-2 mx-2" : ""
                  }`
                }
              >
              Generate Invoice
              </NavLink>
              <NavLink
                to="/invoicelist"
                className={({ isActive }) =>
                  `py-2 px-6 text-white font-semibold ${
                    isActive ? "bg-blue-400 rounded px-2 mx-2" : ""
                  }`
                }
              >
                All Invoice
              </NavLink>
            </div>
          )}
        </div>
        {/* Product with Submenu */}
        <div>
          <div
            onClick={toggleProductSubMenu}
            className={`py-2 px-4 text-white font-semibold cursor-pointer `}
          >
            Product
          </div>
          {isProductSubMenuOpen && (
            <div className="flex flex-col ml-6 mt-1">
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  `py-2 px-6 text-white font-semibold ${
                    isActive ? "bg-blue-400 rounded px-2 mx-2" : ""
                  }`
                }
              >
                Add Product
              </NavLink>
              <NavLink
                to="/productlist"
                className={({ isActive }) =>
                  `py-2 px-6 text-white font-semibold ${
                    isActive ? "bg-blue-400 rounded px-2 mx-2" : ""
                  }`
                }
              >
                All Product
              </NavLink>
            </div>
          )}
        </div>

        <NavLink
          to={"/balancesheet"}
          className={({ isActive }) =>
            `py-2 px-4 text-white font-semibold ${
              isActive ? "bg-blue-400 rounded px-2 mx-2" : ""
            }`
          }
        >
          Balance Sheet
        </NavLink>
        <NavLink
          to={"/p&l"}
          className={({ isActive }) =>
            `py-2 px-4 text-white font-semibold ${
              isActive ? "bg-blue-400 rounded px-2 mx-2" : ""
            }`
          }
        >
          Profit & Loss
        </NavLink>
        <NavLink
          to={"/cashflow"}
          className={({ isActive }) =>
            `py-2 px-4 text-white font-semibold ${
              isActive ? "bg-blue-400 rounded px-2 mx-2" : ""
            }`
          }
        >
          Cashflow
        </NavLink>
      </div>
    </div>
  );
};

export default SideMenu;
