import Link from "next/link";
import React from "react";

export default function SidebarDashboard() {
  return (
    <div className="fixed lg:static bottom-0 w-full lg:w-24 lg:h-full z-10">
      <div className="w-full lg:fixed lg:w-24 h-full bg-indigo-700 relative">
        <div className="flex lg:flex-col items-center justify-center h-full space-x-4 lg:space-x-0 lg:space-y-6 py-2 lg:py-4">
          <Link
            href="/admin/dashboard"
            title="home"
            className="flex lg:flex-col justify-center items-center w-10 h-10 lg:w-14 lg:h-14"
          ></Link>
        </div>
      </div>
    </div>
  );
}
