export default function TextareaAtom({ text, name, id, placeholder, defaultValue = "", rows = 4, required = false }) {
    return (
        <div className="sm:col-span-2">
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {text}
            </label>
            <textarea
                name={name}
                id={id}
                rows={rows}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder={placeholder}
                defaultValue={defaultValue}
                required={required}
            />
        </div>
    );
}