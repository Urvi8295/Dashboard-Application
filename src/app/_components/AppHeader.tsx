"use client";
import React, { useState } from "react";

interface AppHeaderProps {
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: Boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({ setIsMobileOpen, isMobile }) => {
  const isActive = true;

  const toggleMobileSidebar = () => {
    setIsMobileOpen(true);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDiv = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      className={`sticky top-0 flex w-full bg-white border-gray-200 z-${
        isMobile ? "50" : "99999"
      } px-${
        isMobile ? "6" : "0"
      } dark:border-gray-800 dark:bg-gray-900 lg:border-b`}
    >
      {" "}
      <div className="flex items-center justify-between grow lg:flex-row lg:px-6">
        {isMobile ? (
          <button
            onClick={toggleMobileSidebar}
            className="lg:hidden p-2 rounded-full text-gray-600 hover:bg-gray-200"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        ) : (
          <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
            <form className="max-w-md">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-1.5 ps-10 text-sm text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  required
                />
              </div>
            </form>
          </div>
        )}
        <div className="flex gap-3 items-center">
          {!isMobile && (
            <>
              <span className="material-symbols-outlined">date_range</span>{" "}
              <span className="material-symbols-outlined">notifications</span>{" "}
              <span className="material-symbols-outlined">mail</span>{" "}
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-300 text-white text-2xl"></div>
            </>
          )}
          <div className="relative flex items-center space-x-3 p-4 pr-0">
            <div className="relative">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-300 text-white text-2xl"></div>
              <span
                className={`absolute bottom-0.5 right-0.5 w-2 h-2 rounded-full ${
                  isActive ? "bg-green-500" : "bg-red-500"
                }`}
              />
            </div>

            <div className="flex flex-col cursor-pointer" onClick={toggleDiv}>
              <span className="font-semibold text-sm whitespace-nowrap">
                Jenil Patel
              </span>
              <span className="text-xs text-gray-500">Designer</span>
            </div>

            <span
              className="material-symbols-outlined text-sm cursor-pointer"
              onClick={toggleDiv}
              style={{ margin: "0" }}
            >
              keyboard_arrow_down
            </span>

            {isOpen && (
              <div className="absolute top-15 right-0 p-4 w-40 bg-white border border-gray-300 shadow-lg">
                <div>Hello , jenil</div>
                <button onClick={toggleDiv} className="mt-2 text-blue-500">
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
