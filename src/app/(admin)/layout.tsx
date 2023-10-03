"use client";
import { AuthContextProvider } from "@/context/AuthContext";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen font-sans dark:bg-gray-700">
      {/* <Sidebar className="visible ? 'hidden lg:flex': 'flex'" />
      <Navbar /> */}
      <AuthContextProvider>{children}</AuthContextProvider>
    </div>
  );
}
