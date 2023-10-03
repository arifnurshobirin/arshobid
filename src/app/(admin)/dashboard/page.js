'use client';
import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { logOut } from '@/firebase/auth/auth';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Page() {
  const { setTheme } = useTheme();
  const { user } = useAuthContext();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logOut();
      router.push('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    if (user == null) router.push('/');
  }, [router, user]);

  return (
    <>
      <h1 className="bg-gray-700 justify align-bottom">
        Only logged in users can view this page
      </h1>
      <div className="bg-gray-700">
        <Button onClick={handleLogout}>sign out</Button>
      </div>
      <Button onClick={() => setTheme('dark')} variant="outline" size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
