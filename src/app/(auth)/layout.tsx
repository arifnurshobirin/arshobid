export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="font-sans">
            <div className="relative min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-700 dark:text-white">
                <div className="relative w-80 lg:max-w-sm">
                    <div className="card bg-indigo-700 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
                    <div className="card bg-pink-700 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
                    <div className="relative w-full rounded-3xl  px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
                        <h5 className="text-3xl text-center font-semibold leading-normal mt-0 mb-2 cursor-pointer text-indigo-700">
                            ARSHOB
                            <span className="text-3xl font-semibold text-pink-700">
                                ID
                            </span>
                        </h5>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
