"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface AppSidebarProps {
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppSidebar: React.FC<AppSidebarProps> = ({ setIsMobileOpen }) => {
  const pathname = usePathname();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen((prev) => !prev);
  };

  return (
    <div
      className={`transition-all duration-300 ease-in-out
       xl:w-64`}
    >
      <div className="w-64 h-screen pt-4 pd-4 border-gray-300 lg:border-r sticky top-0 text-[15px]">
        <div className="relative">
          <button
            onClick={() => setIsMobileOpen(false)}
            className="absolute top-1 right-2  hover:bg-gray-300 lg:hidden"
          >
            <span className="material-symbols-outlined text-gray-600">
              close
            </span>
          </button>

          <div className="flex items-center justify-center mb-4">
            <span className="material-symbols-outlined mr-2">dashboard</span>
            <div className="text-xl font-semibold">Admin</div>
          </div>
        </div>

        <ul>
          <li className="mb-2">
            <Link
              href="/"
              className={`flex items-center py-2.5 px-4 ${
                pathname === "/"
                  ? "bg-blue-200 text-blue-700 border-l-4 border-blue-800"
                  : "text-gray-700"
              } hover:bg-blue-200 hover:text-blue-700 `}
            >
              <span className="material-symbols-outlined mr-2">dashboard</span>{" "}
              Dashboard
            </Link>
          </li>
          <li>
            <button
              onClick={toggleSubmenu}
              className={`flex items-center justify-between w-full py-2.5 px-4 text-left ${
                pathname === "/products" || pathname === "/products/add-product"
                  ? "bg-blue-200 text-blue-700"
                  : "text-gray-700"
              } hover:bg-blue-200 hover:text-blue-700`}
            >
              <div className="flex items-center">
                <span className="material-symbols-outlined mr-2">
                  shopping_cart
                </span>
                <span className="font-medium">E-commerce</span>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-xs font-medium text-white bg-blue-400 border border-blue-400 rounded px-1.5 py-0.5">
                  2
                </span>

                <span className="mt-2 text-sm">
                  {isSubmenuOpen ? (
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "24px" }}
                    >
                      arrow_drop_up
                    </span>
                  ) : (
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "24px" }}
                    >
                      arrow_drop_down
                    </span>
                  )}
                </span>
              </div>
            </button>

            {isSubmenuOpen && (
              <ul className="mt-2">
                <li className="mb-2">
                  <Link
                    href="/products"
                    className={`flex items-center py-2.5 px-4 pl-11 ${
                      pathname === "/products" ||
                      pathname === "/products/add-product"
                        ? "bg-blue-200 text-blue-700 border-l-4 border-blue-800"
                        : "text-gray-700"
                    } hover:bg-blue-200 hover:text-blue-700 `}
                  >
                    Products
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/"
                    className={`flex items-center py-2.5 px-4 pl-11 ${
                      pathname === "/categories"
                        ? "bg-blue-200 text-blue-700 border-l-4 border-blue-800"
                        : "text-gray-700"
                    } hover:bg-blue-200 hover:text-blue-700 `}
                  >
                    Categories
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="mb-2">
            <Link
              href="/"
              className={`flex items-center py-2.5 px-4 ${
                pathname === "/projects"
                  ? "bg-blue-200 text-blue-700 border-l-4 border-blue-800"
                  : "text-gray-700"
              } hover:bg-blue-200 hover:text-blue-700 `}
            >
              <span className="material-symbols-outlined mr-2">task</span>{" "}
              Projects
            </Link>
          </li>

          <li className="mb-2">
            <Link
              href="/"
              className={`flex items-center py-2.5 px-4 ${
                pathname === "/files"
                  ? "bg-blue-200 text-blue-700 border-l-4 border-blue-800"
                  : "text-gray-700"
              } hover:bg-blue-200 hover:text-blue-700 `}
            >
              <span className="material-symbols-outlined mr-2">folder</span>{" "}
              File Manager
            </Link>
          </li>

          <li className="mb-2">
            <Link
              href="/"
              className={`flex items-center py-2.5 px-4 ${
               pathname === "/chats"
                  ? "bg-blue-200 text-blue-700 border-l-4 border-blue-800"
                  : "text-gray-700"
              } hover:bg-blue-200 hover:text-blue-700 `}
            >
              <span className="material-symbols-outlined mr-2">chat</span>{" "}
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppSidebar;
