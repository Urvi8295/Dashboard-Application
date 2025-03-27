"use client";
import Image from "next/image";
import React from "react";

export const EcommerceMetrics = () => {
  const data = [
    {
      title: "Total Projects",
      value: "6,784",
      icon: "TotalProject.svg",
    },
    {
      title: "In progress",
      value: "1.920",
      icon: "InProgress.svg",
    },
    {
      title: "Finished",
      value: "4.412",
      icon: "Finished.svg",
    },
    {
      title: "Unfinished",
      value: "329",
      icon: "Unfinished.svg",
    },
  ];
  return (
    <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6"
        >
          <div className="flex justify-between items-start">
            <div className="">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.title}
              </span>
              <h4 className="mt-2 font-semibold text-2xl text-gray-800 dark:text-white/90">
                {item.value}
              </h4>
            </div>
            <Image width={35} height={25} src={item.icon} alt="symnbol" />{" "}
          </div>
          <div className="flex items-center">
            <span className="text-sm text-green-500 mt-1">10% </span>
            <span className="material-symbols-outlined mt-1 p-0 text-green-500">
              arrow_drop_up
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              +$150 today{" "}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
