"use client";
import Image from "next/image";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";

// Dynamically import ReactApexChart to avoid SSR issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
export default function CustomerGrowth() {
  const countryData = [
    { country: "USA", customers: "2,379 Customers", progress: "79%" },
    { country: "Japan", customers: "1,240 Customers", progress: "60%" },
    { country: "France", customers: "1,240 Customers", progress: "49%" },
    { country: "Germany", customers: "1,240 Customers", progress: "100%" },
    // { country: "South Korea", customers: "1,240 Customers", progress: "50%" },
  ];
  return (
    <div className="rounded-2xl flex-grow border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Customer Growth
          </h3>
          <p className="mt-0.5 text-gray-500 text-theme-sm dark:text-gray-400 text-xs">
            Based on Country{" "}
          </p>
        </div>
        <span className="material-symbols-outlined text-gray-400 cursor-pointer">
          more_vert
        </span>
      </div>
      <div className="my-6 overflow-hidden  rounded-2xl bg-gray-50 dark:bg-gray-900">
        <div style={{ width: "100%" }}>
          {" "}
          <Image
            src="map.svg"
            alt="Map"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>{" "}
      </div>

      <div className="space-y-5">
        <div className="flex flex-col justify-between">
          {countryData.map((data, index) => (
            <div key={index} className="flex justify-between mb-4 text-[14px]">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-3xl dark:bg-gray-800"></div>

                <div>
                  <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                    {data.country}
                  </p>
                  <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                    {data.customers}
                  </span>
                </div>
              </div>

              <div className="flex w-full max-w-[100px] items-center gap-3">
                <div className="relative block w-full h-2 max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
                  <div
                    className="absolute left-0 top-0 flex h-full items-center justify-center rounded-sm bg-blue-500 text-xs font-medium text-white"
                    style={{ width: `${data.progress}` }}
                  ></div>
                </div>
                <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90 text-xs">
                  {data.progress}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
