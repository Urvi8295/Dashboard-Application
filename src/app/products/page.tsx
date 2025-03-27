// app/page.tsx
"use client";

import React, { useState } from "react";
import ProductList from "../_components/ProductList";
import { useRouter } from "next/navigation";
import PageBreadcrumb from "../common/PageBreadCrumb";

const Products: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number | null>(1);
  const router = useRouter();

  const sections = [
    { id: 1, name: "All Product" },
    { id: 2, name: "Published" },
    { id: 3, name: "Draft" },
    { id: 4, name: "Low Stock" },
  ];

  const handleClick = () => {
    router.push("/products/add-product");
  };
  return (
    <div className="main">
      <div className="flex justify-between mb-5 flex-wrap">
        <div className="flex flex-col">
          <span className="text-2xl font-medium whitespace-nowrap">
            Product{" "}
          </span>
          <span className="flex items-center text-xs text-gray-500">
            <PageBreadcrumb pageTitle="Product List" />
          </span>
        </div>

        <div className="flex items-center gap-4 text-[14px]">
          <button className="flex items-center py-2 px-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 cursor-pointer">
            <span className="material-symbols-outlined rotate-180 mr-2">
              publish
            </span>
            <span>Export</span>
          </button>

          <button
            onClick={handleClick}
            className="flex items-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm mr-2">add</span>
            <span>Add Product</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div className="flex flex-wrap gap-1 bg-gray-100 p-2">
          {sections.map((section) => (
            <div
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`p-1 text-[13px] rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-500 hover:text-white ${
                activeSection === section.id
                  ? "bg-blue-500 text-white"
                  : "bg-white-200 text-gray-600"
              }`}
            >
              {section.name}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 items-center justify-start lg:justify-end">
          <div className="relative flex-1 lg:w-auto">
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
                className="block w-full lg:w-40 p-1.5 ps-10 text-sm text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                required
              />
            </div>
          </div>

          <div className="flex items-center p-2 text-[13px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700">
            <span className="material-symbols-outlined mr-1.5">date_range</span>{" "}
            <span>Select Date</span>
          </div>

          <button className="inline-flex text-[13px] items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 cursor-pointer">
            <span className="material-symbols-outlined">tune</span>
            Filter
          </button>

          <button className="inline-flex items-center text-[13px] gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 cursor-pointer">
            Edit Column
          </button>
        </div>
      </div>

      <div className="w-full py-11 px-2">
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
