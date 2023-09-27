export default function BreadcrumbLinkAtom({ href, name}) {
    return (
        <li>
            <a
                href={href}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
                {name}
            </a>
        </li>
    )
}