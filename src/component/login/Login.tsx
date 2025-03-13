import React from "react";

const Login: React.FC = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex m-0 p-0"
      style={{
        backgroundImage: "url('./background.jpg')",
        backgroundSize: "cover",
      }}
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-4 py-4  text-white bg-opacity-60 ">
        <img src="./logo.png" alt="" width={150} />

        <div className="text-lg">+91 1234567890</div>
      </nav>

      {/* Content */}
      <div className="flex flex-col items-center justify-center w-full text-center text-white px-0">
        <h1 className="text-6xl font-extrabold mb-4">
          Invoice Management System
        </h1>

        <p className="text-xl max-w-2xl mb-6">
          Generate invoices, track payments, and manage your finances with ease
          — all in one intuitive platform.
        </p>
        <button className="bg-gradient-to-r from-blue-400 to-blue-700  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Login Here
        </button>
      </div>
    </div>
  );
};

export default Login;
