import { useState, useEffect, useRef } from 'react';
import useSWR from 'swr';

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

    const [selectedQuestion, setQuestion] = useState({
        id: null,
        title: null,
        slug: null,
        body: null,
        answers: null,
        profile_id: null,
        subject: {
            id: null,
            name: null,
            slug: null,
            description: null,
            asset: {
                id: null,
                relative_path: null,
                complete_path: null
            },
            created_at: null,
            updated_at: null
        },
        created_at: null,
        updated_at: null
    });

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
    const updateModalButtonRef = useRef(null);
    // ------------------- update modal code end -------------------

    // ------------------- read modal code start -------------------
    const readModalId = "readQuestionModal";
    const readModalTitle = "Question";
    const readModalButtonRef = useRef(null);
    // ------------------- read modal code end -------------------

    // ------------------- delete modal code start -------------------
    const deleteModalId = "deleteQuestionModal";
    const deleteModalButtonRef = useRef(null);
    // ------------------- delete modal code end -------------------

    // -------------------------------------- modal code end --------------------------------------


    // -------------------------------------- load questions code start --------------------------------------

    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());

    //Set up SWR to run the fetcher function when calling "/api/staticdata"
    //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
    const { data, error } = useSWR('/api/questions', fetcher);

    let tableOutput;    

    if (error) {
        //Handle the error state
        tableOutput = <div className="flex justify-center items-center p-4 text-sm text-gray-500">Failed to load</div>;
    } else if (!data) {
        //Handle the loading state
        tableOutput = <div className="flex justify-center items-center p-4 text-sm text-gray-500">Loading...</div>;
    } else {
        // Loading done
        tableOutput = <TableBodyMolecule
            data={data}
            selectedQuestion={selectQuestion}
            updateModalButtonRef={updateModalButtonRef}
            readModalButtonRef={readModalButtonRef}
            deleteModalButtonRef={deleteModalButtonRef}
        />;
    }
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file

    // -------------------------------------- load questions code end --------------------------------------

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
                                            
                                            {tableOutput}
                                            
                                            {/* Update Modal Opening Button */}
                                            <input ref={updateModalButtonRef} type="button" className="hidden" data-modal-target={updateModalId} data-modal-toggle={updateModalId} />

                                            {/* Read Modal Opening Button */}
                                            <input ref={readModalButtonRef} type="button" className="hidden" data-modal-target={readModalId} data-modal-toggle={readModalId} />

                                            {/* Delete Modal Opening Button */}
                                            <input ref={deleteModalButtonRef} type="button" className="hidden" data-modal-target={deleteModalId} data-modal-toggle={deleteModalId} />

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
                                                    defaultValue={selectedQuestion.subject.id}
                                                    options={<>
                                                        <OptionAtom value="" disabled={true} text="Select subject" />
                                                        <OptionAtom value={1} text="Physics" />
                                                        <OptionAtom value={2} text="Chemistry" />
                                                        <OptionAtom value={3} text="Linerar Algebra" />
                                                        <OptionAtom value={4} text="Botany" />
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
                                    headerTitle={readModalTitle + " - " + selectedQuestion.title}
                                    fields={
                                        <dl>
                                            <DataAtom title="Category" value={selectedQuestion.subject.name} />
                                            <DataAtom title="Body" value={selectedQuestion.body} />
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