export default function BreadcrumbLinkAtom({ href = "/", name, clickable = true }) {

    let output;

    if (clickable == true) {
        output = <a href={href} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            {name}
        </a>;
    } else {
        output = <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            {name}
        </span>;
    }

    return (
        <li>
            {output}
        </li>
    )
}