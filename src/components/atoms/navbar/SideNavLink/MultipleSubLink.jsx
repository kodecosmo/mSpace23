import Link from 'next/link'

export default function MultipleSubLink({ href = "#", text = "Single Link", count = "" }) {

    return (
        <li>
            <a href={href} className="flex items-center p-2 pl-11 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span>{text}</span>
                {(count == "") ? "" : <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">{count}</span>}
            </a>
        </li>
    )
}