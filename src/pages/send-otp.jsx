import Header from '@/components/molecules/HeaderMolecule'

export default function Login() {

    const appName = process.env.NEXT_PUBLIC_APP_NAME;

    return (
        <>

            <Header title="OTP Validation - Que" description="Welcome to Que. Your online tutoring site." />

            <main className='w-full'>

                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a
                            href="/"
                            className="flex items-center mb-6 text-3xl font-semibold text-gray-900 dark:text-white"
                        >
                            <img
                                className="w-12 h-12 mr-2"
                                src="/favicon.svg"
                                alt="que-logo"
                            />
                            {appName}
                        </a>
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="mx-auto p-6 flex w-full max-w-md flex-col space-y-16">
                                <div className="flex flex-col items-center justify-center text-center space-y-2">
                                    <div className="font-semibold text-2xl">
                                        <p>OTP Validation</p>
                                    </div>
                                    <div className="flex flex-row text-sm font-medium text-gray-400">
                                        <p>We have sent a code to your mobile number +94-XXX-XXX-XXX</p>
                                    </div>
                                </div>
                                <div>
                                    <form action="/reset-password" method="post">
                                        <div className="flex flex-col space-y-16">
                                            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                                <div className="w-16 h-16 ">
                                                    <input
                                                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                                        type="text"
                                                        name=""
                                                        id=""
                                                    />
                                                </div>
                                                <div className="w-16 h-16 ">
                                                    <input
                                                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                                        type="text"
                                                        name=""
                                                        id=""
                                                    />
                                                </div>
                                                <div className="w-16 h-16 ">
                                                    <input
                                                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                                        type="text"
                                                        name=""
                                                        id=""
                                                    />
                                                </div>
                                                <div className="w-16 h-16 ">
                                                    <input
                                                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                                        type="text"
                                                        name=""
                                                        id=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col space-y-5">
                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                    >
                                                        Validate OTP
                                                    </button>
                                                </div>
                                                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                                    <p>Didn't recieve code?</p>
                                                    <a
                                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                        href="/send-otp"
                                                    >
                                                        Resend
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}