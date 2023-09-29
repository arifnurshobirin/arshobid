import Link from "next/link";

export default function Page() {
    return (
        <form className="mt-4">
            <div className="text-xl text-center font-semibold leading-normal mt-0 mb-2 cursor-pointer text-black">
                Forgot Password ?
                <div className="text-base font-semibold text-gray-400">
                    Enter your email to reset your password.
                </div>
            </div>
            <div className="text-sm text-pink-800 "></div>
            <div className="mt-6 relative">
                <input
                    v-model="auth.email"
                    id="email"
                    name="email"
                    type="text"
                    className="text-sm peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="john@doe.com"
                />
                <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                    Email address
                </label>
            </div>
            <div className="mt-7">
                <button
                    type="submit"
                    className="w-full py-3 rounded bg-gradient-to-br text-white font-medium shadow-xl transform hover:-translate-x hover:scale-105 from-pink-800 to-pink-700 hover:from-pink-900 hover:to-pink-800"
                >
                    Submit
                </button>
            </div>
            <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md"></hr>
                <label className="block font-medium text-sm text-gray-600 w-full">
                    OR
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md"></hr>
            </div>
            <div className="mt-6">
                <div className="flex justify-center items-center text-sm">
                    <label className="mr-2">already account?</label>
                    <Link
                        href="/signin"
                        className=" text-indigo-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                    >
                        Sign in
                    </Link>
                </div>
            </div>
            <div className="mt-6">
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
        </form>
    );
}
