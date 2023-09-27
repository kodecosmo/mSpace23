import { useState, useEffect } from 'react';

import OptionAtom from '@/components/atoms/modals/OptionAtom';
import SelectAtom from '@/components/atoms/modals/SelectAtom';
import SubmitButtonAtom from '@/components/atoms/modals/SubmitButtonAtom';
import DeleteButtonAtom from '@/components/atoms/modals/DeleteButtonAtom';
import TextAtom from '@/components/atoms/modals/TextAtom';
import TextareaAtom from '@/components/atoms/modals/TextareaAtom';
import DashboardHeading from '@/components/molecules/DashboardHeadingMolecule';
import Header from '@/components/molecules/HeaderMolecule'
import NavbarMolecule from '@/components/molecules/NavbarMolecule'
import SideNavbarMolecule from '@/components/molecules/SideNavbarMolecule'
import CreateMolecule from '@/components/molecules/modals/CreateMolecule';
import UpdateMolecule from '@/components/molecules/modals/UpdateMolecule';
import TableBodyMolecule from '@/components/molecules/table/TableBodyMolecule';
import TablePaginationMolecule from '@/components/molecules/table/TablePaginationMolecule';
import TableHeadingMolecule from '@/components/molecules/table/TableHeadingMolecule';
import { DashboardFooterMolecule } from '@/components/molecules/FooterMolecule';

