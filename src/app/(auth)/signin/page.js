'use client';
import React from 'react';
// import signIn from '@/firebase/auth/signin';
import { signIn } from '@/firebase/auth/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Page() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push('/dashboard');
  };
  return (
    <form onSubmit={handleForm} className="form mt-4">
      <div className="text-sm text-pink-800 "></div>
      <div className="mt-6 relative">
        <input
          onChange={(e) => setEmail(e.target.value)}
          required
          id="email"
          name="email"
          type="email"
          className="text-sm peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
          placeholder="example@mail.com"
        />
        <label
          htmlFor="email"
          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
        >
          Email address
        </label>
      </div>
      <div className="mt-10 relative">
        <input
          onChange={(e) => setPassword(e.target.value)}
          required
          id="password"
          type="password"
          name="password"
          className="text-sm peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
          placeholder="Password"
        />
        <label
          htmlFor="password"
          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
        >
          Password
        </label>
      </div>
      <div className="mt-7">
        <button
          type="submit"
          className="w-full py-3 rounded bg-gradient-to-br text-white font-medium font-sans shadow-xl transform hover:-translate-x hover:scale-105 from-pink-800 to-pink-700 hover:from-pink-900 hover:to-pink-800"
        >
          Sign in
        </button>
      </div>
      <div className="flex mt-7 items-center text-center">
        <hr className="border-gray-300 border-1 w-full rounded-md"></hr>
        <label className="block font-medium text-sm text-gray-600 w-full">
          OR
        </label>
        <hr className="border-gray-300 border-1 w-full rounded-md"></hr>
      </div>
      <div className="flex mt-6 justify-center w-full">
        <Button variant="destructive">Facebook</Button>
        <Button>Google</Button>
      </div>
      <div className="mt-7">
        <div className="flex justify-center items-center text-sm">
          <label className="mr-2">Need an account?</label>
          <Link
            href="/signup"
            className=" text-indigo-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
          >
            Create an account
          </Link>
        </div>
      </div>
      <div className="m-10">
        <Button>Add URL</Button>
      </div>
    </form>
  );
}
