import { useState } from "react";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  const [isProductSubMenuOpen, setIsProductSubMenuOpen] = useState(false);

  const toggleProductSubMenu = () => {
    setIsProductSubMenuOpen(!isProductSubMenuOpen);
  };

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
          to={"/invoice"}
          className={({ isActive }) =>
            `py-2 px-4 text-white font-semibold ${
              isActive ? "bg-blue-400 rounded px-2 mx-2" : ""
            }`
          }
        >
          Invoice
        </NavLink>
      </div>
    </div>
  );
};

export default SideMenu;
