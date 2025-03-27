import React from "react";

function GeneralInfo() {
  return (
    <form>
      <div className="border border-gray-300 rounded-md p-4 shadow-sm">
        <h3 className="text-l font-bold text-gray-700 mb-4">
          General Information
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              className="mt-1 text-[14px] block w-full px-4 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Enter description"
              className="mt-1 text-[14px] block w-full px-4 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default GeneralInfo;
