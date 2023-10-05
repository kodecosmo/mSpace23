export default function DataAtom({ title = "", value = "" }) {
    return (
        <>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                {title}
            </dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                {value}
            </dd>
        </>
    );
}