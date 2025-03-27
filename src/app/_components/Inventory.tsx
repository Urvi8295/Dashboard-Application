import React from "react";

function Inventory() {
  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-sm">
      <h3 className="text-l font-bold text-gray-700 mb-4">Inventory</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">SKU</label>
          <input
            type="text"
            placeholder="Enter SKU"
            className="mt-1 text-[14px] block w-full px-4 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Barcode
          </label>
          <input
            type="text"
            placeholder="Enter Barcode"
            className="mt-1 text-[14px] block w-full px-4 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            placeholder="Enter Quantity"
            className="mt-1 text-[14px] block w-full px-4 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Inventory;
