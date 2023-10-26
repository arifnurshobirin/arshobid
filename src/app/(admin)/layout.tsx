"use client";
import { AuthContextProvider } from "@/context/AuthContext";
import NavbarDashboard from "@/components/NavbarDashboard";
import SidebarDashboard from "@/components/SidebarDashboard";
import { ThemeProvider } from "@/components/theme-provider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen font-sans dark:bg-gray-700">
      <SidebarDashboard />
      <NavbarDashboard />
      {/* <Sidebar className="visible ? 'hidden lg:flex': 'flex'" />
      <Navbar /> */}
      <AuthContextProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </AuthContextProvider>
    </div>
  );
}
