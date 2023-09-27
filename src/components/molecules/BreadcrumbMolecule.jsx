import BreadcrumbLinkAtom from "@/components/atoms/navbar/BreadcrumbLinkAtom";

function MainBreadcrumb({ subPage1URL = "", subPage2URL = "" }) {

    const appUrl = process.env.NEXT_PUBLIC_APP_URL;

    return (
        <nav className="flex justify-between pl-7" aria-label="Breadcrumb">
            <ol className="inline-flex items-center mb-3 sm:mb-0">

                <li>
                    <a href="/">
                        <button className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-800 bg-transparent rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700">
                            {appUrl}
                        </button>
                    </a>
                </li>

                {(subPage1URL == "") ? "" : <SubMainBreadcrumb subPage={subPage1URL} />}

                {((subPage1URL == "dashboard") && subPage2URL != "") ? <SubDashboardBreadcrumb subPage={subPage2URL} /> : ""}

            </ol>
        </nav>
    );
}

function SubMainBreadcrumb({ subPage }) {
    return (
        <>
            <span className="mx-2 text-gray-400">/</span>
            <li>
                <div className="flex items-center">
                    <button
                        id="dropdownSubPage1"
                        data-dropdown-toggle="dropdown-sub-page-1"
                        className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-800 bg-transparent rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
                    >
                        {subPage}
                        <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                    <div
                        id="dropdown-sub-page-1"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                        <ul
                            className="py-2 text-sm text-gray-600 dark:text-gray-200"
                            aria-labelledby="dropdownDefault"
                        >
                            <BreadcrumbLinkAtom href="/dashboard" name="dashboard" />
                            <BreadcrumbLinkAtom href="/profile" name="profile" />
                            <BreadcrumbLinkAtom href="/calender" name="calender" />
                            <BreadcrumbLinkAtom href="/notifications" name="notifications" />
                            <BreadcrumbLinkAtom href="/feeds" name="feeds" />
                            <BreadcrumbLinkAtom href="/search" name="search" />
                            <BreadcrumbLinkAtom href="/about-us" name="about-us" />
                            <BreadcrumbLinkAtom href="/contact-us" name="contact-us" />
                            <BreadcrumbLinkAtom href="/faq" name="faq" />
                            <BreadcrumbLinkAtom href="/help" name="help" />
                        </ul>
                    </div>
                </div>
            </li>
        </>
    );
}

function SubDashboardBreadcrumb({ subPage }) {

    return (
        <>
            <span className="mx-2 text-gray-400">/</span>
            <li aria-current="page">
                <div className="flex items-center">
                    <button
                        id="dropdownSubPage2"
                        data-dropdown-toggle="dropdown-sub-page-2"
                        className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-800 bg-transparent rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
                    >
                        {subPage}
                        <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                    <div
                        id="dropdown-sub-page-2"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                        <ul
                            className="py-2 text-sm text-gray-600 dark:text-gray-200"
                            aria-labelledby="dropdownDefault"
                        >
                            <BreadcrumbLinkAtom href="/dashboard/post-question" name="post-question" />
                            <BreadcrumbLinkAtom href="/dashboard/questions" name="questions" />
                            <BreadcrumbLinkAtom href="/dashboard/answers" name="answers" />
                            <BreadcrumbLinkAtom href="/dashboard/tutoring-sessions" name="tutoring-sessions" />
                            <BreadcrumbLinkAtom href="/dashboard/transactions" name="transactions" />
                            <BreadcrumbLinkAtom href="/dashboard/packages" name="packages" />
                        </ul>
                    </div>
                </div>
            </li>
        </>
    );
}

export default MainBreadcrumb;