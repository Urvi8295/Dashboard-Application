import React from "react";

function Pricing() {
  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-sm">
      <h3 className="text-l font-bold text-gray-700 mb-4">Pricing</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Base Price
          </label>
          <input
            type="number"
            placeholder="Enter base price"
            className="mt-1 text-[14px]  block w-full px-4 py-1.5   bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Discount Type
            </label>
            <select className="mt-1 text-[14px]  block w-full px-4 py-2   bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>Percentage</option>
              <option>Fixed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Discount Percentage
            </label>
            <input
              type="number"
              placeholder="Enter discount percentage"
              className="mt-1 text-[14px]  block w-full px-4 py-1.5   bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tax Class
            </label>
            <select className="mt-1 text-[14px]  block w-full px-4 py-2   bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>Standard</option>
              <option>Reduced</option>
              <option>Zero</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              VAT Amount
            </label>
            <input
              type="text"
              placeholder="Enter VAT amount"
              className="mt-1 text-[14px]  block w-full px-4 py-1.5   bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
