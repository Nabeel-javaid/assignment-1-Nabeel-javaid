import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";

const Nav = () => {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } = useAuth0();

  useEffect(() => {
    console.log("Auth: ",isAuthenticated)
  }, [])


  return (
    <div className="flex flex-row w-full text-slate-800 h-16 shadow-sm items-center font-bold">
      <div>
        <ul className="flex flex-row ml-6">
          <a href="#" className="cursor-pointer  p-3 rounded-lg ">
            <li className="px-4">Hamza</li>
          </a>
          <a href="#" className="cursor-pointer   p-3">
            <li className="px-4">About</li>
          </a>
          <a href="#" className="cursor-pointer p-3">
            <li className="px-4">Contact</li>
          </a>
          <a href="#" className="cursor-pointer p-3">
            <li className="px-4">Become a rider</li>
          </a>
          <a href="#" className="cursor-pointer p-3">
            <li className="px-4">Become a seller</li>
          </a>
        </ul>
      </div>
      <div
        className={`cursor-pointer p-5 ${
          isAuthenticated === true ? "bg-red-500" : "bg-green-500"
        } rounded-lg h-10 flex items-center justify-center text-white`}
      >
        {isAuthenticated === true ? (
          <div onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </div>
        ) : (
          <div onClick={loginWithRedirect}>Login</div>
        )}
      </div>
    </div>
  );
};

export default Nav;
