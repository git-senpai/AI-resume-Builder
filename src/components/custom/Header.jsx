import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-500 p-4 shadow-md flex justify-between items-center">
      <Link to={"/"}>
        <img
          src="/logo-1.jpg"
          className="cursor-pointer"
          width={50}
          height={50}
          alt="Logo"
        />
      </Link>
      <div className="flex items-center">
        {isSignedIn ? (
          <>
            <Link to={"/dashboard"}>
              <Button
                variant="outline"
                className="mr-4 text-gray-700 border-gray-300 hover:bg-gray-200 transition-colors duration-300"
              >
                Dashboard
              </Button>
            </Link>
            <UserButton className="bg-gray-100 text-gray-700 rounded-full shadow-sm p-2 hover:shadow-md transition-shadow duration-300" />
          </>
        ) : (
          <Link to={"/auth/sign-in"}>
            <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">
              Get Started
            </Button>
          </Link>
        )}
      </div>
    </div>

    
  );
}

export default Header;
