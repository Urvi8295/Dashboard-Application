import React from 'react'

function Shipping() {
  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-sm">
    <h3 className="text-l font-bold text-gray-700 mb-4">Shipping</h3>
    
    {/* Checkbox */}
    <div className="flex items-center space-x-2 mb-4">
      <input
        type="checkbox"
        id="shipping-checkbox"
        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
      />
      <label htmlFor="shipping-checkbox" className="text-sm font-medium text-blue-500">
        This is a physical product
      </label>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
      <div>
        <label className="block text-sm font-medium text-gray-700">Weight</label>
        <input
          type="number"
          placeholder="Enter weight"
          className="mt-1 text-[14px] block w-full px-4 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
  
      <div>
        <label className="block text-sm font-medium text-gray-700">Height</label>
        <input
          type="number"
          placeholder="Enter height"
          className="mt-1 text-[14px] block w-full px-4 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
  
      <div>
        <label className="block text-sm font-medium text-gray-700">Length</label>
        <input
          type="number"
          placeholder="Enter length"
          className="mt-1 text-[14px] block w-full px-4 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
  
      <div>
        <label className="block text-sm font-medium text-gray-700">Width</label>
        <input
          type="number"
          placeholder="Enter width"
          className="mt-1 text-[14px] block w-full px-4 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  </div>
  
  )
}

export default Shipping