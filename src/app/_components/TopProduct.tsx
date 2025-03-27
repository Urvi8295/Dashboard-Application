"use client";

export default function TopProduct() {
  const phonesData = [
    {
      name: "Phone 1",
      type: "Smartphone",
      price: "$1,000",
    },
    {
      name: "Phone 2",
      type: "Feature Phone",
      price: "$500",
    },
    {
      name: "Phone 3",
      type: "Gaming Phone",
      price: "$1,500",
    },
    {
      name: "Phone 4",
      type: "Flagship Phone",
      price: "$2,000",
    },
    {
      name: "Phone 5",
      type: "Budget Phone",
      price: "$300",
    },
    {
      name: "Phone 6",
      type: "Foldable Phone",
      price: "$2,500",
    },
    {
      name: "Phone 7",
      type: "Foldable Phone",
      price: "$2,500",
    },
  ];
  return (
    <div className="rounded-2xl flex-grow border border-gray-200 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="rounded-2xl px-5 pt-5 bg-white shadow-default pb-6 dark:bg-gray-900 sm:px-6 sm:pt-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Top Products
            </h3>
            <p className="mt-0.5 text-gray-500 text-theme-sm dark:text-gray-400 text-xs">
              Top Product in This Month
            </p>
          </div>
          <span className="material-symbols-outlined text-gray-400 cursor-pointer">
            more_vert
          </span>
        </div>
      </div>

      <div className="space-y-4 pb-4">
        {phonesData.map((phone, index) => (
          <div key={index} className="flex items-center justify-between px-6">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center justify-center w-11 h-11 bg-gray-100 rounded-xl dark:bg-gray-800"></div>

              <div className="flex flex-col">
                <span className="font-medium text-gray-800">
                  {phone.name}
                </span>
                <span className="text-xs text-gray-400">{phone.type}</span>
              </div>
            </div>
            <div className="ml-4 text-lg font-medium text-gray-800">
              {phone.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
