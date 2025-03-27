import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useRouter } from "next/navigation";

export default function ProductList() {
  const router = useRouter();
  interface Product {
    id: number;
    name: string;
    description: string;
    cus_name: string;
    email: string;
    variant: string;
    sku: string;
    category: string;
    stock: number;
    price: string;
    status: "Low Stock" | "Draft" | "Published" | "Out of Stock";
    added: string;
  }

  const tableData: Product[] = [
    {
      id: 1,
      name: "Handmade Pouch",
      description: "+3 other products",
      cus_name: "John Bushmil",
      email: "johnb@mail.com",
      variant: "3",
      sku: "302012",
      category: "Bag and Purse",
      stock: 10,
      price: "$121.00",
      status: "Low Stock",
      added: "29 Dec, 2024",
    },
    {
      id: 2,
      name: "Leather Wallet",
      description: "+5 other products",
      cus_name: "Alice Green",
      email: "aliceg@mail.com",
      variant: "2",
      sku: "302013",
      category: "Wallets",
      stock: 5,
      price: "$59.00",
      status: "Out of Stock",
      added: "25 Dec, 2024",
    },
    {
      id: 3,
      name: "Cotton T-Shirt",
      description: "+2 other products",
      cus_name: "Michael Walker",
      email: "michaelw@mail.com",
      variant: "1",
      sku: "302014",
      category: "Clothing",
      stock: 20,
      price: "$25.00",
      status: "Published",
      added: "15 Dec, 2024",
    },
    {
      id: 4,
      name: "Wooden Spoon Set",
      description: "+4 other products",
      cus_name: "Emma Scott",
      email: "emmasc@mail.com",
      variant: "3",
      sku: "302015",
      category: "Kitchenware",
      stock: 15,
      price: "$45.00",
      status: "Published",
      added: "10 Dec, 2024",
    },
    {
      id: 5,
      name: "Portable Speaker",
      description: "+1 other product",
      cus_name: "David Carter",
      email: "davidc@mail.com",
      variant: "1",
      sku: "302016",
      category: "Electronics",
      stock: 2,
      price: "$60.00",
      status: "Low Stock",
      added: "5 Dec, 2024",
    },
    {
      id: 6,
      name: "Wireless Headphones",
      description: "+2 other products",
      cus_name: "Sarah Lee",
      email: "sarahl@mail.com",
      variant: "4",
      sku: "302017",
      category: "Electronics",
      stock: 0,
      price: "$199.00",
      status: "Out of Stock",
      added: "30 Nov, 2024",
    },
    {
      id: 7,
      name: "Stainless Steel Water Bottle",
      description: "+1 other product",
      cus_name: "Liam Smith",
      email: "liams@mail.com",
      variant: "3",
      sku: "302018",
      category: "Outdoor Gear",
      stock: 50,
      price: "$35.00",
      status: "Published",
      added: "20 Nov, 2024",
    },
    {
      id: 8,
      name: "Smart Watch",
      description: "+1 other product",
      cus_name: "Olivia Davis",
      email: "oliviad@mail.com",
      variant: "1",
      sku: "302019",
      category: "Electronics",
      stock: 12,
      price: "$120.00",
      status: "Draft",
      added: "10 Nov, 2024",
    },
    {
      id: 9,
      name: "Leather Backpack",
      description: "+4 other products",
      cus_name: "James Brown",
      email: "jamesb@mail.com",
      variant: "2",
      sku: "302020",
      category: "Bags",
      stock: 30,
      price: "$85.00",
      status: "Published",
      added: "1 Nov, 2024",
    },
    {
      id: 10,
      name: "Digital Camera",
      description: "+5 other products",
      cus_name: "Sophia Johnson",
      email: "sophiaj@mail.com",
      variant: "3",
      sku: "302021",
      category: "Electronics",
      stock: 7,
      price: "$450.00",
      status: "Low Stock",
      added: "15 Oct, 2024",
    },
  ];

  const handleClick = (id: Number) => {
    router.push(`/products/${id}`);
  };
  return (
    <div className="max-w-full overflow-x-auto">
      <Table>
        <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
          <TableRow>
            <TableCell isHeader className="py-3 mr-2 text-center">
              <span></span>
            </TableCell>

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
              SKU
            </TableCell>

            <TableCell
              isHeader
              className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
            >
              Category
            </TableCell>

            <TableCell
              isHeader
              className="py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
            >
              Stock
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
              Added
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
              <TableCell className="py-3 w-4 h-4 text-center pr-4">
                <input type="checkbox" className="form-checkbox" />
              </TableCell>

              <TableCell className="py-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-11 h-11 bg-gray-100 rounded-xl dark:bg-gray-800"></div>
                  <div className="text-[15px]">
                    <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {product.name}
                    </p>
                    <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                      {product.variant} Variants
                    </span>
                  </div>
                </div>
              </TableCell>

              <TableCell className="py-3 text-center text-blue-500 text-theme-sm dark:text-gray-400">
                {product.sku}
              </TableCell>

              <TableCell className="py-3 text-center text-gray-500 text-theme-sm dark:text-gray-400">
                {product.category}
              </TableCell>

              <TableCell className="py-3 text-center text-gray-500 text-theme-sm dark:text-gray-400">
                {product.stock}
              </TableCell>

              <TableCell className="py-3 text-center text-gray-500 text-theme-sm dark:text-gray-400">
                {product.price}
              </TableCell>

              <TableCell className="flex items-center justify-center py-3 text-center text-theme-sm dark:text-gray-400">
                <span
                  className={`inline px-2 py-1 mt-2 rounded-full ${
                    product.status === "Low Stock"
                      ? "bg-yellow-100 text-yellow-800"
                      : product.status === "Draft"
                      ? "bg-gray-200 text-gray-700"
                      : product.status === "Published"
                      ? "bg-green-100 text-green-800"
                      : product.status === "Out of Stock"
                      ? "bg-red-100 text-red-800"
                      : ""
                  }`}
                >
                  {product.status}
                </span>
              </TableCell>

              <TableCell className="py-3 text-center text-gray-500 text-theme-sm dark:text-gray-400">
                {product.added}
              </TableCell>

              <TableCell className="py-3 text-center text-gray-500 text-theme-sm dark:text-gray-400">
                <div className="flex justify-center gap-2">
                  <span className="material-symbols-outlined cursor-pointer">
                    visibility
                  </span>
                  <span
                    className="material-symbols-outlined cursor-pointer"
                    onClick={() => handleClick(product.id)}
                  >
                    edit
                  </span>
                  <span className="material-symbols-outlined cursor-pointer">
                    delete
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center bg-white px-3 py-3">
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
  );
}
