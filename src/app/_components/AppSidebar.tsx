"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface AppSidebarProps {
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppSidebar: React.FC<AppSidebarProps> = ({ setIsMobileOpen }) => {
  const pathname = usePathname();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (
      pathname === "/products" ||
      pathname === "/products/[slug]" ||
      pathname === "/products/add-product"
    ) {
      setIsSubmenuOpen(true);
    }
  }, [pathname]);

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

          <div className="flex items-center ml-5 mb-4">
            <Image
              width={40}
              height={32}
              className="mr-4"
              src="Logo.svg"
              alt="Logo"
            />
            <div className="text-xl font-semibold">Mytech</div>
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
              <Image
                width={25}
                height={25}
                className="mr-2"
                src={"dashboard.svg"}
                alt="Dashboard"
              />
              Dashboard
            </Link>
          </li>
          <li>
            <button
              onClick={toggleSubmenu}
              className={`flex items-center justify-between w-full py-2.5 px-4 text-left border-l-0 border-white ${
                pathname.startsWith("/products")
                  ? "bg-blue-200 text-blue-700"
                  : "text-gray-700"
              } hover:bg-blue-200 hover:text-blue-700`}
            >
              <div className="flex items-center">
                <Image
                  width={28}
                  height={28}
                  className="mr-2"
                  src="Ecommerce.svg"
                  alt="E-commerce"
                />{" "}
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
                      pathname.startsWith("/products")
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
              className={`flex items-center py-2.5 px-4  border-l-4 border-white ${
                pathname === "/projects"
                  ? "bg-blue-200 text-blue-700 border-l-4 border-blue-800"
                  : "text-gray-700"
              } hover:bg-blue-200 hover:text-blue-700 `}
            >
              <Image
                width={20}
                height={20}
                className="mr-2"
                src="project.svg"
                alt="Projects"
              />
              Projects
            </Link>
          </li>

          <li className="mb-2">
            <Link
              href="/"
              className={`flex items-center py-2.5 px-4  border-l-4 border-white ${
                pathname === "/files"
                  ? "bg-blue-200 text-blue-700 border-l-4 border-blue-800"
                  : "text-gray-700"
              } hover:bg-blue-200 hover:text-blue-700 `}
            >
              <Image
                width={20}
                height={20}
                className="mr-2"
                src="files.svg"
                alt="Files"
              />
              File Manager
            </Link>
          </li>

          <li className="mb-2">
            <Link
              href="/"
              className={`flex items-center py-2.5 px-4  border-l-4 border-white ${
                pathname === "/chats"
                  ? "bg-blue-200 text-blue-700 border-l-4 border-blue-800"
                  : "text-gray-700"
              } hover:bg-blue-200 hover:text-blue-700 `}
            >
              <Image
                width={20}
                height={20}
                className="mr-2"
                src="chat.svg"
                alt="Chats"
              />{" "}
              Chats
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppSidebar;
