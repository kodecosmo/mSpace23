export default function ReadMolecule({ id, headerTitle, fields }) {
    return (
        <div
            id={id}
            tabIndex={-1}
            aria-idden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full h-screen"
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                {/* Modal content */}

                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    {/* Modal header */}
                    <div className="flex justify-between mb-4 rounded-t sm:mb-5">
                        <div className="text-lg text-gray-900 md:text-xl dark:text-white">
                            <h3 className="font-semibold ">{headerTitle}</h3>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle={id}
                                data-modal-target={id}
                            >
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                    </div>

                    {fields}

                </div>

            </div>
        </div>
    );
}