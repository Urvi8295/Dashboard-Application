// app/page.tsx
"use client";

import React, { useState } from "react";
import { EcommerceMetrics } from "./_components/EcommerceMetrics";
import MonthlyTarget from "./_components/MonthlyTarget";
import StatisticsChart from "./_components/StatisticsChart";
import SalesSource from "./_components/SalesSource";
import TopProduct from "./_components/TopProduct";
import TopCategory from "./_components/TopCategory";
import RecentOrders from "./_components/RecentOrder";
import CustomerGrowth from "./_components/CustomerGrowth";

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDiv = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="main">
      <div className="flex justify-between mb-5 flex-wrap gap-2">
        <div className="flex flex-col">
          <span className="text-2xl font-medium whitespace-nowrap">
            Welcome Back Jenil Patel
          </span>
          <span className="text-xs text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>

        <div className="relative">
          <div
            className="flex items-center p-2 cursor-pointer text-[13px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            onClick={toggleDiv}
          >
            <span className="material-symbols-outlined mr-1.5">date_range</span>{" "}
            <span>Select Date</span>
          </div>
          {isOpen && (
            <div className="absolute top-9 right-0 p-4 w-40 bg-white border border-gray-300 shadow-lg">
              <div>Select the date</div>
              <button onClick={toggleDiv} className="mt-2 text-blue-500">
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <EcommerceMetrics />

        <div className="col-span-12 xl:col-span-4">
          <MonthlyTarget />
        </div>
        <div className="col-span-12 xl:col-span-8">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-4">
          <SalesSource />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <TopProduct />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <TopCategory />
        </div>

        <div className="col-span-12 xl:col-span-8">
          {" "}
          <RecentOrders />{" "}
        </div>

        <div className="col-span-12 xl:col-span-4">
          <CustomerGrowth />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
