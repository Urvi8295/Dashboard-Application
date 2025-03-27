"use client";
import AppHeader from "@/app/_components/AppHeader";
import AppSidebar from "@/app/_components/AppSidebar";
import React, { useEffect, useState } from "react";

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1021;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(isMobileOpen)


 


  const mainContentMargin = isMobile ? "ml-0" : "";

  return (
    <div className="min-h-screen flex overflow-x-hidden">
    <input type="checkbox" id="sidebar-toggle" className="hidden peer" />
  
    {/* Sidebar */}
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transition-transform transform ${
        isMobileOpen ? "translate-x-0 z-100" : "-translate-x-full"
      } lg:relative lg:translate-x-0 lg:w-64 lg:z-0 overflow-x-hidden`} 
    >
      <AppSidebar setIsMobileOpen={setIsMobileOpen} />
    </div>
  
    {/* Main Content */}
    <div
      className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${mainContentMargin} overflow-x-hidden`}
    >
      <AppHeader setIsMobileOpen={setIsMobileOpen} isMobile={isMobile} />
  
      <div className="p-4 max-w-full md:p-6 overflow-x-hidden">
        {children}
      </div>
    </div>
  </div>
  
  );
}

export default AdminLayout;