export default function DashboardQuestions() {

    // ------------------- side nav resize code starts -------------------
    const [windowHeight, setWindowHeight] = useState(0);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowHeight(window.innerHeight);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            setWindowHeight(window.innerHeight);
            window.removeEventListener('resize', handleWindowResize);
        };
    });
    // ------------------- side nav resize code ends -------------------


    // -------------------------------------- modal code start --------------------------------------

    // ------------------- create modal code start -------------------
    const createModalId = "createQuestionModal";
    const createModalTitle = "Add Question";
    // ------------------- create modal code start -------------------

    // ------------------- update modal code start -------------------
    const updateModalId = "updateQuestionModal";
    const updateModalTitle = "Edit Question";
    // ------------------- update modal code start -------------------

    // -------------------------------------- modal code ends --------------------------------------


    return (
        <>

            <Header title="StudyMate" description="Welcome to StudyMate. Your online tutoring site." />

            <NavbarMolecule type="dashboard" /> {/* `default` or `dashboard` */}

            <main style={{ marginTop: '70px' }} className='bg-gray-50 dark:bg-gray-900 flex justify-center w-full h-fit'>

                <div className='max-w-screen-2xl flex w-full'>

                    <SideNavbarMolecule windowHeight={windowHeight} />

                    <div className="m-0 w-full">
                        <div className="grid grid-cols-4">
                            <div className="flex flex-col justify-center mt-4 pb-2 col-span-4">

                                {/* Heading section start */}
                                <DashboardHeading
                                    heading="My Questions"
                                    description="Your questions posted in the platform."
                                    subPage1URL="dashboard"
                                    subPage2URL="questions"
                                />
                                {/* Heading section end */}


                                {/* ------------------------------------------------------------------------------ */}

                                {/* Start question block */}
                                <section className="bg-gray-50 dark:bg-gray-900 antialiased">
                                    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                                        {/* Start coding here */}
                                        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">

                                            <TableHeadingMolecule createModalId={createModalId} />

                                            <TableBodyMolecule updateModalId={updateModalId} />

                                            <TablePaginationMolecule />

                                        </div>
                                    </div>
                                </section>

                                {/* Create Modal */}
                                <CreateMolecule
                                    id={createModalId}
                                    headerTitle={createModalTitle}
                                    fields={
                                        <form action="#">
                                            <div className="grid gap-4 mb-4 sm:grid-cols-2">

                                                <TextAtom
                                                    type="text"
                                                    text="Name"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Type product name"
                                                    required={true}
                                                />

                                                <TextAtom
                                                    type="text"
                                                    text="Brand"
                                                    name="brand"
                                                    id="brand"
                                                    placeholder="Product brand"
                                                    required={true}
                                                />

                                                <TextAtom
                                                    type="text"
                                                    text="Price"
                                                    name="price"
                                                    id="price"
                                                    placeholder="$..."
                                                    required={true}
                                                />

                                                <SelectAtom
                                                    text="Category"
                                                    name="category"
                                                    id="category"
                                                    required={true}
                                                    options={<>
                                                        <OptionAtom selected={true} disabled={true} text="Select category" />
                                                        <OptionAtom value="TV" text="TV/Monitors" />
                                                        <OptionAtom value="PC" text="PC" />
                                                        <OptionAtom value="GA" text="Gaming/Console" />
                                                        <OptionAtom value="PH" text="Phones" />
                                                    </>}
                                                />


                                                <TextareaAtom
                                                    text="Description"
                                                    name="description"
                                                    id="description"
                                                    placeholder="Write product description here"
                                                    rows={4}
                                                    required={true}
                                                />

                                            </div>

                                            <SubmitButtonAtom text="Add new product" />

                                        </form>
                                    }
                                />


                                {/* Update Modal */}
                                <UpdateMolecule
                                    id={updateModalId}
                                    headerTitle={updateModalTitle}
                                    fields={
                                        <form action="#">
                                            <div className="grid gap-4 mb-4 sm:grid-cols-2">

                                                <TextAtom
                                                    type="text"
                                                    text="Name"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Ex. Apple iMac 27"
                                                    defaultValue="iPad Air Gen 5th Wi-Fi"
                                                    required={true}
                                                />

                                                <TextAtom
                                                    type="text"
                                                    text="Brand"
                                                    name="brand"
                                                    id="brand"
                                                    placeholder="Ex. Apple"
                                                    defaultValue="Google"
                                                    required={true}
                                                />

                                                <TextAtom
                                                    type="text"
                                                    text="Price"
                                                    name="price"
                                                    id="price"
                                                    placeholder="$..."
                                                    defaultValue="399"
                                                    required={true}
                                                />

                                                <SelectAtom
                                                    text="Category"
                                                    name="category"
                                                    id="category"
                                                    required={true}
                                                    options={<>
                                                        <OptionAtom selected={true} disabled={true} text="Select category" />
                                                        <OptionAtom value="TV" text="TV/Monitors" />
                                                        <OptionAtom value="PC" text="PC" />
                                                        <OptionAtom value="GA" text="Gaming/Console" />
                                                        <OptionAtom value="PH" text="Phones" />
                                                    </>}
                                                />


                                                <TextareaAtom
                                                    text="Description"
                                                    name="description"
                                                    id="description"
                                                    placeholder="Write a description..."
                                                    defaultValue={
                                                        "Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US"
                                                    }
                                                    rows={4}
                                                    required={true}
                                                />

                                            </div>
                                            <div class="flex items-center space-x-4">
                                                <SubmitButtonAtom text="Update question" />
                                                <DeleteButtonAtom text="Delete" />
                                            </div>

                                        </form>
                                    }
                                />

                                {/* Read modal */}
                                <div
                                    id="readProductModal"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                                >
                                    <div className="relative p-4 w-full max-w-xl max-h-full">
                                        {/* Modal content */}
                                        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                                            {/* Modal header */}
                                            <div className="flex justify-between mb-4 rounded-t sm:mb-5">
                                                <div className="text-lg text-gray-900 md:text-xl dark:text-white">
                                                    <h3 className="font-semibold ">Apple iMac 27”</h3>
                                                    <p className="font-bold">$2999</p>
                                                </div>
                                                <div>
                                                    <button
                                                        type="button"
                                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                                                        data-modal-toggle="readProductModal"
                                                    >
                                                        <svg
                                                            aria-hidden="true"
                                                            className="w-5 h-5"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                        <span className="sr-only">Close modal</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                                                    Details
                                                </dt>
                                                <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                                                    Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
                                                    processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
                                                    Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
                                                    Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
                                                </dd>
                                                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                                                    Category
                                                </dt>
                                                <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                                                    Electronics/PC
                                                </dd>
                                            </dl>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center space-x-3 sm:space-x-4">
                                                    <button
                                                        type="button"
                                                        className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                    >
                                                        <svg
                                                            aria-hidden="true"
                                                            className="mr-1 -ml-1 w-5 h-5"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                        Edit
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                                    >
                                                        Preview
                                                    </button>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                                                >
                                                    <svg
                                                        aria-hidden="true"
                                                        className="w-5 h-5 mr-1.5 -ml-1"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Delete modal */}
                                <div
                                    id="deleteModal"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                                >
                                    <div className="relative p-4 w-full max-w-md max-h-full">
                                        {/* Modal content */}
                                        <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                                            <button
                                                type="button"
                                                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                data-modal-toggle="deleteModal"
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="sr-only">Close modal</span>
                                            </button>
                                            <svg
                                                className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <p className="mb-4 text-gray-500 dark:text-gray-300">
                                                Are you sure you want to delete this item?
                                            </p>
                                            <div className="flex justify-center items-center space-x-4">
                                                <button
                                                    data-modal-toggle="deleteModal"
                                                    type="button"
                                                    className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                                >
                                                    No, cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                                                >
                                                    Yes, I'm sure
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ------------------------------------------------------------------------------ */}

                                <DashboardFooterMolecule />

                            </div>
                        </div>
                    </div>

                </div>
            </main>

        </>
    )
}