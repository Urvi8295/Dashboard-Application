"use client";

export default function TopCategory() {
  const phonesData = [
    {
      Categoryname: "Smart Phone",
      price: "1,500",
      tag: "+12%",
    },
    {
      Categoryname: "Tablet",
      price: "1,460",
      tag: "-5%",
    },
    {
      Categoryname: "Earphone",
      price: "1,229",
      tag: "0%",
    },
    {
      Categoryname: "Laptop & PC",
      price: "982",
      tag: "+19%",
    },
    {
      Categoryname: "Mouse",
      price: "791",
      tag: "-25%",
    },
    {
      Categoryname: "USB Drive",
      price: "679",
      tag: "+11%",
    },
    {
      Categoryname: "Camera",
      price: "679",
      tag: "+11%",
    },
  ];

  const getRandomColorClass = () => {
    const colors = [
      "bg-blue-500 text-white",
      "bg-red-500 text-white",
      "bg-green-500 text-white",
      "bg-yellow-500 text-white",
      "bg-pink-500 text-white",
      "bg-purple-500 text-white",
      "bg-orange-500 text-white",
      "bg-teal-500 text-white",
    ];
  
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };

  
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="rounded-2xl px-5 pt-5 bg-white shadow-default pb-6 dark:bg-gray-900 sm:px-6 sm:pt-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Top Category
            </h3>
            <p className="mt-0.5 text-gray-500 text-theme-sm dark:text-gray-400 text-xs">
              Top Category in This Month
            </p>
          </div>
          <span className="material-symbols-outlined text-gray-400 cursor-pointer">
            more_vert
          </span>
        </div>
      </div>

      <div className="space-y-4 pb-4">
        {phonesData.map((phone, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-6 pb-3"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-3xl dark:bg-gray-800"></div>

              <span className="font-medium text-gray-800 text-[15px]">
                {phone.Categoryname}
              </span>
            </div>
            <div className="flex items-center gap-1.5 ml-4 text-gray-800">
              <span className="text-[14px] font-medium">{phone.price}</span>
              {/* <span
                className={`inline-flex items-center text-[12px] text-center px-2 py-0.5 rounded-lg ${getRandomColorClass()}`}
              >
                {phone.tag}
              </span>{" "} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
