"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { logOut } from "@/firebase/auth/auth";
import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function NavbarDashboard() {
  const { setTheme } = useTheme();
  const user = useAuthContext();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/signin");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [router, user]);

  return (
    <div className="fixed flex bg-indigo-700 h-14 px-4 py-2 top-0 inset-x-0 lg:pl-8 lg:pr-10																																																																																	 z-10">
      <div className="hidden lg:w-1/2 lg:flex justify-start space-x-14">
        <a
          title="logo"
          href="#"
          className="flex justify-center items-center w-10 h-10 rounded-xl"
        >
          {/* <fa-icon :icon="['fab', 'phoenix-framework']" className="p-1 text-4xl border-4 border-pink-700 text-pink-700 rounded-md"/> */}
        </a>
        <div className="h-10 hidden lg:flex items-center space-x-6 font-semibold text-gray-300">
          <a href="#" className="hover:text-pink-800">
            Home
          </a>
          <a href="#" className="hover:text-pink-800">
            Contacts
          </a>
          <a href="#" className="hover:text-pink-800">
            Feedback
          </a>
          <a href="#" className="hover:text-pink-800">
            Help
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex justify-between lg:justify-end">
          <div className="lg:hidden">
            <a
              title="logo"
              href="#"
              className="flex justify-center items-center w-10 h-10 rounded-xl"
            >
              {/* <fa-icon :icon="['fab', 'phoenix-framework']" className="p-1 text-4xl border-4 border-pink-700 text-pink-700 rounded-md"/> */}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a
              title="search"
              href="#"
              className="flex items-center justify-center w-10 h-10 text-gray-300 hover:text-pink-700 relative"
            >
              {/* <fa-icon :icon="['fas', 'dolly']" className="text-lg"/> */}
            </a>
            <a
              title="search"
              href="#"
              className="flex items-center justify-center w-10 h-10 text-gray-300 hover:text-pink-700 relative"
            >
              {/* <fa-icon :icon="['fas', 'search']" className="text-lg"/> */}
            </a>
            <a
              title="chat"
              href="#"
              className="flex items-center justify-center w-10 h-10 text-gray-300 hover:text-pink-700 relative"
            >
              {/* <fa-icon :icon="['fas', 'comments']" className="text-lg"/> */}
              <div className="w-2 h-2 bg-pink-500 rounded-full absolute top-2 right-2 border border-white"></div>
            </a>
            <a
              title="notification"
              href="#"
              className="flex items-center justify-center w-10 h-10 text-gray-300 hover:text-pink-700 relative"
            >
              {/* <fa-icon :icon="['fas', 'bell']" className="text-lg"/> */}
              <div className="w-2 h-2 bg-pink-500 rounded-full absolute top-2 right-2 border border-white"></div>
            </a>
            <Button
              onClick={() => setTheme("dark")}
              variant="outline"
              size="icon"
            >
              <LuSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <LuMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button onClick={handleLogout}>sign out</Button>
            {/* <ColorMode />
					<!-- <Toggle v-model="toggleValue" /> -->
					<UserDropdown  :userDropdownChild="showUser" @updateUserDropdown="showUser=$event" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
