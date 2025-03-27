import { useState } from "react";

interface Variant {
  variantType: string;
  variation: string;
}
const Variation = () => {
  const [variants, setVariants] = useState([
    { variantType: "", variation: "" },
  ]);

  const handleAddVariant = () => {
    setVariants([...variants, { variantType: "", variation: "" }]);
  };
  const handleVariantChange = (
    index: number,
    field: keyof Variant,
    value: string
  ) => {
    const newVariants = [...variants];
    newVariants[index][field] = value;
    setVariants(newVariants);
  };
  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-sm">
      <h3 className="text-l font-bold text-gray-700 mb-4">Variants</h3>

      {variants.map((variant, index) => (
        <div key={index} className="flex items-end mb-4 space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Variant Type
            </label>
            <select
              className="mt-1 text-[14px] block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={variant.variantType}
              onChange={(e) =>
                handleVariantChange(index, "variantType", e.target.value)
              }
            >
              <option value="">Select Variant Type</option>
              <option value="Size">Size</option>
              <option value="Color">Color</option>
              <option value="Material">Material</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Variation
            </label>
            <input
              type="text"
              placeholder="Enter variation"
              className="mt-1 text-[14px] block w-full px-4 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={variant.variation}
              onChange={(e) =>
                handleVariantChange(index, "variation", e.target.value)
              }
            />
          </div>

          <div
            className="flex items-center justify-center w-8 h-8 bg-red-400 text-white rounded cursor-pointer"
            onClick={() => {
              const newVariants = [...variants];
              newVariants.splice(index + 1, 0, {
                variantType: "",
                variation: "",
              });
              setVariants(newVariants);
            }}
          >
            <span className="text-lg">+</span>
          </div>
        </div>
      ))}

      <div className="mt-4">
        <button
          type="button"
          onClick={handleAddVariant}
          className="flex items-center px-2 py-2 text-[14px] bg-blue-200 text-blue-800  cursor-pointer rounded-md hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="material-symbols-outlined">add</span>
          <span>Add Variant</span>
        </button>
      </div>
    </div>
  );
};

export default Variation;
