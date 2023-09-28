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
import ReadMolecule from '@/components/molecules/modals/ReadMolecule';
import DataAtom from '@/components/atoms/modals/DataAtom';
import DeleteMolecule from '@/components/molecules/modals/DeleteMolecule';

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

    const [selectedQuestion, setQuestion] = useState([]);

    const selectQuestion = (question) => {
        setQuestion(question);
    };

    // ------------------- create modal code start -------------------
    const createModalId = "createQuestionModal";
    const createModalTitle = "Add Question";
    // ------------------- create modal code end -------------------

    // ------------------- update modal code start -------------------
    const updateModalId = "updateQuestionModal";
    const updateModalTitle = "Edit Question";
    // ------------------- update modal code end -------------------

    // ------------------- read modal code start -------------------
    const readModalId = "readQuestionModal";
    const readModalTitle = "How to make a bulb like Thomas?";
    // ------------------- read modal code end -------------------

    // ------------------- delete modal code start -------------------
    const deleteModalId = "deleteQuestionModal";
    // ------------------- delete modal code end -------------------

    // -------------------------------------- modal code end --------------------------------------


    return (
        <>

            <Header title="Que" description="Welcome to Que. Your online tutoring site." />

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

                                            <TableBodyMolecule selectedQuestion={selectQuestion} updateModalId={updateModalId} readModalId={readModalId} deleteModalId={deleteModalId} />

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
                                                        <OptionAtom disabled={true} text="Select category" />
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
                                                    text="Title"
                                                    name="updateQuestionTitle"
                                                    id="updateQuestionTitle"
                                                    placeholder="Ex. What is schrodinger equation?"
                                                    defaultValue={selectedQuestion.title}
                                                    required={true}
                                                />

                                                <SelectAtom
                                                    text="Subject"
                                                    name="updateQuestionSubject"
                                                    id="updateQuestionSubject"
                                                    required={true}
                                                    defaultValue=""
                                                    options={<>
                                                        <OptionAtom disabled={true} text="Select subject" />
                                                        <OptionAtom value="1" text="Physics" />
                                                        <OptionAtom value="2" text="Chemistry" />
                                                        <OptionAtom value="3" text="Linerar Algebra" />
                                                        <OptionAtom value="4" text="Botany" />
                                                    </>}
                                                />


                                                <TextareaAtom
                                                    text="Description"
                                                    name="updateQuestionDescription"
                                                    id="updateQuestionDescription"
                                                    placeholder="Write a description..."
                                                    defaultValue={selectedQuestion.body}
                                                    rows={4}
                                                    required={true}
                                                />

                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <SubmitButtonAtom text="Update question" />
                                                <DeleteButtonAtom text="Delete" />
                                            </div>

                                        </form>
                                    }
                                />


                                {/* Read Modal */}
                                <ReadMolecule
                                    id={readModalId}
                                    headerTitle={readModalTitle}
                                    fields={
                                        <dl>
                                            <DataAtom title="Details" value="Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US." />
                                            <DataAtom title="Category" value="Electronics/PC" />
                                        </dl>
                                    }
                                />


                                {/* Delete modal */}
                                <DeleteMolecule deleteModalId={deleteModalId} />

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