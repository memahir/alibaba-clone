'use client'
import { useState } from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarContent from "./NavbarContent";
import NavbarItem from "./NavbarItem";
import Searchbar from "./ui/SearchBar";
import { Button } from "@/app/components/ui/Button"; 
import { HiOutlineUser } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  return (
    <div>
      <nav className="bg-white">
        <div className="flex items-center justify-between p-4">
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
      <div className="bg-white text-sm border-t">
        <div className="container mx-auto flex items-center justify-between px-6 py-2">
          {/* Left Section */}
          <div className="flex space-x-6 relative">
            {[
              { label: "All Categories", items: ["Electronics", "Clothing", "Home & Garden", "Beauty & Health"] },
              { label: "Featured Section", items: ["Top Sellers", "New Arrivals", "Best Deals"] },
              { label: "Trade Assurance", items: ["Secure Payments", "Refund Policy", "Buyer Protection"] }
            ].map((menu, index) => (
              <NavbarItem key={index}>
                <div
                  className="font-semibold text-gray-700 cursor-pointer hover:text-orange-600 flex items-center gap-1 relative"
                  onMouseEnter={() => setDropdownOpen(index)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  {menu.label} <IoIosArrowDown />
                </div>
                {dropdownOpen === index && (
                  <div className="absolute left-0 top-10 w-48 bg-white shadow-lg border rounded-md z-50">
                    <ul className="py-2">
                      {menu.items.map((item, i) => (
                        <li key={i} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </NavbarItem>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex space-x-6 text-gray-600 relative">
            {[
              { label: "Buyer Central", items: ["Purchase Guide", "Order Tracking", "Returns"] },
              { label: "Help Center", items: ["FAQs", "Customer Support", "Contact Us"] },
              { label: "Get The App", items: ["iOS App", "Android App", "Desktop Version"] },
              { label: "Become a Supplier", items: ["Seller Guide", "Partnerships", "Marketing Tools"] }
            ].map((menu, index) => (
              <NavbarItem key={index + 3}>
                <div
                  className="cursor-pointer hover:text-orange-600 flex items-center gap-1 relative"
                  onMouseEnter={() => setDropdownOpen(index + 3)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  {menu.label} <IoIosArrowDown />
                </div>
                {dropdownOpen === index + 3 && (
                  <div className="absolute right-0 top-10 w-48 bg-white shadow-lg border rounded-md z-50">
                    <ul className="py-2">
                      {menu.items.map((item, i) => (
                        <li key={i} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </NavbarItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
