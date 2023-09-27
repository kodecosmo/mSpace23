import Link from 'next/link'

export default function SingleSideNavLink({ href = "#", svgPath = "", text="Single Link", count = ""  }) {
    
    return (
        <li>
            <a href={href} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg aria-hidden="true" className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    {svgPath}
                </svg>
                <span className="ml-3">{text}</span>
                <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                    {count}
                </span>
            </a>
        </li>
    )
}