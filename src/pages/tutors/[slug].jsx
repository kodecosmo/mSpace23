import { useRouter } from "next/router";
import NavbarMolecule from "../../components/molecules/NavbarMolecule";
import FooterMolecule from "@/components/molecules/FooterMolecule";
import TeacherProfile from "@/components/atoms/navbar/TeacherprofileAtom";


export default function Tutors() {
    const router = useRouter();
    return (
        <>

            <NavbarMolecule />
            <main style={{ marginTop: '78px' }} className='w-full'></main>
            <TeacherProfile teachername="Bonnie Green" teachernamedescription="This is the description about the teacher"
                subject="Chemistry" rating="5 out of 5 " />


            <main className="max-w-5xl mx-auto">
                <section className="font-sans antialiased text-gray-600 min-h-full flex flex-col mt-[30px]">


                    <section className="font-sans antialiased text-gray-600 min-h-full flex flex-col">
                        <div className="relative overflow-hidden ">
                            <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-12">
                                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">

                                    Topics
                                </h1>
                                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                                    ------------------
                                </p>


                            </div>

                        </div>

                        <div class="relative mx-auto max-w-[37.5rem] pt-30 text-center pb-12">
                            <a href="#" aria-current="page" class="px-6 py-4 text-sm font-medium text-white bg-orange-400 border border-gray-200 rounded-l-lg hover:bg-orange-500 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                Organic Chemistry
                            </a>
                            <a href="#" aria-current="page" class="px-6 py-4 text-sm font-medium text-white bg-orange-400 border border-gray-200 rounded-l-lg hover:bg-orange-500 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                Inorganic Chemistry
                            </a>
                            <a href="#" aria-current="page" class="px-6 py-4 text-sm font-medium text-white bg-orange-400  border border-gray-200 rounded-l-lg hover:bg-orange-500 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                Chemical Calculations
                            </a>
                        </div>

                    </section>
                </section>
            </main>

            <FooterMolecule />
        </>
    );
}
