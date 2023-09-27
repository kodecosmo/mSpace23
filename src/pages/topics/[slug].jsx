import { useRouter } from "next/router";
import NavbarMolecule from "../../components/molecules/NavbarMolecule";
import { FooterMolecule } from "@/components/molecules/FooterMolecule";
import TeacherAtom from "@/components/atoms/navbar/TeacherAtom";

var image = "https://images.pexels.com/photos/6502817/pexels-photo-6502817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

export default function Topic() {
    const router = useRouter();
    return (
        <>
            <NavbarMolecule />
            <main className="max-w-5xl mx-auto">
                <section className="font-montserrat antialiased text-gray-600 min-h-full flex flex-col mt-[30px]">
                    <div className="relative overflow-hidden mt-10 h-[370px] items-center">
                        <img
                            src={image}
                            alt="pattern"
                            className=" absolute w-full max-w-full"
                        />

                        <div className="px-4 sm:px-6 lg:px-8">
                            <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center">
                                <div className="">

                                    <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl capitalize">
                                        Get Started with <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 capitalize">
                                            {router.query.slug}</span>
                                    </h1>
                                    <div className="flex item-center justify-center">
                                        <button type="button" className="focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 rounded-lg text-md px-7 py-4 .5 mr-2 mb-2 dark:focus:ring-orange-900 font-semibold mt-10">Post a Question</button>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                    <section className="font-sans antialiased text-gray-600 min-h-full flex flex-col">
                        <div className="relative overflow-hidden ">
                            <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-12">
                                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">

                                    Featured teachers
                                </h1>
                                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                                    Find the best teachers for your subject
                                </p>


                            </div>
                            <div className="flex mx-auto gap-8 group" >
                                <div className="group-hover:scale-[0.85]  group-hover:hover:scale-100 transition duration-200 ease-in-out">
                                    <TeacherAtom
                                        teacher="Mr. Shakthi"
                                        description="This is the description for the teacher" />
                                </div>
                                <div className="group-hover:scale-[0.85]  group-hover:hover:scale-100 transition duration-200 ease-in-out">
                                    <TeacherAtom teacher="Mr. Raveen"
                                        description="This is the description for the teacher two"
                                    />
                                </div>
                                <div className="group-hover:scale-[0.85]  group-hover:hover:scale-100 transition duration-200 ease-in-out">

                                    <TeacherAtom teacher="Mr. Shakthi"
                                        description="This is the description for the teacher" />

                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
            <FooterMolecule />
        </>
    );
}
