export default function TD({ value, slug, type = "normal" }) {
    if (type == "extended") {
        return (
            <th className="px-4 py-3 max-w-[12rem] truncate font-medium">
                {value}
            </th>
        );
    } else if (type == "main") {
        return (
            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <a href={"/questions/" + slug} className="hover:text-blue-600 hover:cursor-pointer" target="_blank">{value}</a>
            </th>
        );
    } else if (type == "action") {
        return (
            <th className="px-4 py-3 flex items-center justify-end font-medium">
                {value}
            </th>
        );
    } else {
        return (
            <th className="px-4 py-3 font-medium">
                {value}
            </th>
        );
    }

}
