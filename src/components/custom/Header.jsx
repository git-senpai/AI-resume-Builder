import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <header className="bg-gray-900 bg-opacity-95 p-4 shadow-lg border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"} className="flex items-center space-x-3">
          <img
            src="/logo-1.jpg"
            className="w-10 h-10 rounded-full border-2 border-green-400 shadow-sm transition-transform hover:scale-105 duration-300"
            alt="Logo"
          />
          <span className="text-xl font-semibold text-white hidden sm:inline">AI Resume Builder</span>
        </Link>
        <nav className="flex items-center space-x-4">
          {isSignedIn ? (
            <>
              <Link to={"/dashboard"}>
                <Button
                  variant="outline"
                  className="bg-gray-800 text-green-400 hover:bg-white hover:text-gray-900 border border-green-400 transition-all duration-300"
                >
                  Dashboard
                </Button>
              </Link>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9 border-2 border-green-400 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-all duration-300",
                  },
                }}
              />
            </>
          ) : (
            <Link to={"/auth/sign-in"}>
              <Button className="bg-green-600 text-white hover:bg-green-700 transition-all duration-300">
                Get Started
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
