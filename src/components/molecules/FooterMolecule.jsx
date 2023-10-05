function FooterMolecule() {

    const appName = process.env.NEXT_PUBLIC_APP_NAME;

    const d = new Date();
    let year = d.getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-900 border-t">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img
                                src="/favicon.svg"
                                className="h-12 mr-3"
                                alt="FlowBite Logo"
                            />
                            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                                {appName}
                            </span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Resources
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/search" className="hover:underline">
                                        Search
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="/feed" className="hover:underline">
                                        Feed
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="/packages" className="hover:underline">
                                        Packages
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="/services" className="hover:underline">
                                        Services
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="/faq" className="hover:underline">
                                        Faq
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="/about-us" className="hover:underline">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact-us" className="hover:underline">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Follow us
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/kodecosmo"
                                        className="hover:underline "
                                    >
                                        Github
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="privacy-policy" className="hover:underline">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="/terms-and-conditions" className="hover:underline">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <a href="/" className="hover:underline">{appName}</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="/about-us" className="mr-4 hover:underline md:mr-6">About</a>
                        </li>
                        <li>
                            <a href="/privacy-policy" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/terms-and-conditions" className="mr-4 hover:underline md:mr-6">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="/contact-us" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

function DashboardFooterMolecule() {

    const appName = process.env.NEXT_PUBLIC_APP_NAME;

    const d = new Date();
    let year = d.getFullYear();

    return (
        <footer className="w-full mt-6 p-4 px-4 lg:px-12 bg-gray-50 dark:bg-gray-900 md:flex md:items-center md:justify-between md:p-6 ">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <a href="/" className="hover:underline">{appName}</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="/about-us" className="mr-4 hover:underline md:mr-6">About</a>
                </li>
                <li>
                    <a href="/privacy-policy" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="/terms-and-conditions" className="mr-4 hover:underline md:mr-6">Terms & Conditions</a>
                </li>
                <li>
                    <a href="/contact-us" className="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>
    );
}

export { FooterMolecule, DashboardFooterMolecule };