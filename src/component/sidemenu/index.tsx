import router from "../../routes";
import { NavLink } from "react-router-dom";
const SideMenu = () => {
  return (
    <div className=" w-[250px] h-full bg-gradient-to-r from-[#000d30] to-[#2849a3] hover:bg-blue-800 fixed top-0 left-0 overflow-x-hidden pt-2">
      {/* here add logo*/}
      <div className="text-center text-white text-xl flex justify-center font-bold  pt-4">
        <img src="./logo.png" alt="" width={150} />
      </div>

      <div className="flex flex-col gap-2 mt-20">

        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            `py-2 px-4 w-[] text-white font-semibold  ${
              isActive ? "bg-blue-400 rounded px-2 mx-2" : ""
            }`
          }
        >
          Dashboard
        
        </NavLink>
       <NavLink  to={"/product"}
          className={({ isActive }) =>
            `py-2 px-4 w-[] text-white font-semibold  ${
              isActive ? "bg-blue-400 rounded px-2 mx-2" : ""
            }`
          }>

      
         Product
          </NavLink>
          <NavLink  to={"/invoice"}
          className={({ isActive }) =>
            `py-2 px-4 w-[] text-white font-semibold  ${
              isActive ? "bg-blue-400 rounded px-2 mx-2" : ""
            }`
          }>

      
         Invoice
          </NavLink>
   
        {/* Add more menu items as needed */}
      </div>
    </div>
  );
};

export default SideMenu;
