"use client";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const router = useRouter();

    const handleForm = async (event) => {
        event.preventDefault();

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error);
        }

        // else successful
        console.log(result);
        return router.push("/admin");
    };
    return (
        <form onSubmit={handleForm} className="form mt-6">
            <div className="text-sm text-pink-800 "></div>
            <div className="relative">
                <input
                    onChange={(e) => setuserName(e.target.value)}
                    required
                    id="username"
                    name="username"
                    type="text"
                    class="text-sm peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="john@doe.com"
                />
                <label
                    htmlFor="username"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                    User Name
                </label>
            </div>
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
            <div className="mt-6 relative">
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
            <div className="mt-6 relative">
                <input
                    onChange={(e) => confirmPassword(e.target.value)}
                    required
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    className="text-sm peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="Password"
                />
                <label
                    htmlFor="confirmPassword"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                    Confirm Password
                </label>
            </div>
            <div className="mt-6 flex">
                <label
                    htmlFor="rememberMe"
                    className="inline-flex items-center w-full cursor-pointer"
                >
                    <input
                        onChange={(e) => rememberMe(e.target.value)}
                        required
                        id="rememberMe"
                        type="checkbox"
                        className="rounded border-gray-300 text-indigo-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        name="remember"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                        I agree to the <a>Terms and Conditions</a>
                    </span>
                </label>
            </div>
            <div className="mt-7">
                <button
                    type="submit"
                    className="w-full py-3 rounded bg-gradient-to-br text-white font-medium font-sans shadow-xl transform hover:-translate-x hover:scale-105 from-pink-800 to-pink-700 hover:from-pink-900 hover:to-pink-800"
                >
                    Sign up
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
                <button className="mr-5 bg-indigo-600 border-none px-4 py-2 rounded-xl text-white shadow-xl hover:shadow-inner  transform hover:-translate-x hover:scale-105">
                    Facebook
                </button>

                <button className="bg-pink-600 border-none px-4 py-2 rounded-xl text-white shadow-xl hover:shadow-inner transform hover:-translate-x hover:scale-105">
                    Google
                </button>
            </div>
            <div className="mt-7">
                <div className="flex justify-center items-center text-sm">
                    <label className="mr-2">already account?</label>
                    <Link
                        href="/signin"
                        class=" text-indigo-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                    >
                        Sign in
                    </Link>
                </div>
            </div>
        </form>
    );
}
