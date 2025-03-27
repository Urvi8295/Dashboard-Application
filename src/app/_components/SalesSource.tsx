"use client";
// import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useState } from "react";
// Dynamically import the ReactApexChart component
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function SalesSource() {
  const series = [45, 30, 15, 15];

  const options: ApexOptions = {
    colors: ["#3B82F6", "#60A5FA", "#93C5FD", "#D1E7FF"],

    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "donut",
      height: 500,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "90%",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 350,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    fill: {
      type: "solid",
      colors: ["#3B82F6", "#60A5FA", "#93C5FD", "#D1E7FF"],
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="rounded-2xl px-5 pt-5 bg-white shadow-default pb-6 dark:bg-gray-900 sm:px-6 sm:pt-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Sales Source
            </h3>
          </div>
          <span className="material-symbols-outlined text-gray-400 cursor-pointer">
            more_vert
          </span>
        </div>
        <div className="relative mt-3">
          <div className="max-h-[800px]">
            {" "}
            <ReactApexChart
              options={options}
              series={series}
              type="donut"
              height={300}
            />
          </div>

          <span className="absolute inset-0 flex items-center justify-center rounded-full px-3 py-1 text-xl font-bold">
           $75.5k
          </span>
        </div>
      </div>

      <div className="px-5 pt-5 sm:px-6 sm:pt-6 pb-5 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#3B82F6" }}
            ></span>
            <span className="text-sm text-gray-700">Offical Website</span>
          </div>
          <span className="text-sm font-semibold text-gray-800">$10,000</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#60A5FA" }}
            ></span>
            <span className="text-sm text-gray-700">Offline Store</span>
          </div>
          <span className="text-sm font-semibold text-gray-800">$10,000</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#93C5FD" }}
            ></span>
            <span className="text-sm text-gray-700">Amazon Store</span>
          </div>
          <span className="text-sm font-semibold text-gray-800">$10,000</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#D1E7FF" }}
            ></span>
            <span className="text-sm text-gray-700">Reseller</span>
          </div>
          <span className="text-sm font-semibold text-gray-800">$10,000</span>
        </div>
      </div>
    </div>
  );
}
