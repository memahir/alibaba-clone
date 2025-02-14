import NavbarBrand from "./NavbarBrand";
import NavbarContent from "./NavbarContent";
import NavbarItem from "./NavbarItem";
import Searchbar from "./ui/SearchBar";
import { Button } from "@/app/components/ui/Button"; 
import { HiOutlineUser } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { LiaFlagUsaSolid } from "react-icons/lia";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white">
        <div className=" flex items-center justify-between p-4">
          {/* Brand Logo & Searchbar */}
          <NavbarBrand>
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold text-orange-600">Alibaba.com</span>
              <Searchbar />
            </div>
          </NavbarBrand>

          {/* Navigation Links */}
          <NavbarContent>
            <NavbarItem>
              <div>
                <p className="flex items-center">Deliver to:</p>
                <p className="flex items-center">
                  <LiaFlagUsaSolid /> US
                </p>
              </div>
            </NavbarItem>
            <NavbarItem>
              <TfiWorld className="mt-3 w-6 h-6" />
            </NavbarItem>
            <NavbarItem>
              <button className="box-content md:box-border mt-3 pr-4">
                <p>English - USD</p>
              </button>
            </NavbarItem>
            <NavbarItem>
              <FiShoppingCart className="mt-3 w-6 h-6" />
            </NavbarItem>
            <NavbarItem>
              <HiOutlineUser className="mt-3 w-6 h-6" />
            </NavbarItem>
            <NavbarItem>
              <button className="box-content md:box-border mt-3 pr-4">
                <p>Sign in</p>
              </button>
            </NavbarItem>
            <NavbarItem>
              <Button className="bg-orange-600 text-white text-sm px-5 py-2 rounded-full hover:bg-orange-700 pr-6">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </div>
      </nav>

      {/* Sub Navbar */}
      <div className="bg-white text-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-2">
          {/* Left Section */}
          <div className="flex space-x-6">
            <NavbarItem>
              <span className="font-semibold text-gray-700 cursor-pointer hover:text-orange-600">
                All Categories
              </span>
            </NavbarItem>
            <NavbarItem>
              <span className="cursor-pointer hover:text-orange-600">
                Featured Section
              </span>
            </NavbarItem>
            <NavbarItem>
              <span className="cursor-pointer hover:text-orange-600">
                Trade Assurance
              </span>
            </NavbarItem>
          </div>

          {/* Right Section */}
          <div className="flex space-x-6 text-gray-600">
            <NavbarItem>
              <span className="cursor-pointer hover:text-orange-600">
                Buyer Central
              </span>
            </NavbarItem>
            <NavbarItem>
              <span className="cursor-pointer hover:text-orange-600">
                Help Center
              </span>
            </NavbarItem>
            <NavbarItem>
              <span className="cursor-pointer hover:text-orange-600">
                Get The App
              </span>
            </NavbarItem>
            <NavbarItem>
              <span className="cursor-pointer hover:text-orange-600">
                Become a Supplier
              </span>
            </NavbarItem>
          </div>
        </div>
      </div>
    </div>
  );
}
