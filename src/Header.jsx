import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/clerk-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import logo1 from "/src/assets/HeaderLogo.svg";
import logo2 from "/src/assets/resume-logo.png";
function Header() {
  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="p-3 px-5 flex justify-between items-center shadow-md relative">
      <div className="flex items-center">
        <img src={logo1} alt="Main Logo" className="w-10 h-10 object-contain" />
        <img
          src={logo2}
          alt="Resume Logo"
          className="ml-1 w-48 h-12 object-contain hidden sm:block"
        />
      </div>

      {/*  Desktop or Tablet View  */}
      {isSignedIn ? (
        <div className="hidden sm:flex gap-4 items-center">
          <Link to={"/dashboard"}>
            <Button className="bg-[#9450FF] hover:bg-[#7a39e0]">
              Dashboard
            </Button>
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        // Desktop View: Show Get Started button
        <Link to={"/SignIn"} className="hidden sm:block">
          <Button>Get Started</Button>
        </Link>
      )}

      {/* Mobile View (Menu Toggle Button)  */}
      <div className="sm:hidden flex items-center gap-2">
        {isSignedIn && <UserButton afterSignOutUrl="/" />}
        {/* Hamburger/Close Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="p-2 border rounded-md"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 z-10 sm:hidden">
          {isSignedIn ? (
            <div className="flex flex-col gap-3">
              <Link to={"/dashboard"} onClick={toggleMenu}>
                <Button className="w-full bg-[#9450FF] hover:bg-[#7a39e0]">
                  Dashboard
                </Button>
              </Link>
            </div>
          ) : (
            <Link to={"/SignIn"} onClick={toggleMenu}>
              <Button className="w-full">Get Started</Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
export default Header;
