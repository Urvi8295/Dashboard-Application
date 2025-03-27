"use client";
import React from "react";
import { useRouter } from "next/navigation";
import GeneralInfo from "@/app/_components/GeneralInfo";
import Media from "@/app/_components/Media";
import Pricing from "@/app/_components/Pricing";
import Inventory from "@/app/_components/Inventory";
import Variation from "@/app/_components/Variation";
import Shipping from "@/app/_components/Shipping";
import PageBreadcrumb from "@/app/common/PageBreadCrumb";

export default function AddProduct() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/products");
  };
  return (
    <div>
      <div className="flex justify-between mb-5 flex-wrap">
        <div className="flex flex-col">
          <span className="text-2xl font-medium whitespace-nowrap">
            Product{" "}
          </span>
          <span className="flex items-center text-xs text-gray-500">
          <PageBreadcrumb pageTitle="Add Product" />
          </span>
        </div>

        <div className="flex items-center gap-4 text-[14px]">
          <button
            onClick={handleClick}
            className="flex items-center py-2 px-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm mr-2">
              close
            </span>
            <span>Close</span>
          </button>

          <button
            onClick={handleClick}
            className="flex items-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm mr-2">save</span>
            <span>Save Product</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="content flex flex-col gap-2">
           <GeneralInfo/>
           <Media/>
           <Pricing/>
           <Inventory/>
           <Variation/>
           <Shipping/>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 sticky top-0">
          <div className="space-y-6">
            <div className="border border-gray-300 rounded-md p-4 shadow-sm">
              <h3 className="text-l font-bold text-gray-700 mb-4">Category</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-[14px] font-medium text-gray-700">
                    Product Category
                  </label>
                  <select className="mt-1 block w-full px-4 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Electronics</option>
                    <option>Furniture</option>
                    <option>Clothing</option>
                    <option>Accessories</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Product Tag
                  </label>
                  <select className="mt-1 block w-full px-4 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <option>New</option>
                    <option>Sale</option>
                    <option>Popular</option>
                    <option>Trending</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded-md p-4 shadow-sm">
              <h3 className="text-l font-bold text-gray-700 mb-4">Status</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Product Status
                </label>
                <select className="mt-1 block w-full px-4 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500">
                  <option>Draft</option>
                  <option>Published</option>
                  <option>Low Stock</option>
                  <option>Out of Stock</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
