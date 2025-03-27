import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

interface Product {
  id: number;
  name: string;
  description: string;
  cus_name: string;
  email: string;
  status: "Delivered" | "Shipped" | "Processing";
  variants?: string;
  category?: string;
  price?: string;
  image?: string;
}

const tableData: Product[] = [
  {
    id: 1,
    name: "Handmade Pouch",
    description: "+3 other products",
    cus_name: "John Bushmil",
    email: "Johnb@mail.com",
    price: "$121.00",
    status: "Delivered",
  },
  {
    id: 2,
    name: "Leather Wallet",
    description: "+5 other products",
    cus_name: "Alice Green",
    email: "aliceg@mail.com",
    price: "$590.00",

    status: "Shipped",
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    description: "+2 other products",
    cus_name: "Michael Walker",
    email: "michaelw@mail.com",
    price: "$125.00",

    status: "Processing",
  },
  {
    id: 4,
    name: "Wooden Spoon Set",
    description: "+4 other products",
    cus_name: "Emma Scott",
    email: "emmasc@mail.com",
    price: "$348.00",

    status: "Delivered",
  },
  {
    id: 5,
    name: "Portable Speaker",
    description: "+1 other product",
    cus_name: "David Carter",
    email: "davidc@mail.com",
    price: "$607.00",

    status: "Processing",
  },
];

export default function RecentOrders() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-3 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Orders
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 cursor-pointer">
            <span className="material-symbols-outlined">tune</span>
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 cursor-pointer">
            See all
          </button>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
              >
                Products
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
              >
                Customer
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
              >
                Price
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((product) => (
              <TableRow key={product.id} className="text-[14px]">
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-11 h-11 bg-gray-100 rounded-xl dark:bg-gray-800"></div>

                    <div className="text-[15px]">
                      <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {product.name}
                      </p>
                      <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                        {product.description}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  <div>
                    <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {product.cus_name}
                    </p>
                    <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                      {product.email}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {product.price}
                </TableCell>
                <TableCell className="flex items-center justify-center py-3 text-theme-sm dark:text-gray-400">
                  <span
                    className={`inline-block px-2 py-1 mt-1.5 rounded-full ${
                      product.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : product.status === "Shipped"
                        ? "bg-blue-100 text-blue-800"
                        : product.status === "Processing"
                        ? "bg-orange-100 text-orange-800"
                        : ""
                    }`}
                  >
                    {product.status}
                  </span>
                </TableCell>

                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400 mt">
                  <span className="material-symbols-outlined cursor-pointer">
                    visibility
                  </span>
                  <span className="material-symbols-outlined ml-1 cursor-pointer">
                    delete
                  </span>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center bg-white px-3 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border  bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>

          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end ">
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-xs gap-1"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-1.5 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  className="relative inline-flex items-center px-3 py-1.5 text-sm font-semibold text-white bg-blue-500 ring-1 ring-gray-300 ring-inset hover:bg-blue-500 focus:z-20 focus:outline-offset-0"
                >
                  1
                </a>

                <a
                  href="#"
                  className="relative inline-flex items-center px-3 py-1.5 text-sm  text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-blue-500 hover:text-white focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>

                <a
                  href="#"
                  className="relative inline-flex items-center px-3 py-1.5 text-sm text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-blue-500 hover:text-white focus:z-20 focus:outline-offset-0"
                >
                  3
                </a>

                <a
                  href="#"
                  className="relative inline-flex items-center px-3 py-1.5 text-sm  text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-blue-500 hover:text-white focus:z-20 focus:outline-offset-0"
                >
                  4
                </a>

                <a
                  href="#"
                  className="relative inline-flex items-center px-3 py-1.5 text-sm  text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-blue-500 hover:text-white focus:z-20 focus:outline-offset-0"
                >
                  5
                </a>

                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-1.5 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
