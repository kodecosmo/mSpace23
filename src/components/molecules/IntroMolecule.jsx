export default function IntroMolecule() {
    
    return (
        <section id="intro" className="font-montserrat w-full max-w-5xl mx-auto flex flex-col items-center justify-start text-left text-base">

          {/* Hero section */}
            <div className="w-full flex md:flex-row flex-col-reverse pt-8 px-16 box-border items-center justify-start gap-[43px] z-10 font-poppins">

                <div className="flex-1">
                    <div className="w-full flex flex-col items-start justify-start gap-[30px]">

                        <b className="inline-block text-3xl font-merriweather leading-normal lg:text-6xl md:text-5xl">Start Asking, Start Learning</b>

                        <div className="text-lg inline-block opacity-[0.5]">
                            <p className="leading-8">Empower your learning journey. Start Asking, Start Learning. Discover answers, connect with experts, and excel academically</p>
                            <p className="leading-9">After all the best way to learn is by asking questions!</p>
                        </div>

                        <div className="flex">

                            <button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-orange-900 font-semibold">Post a Question</button>

                            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex justify-center items-center">
                                <span>My questions</span>
                                <img className="overflow-hidden" alt="" fill={true} src="/arrow.svg" />
                            </button>

                        </div>
                    </div>

                    <div className="flex flex-wrap flex-2 items-start justify-between gap-3 text-sm mt-8">

                        <div className="flex sm:flex-row flex-col text-center items-center justify-start gap-3">
                            <img className="w-14 h-14" alt="Ask Any Question" fill={true} src="/icon.svg" />
                            <div className="font-semibold">Ask Questions</div>
                        </div>

                        <div className="flex sm:flex-row flex-col text-center items-center justify-start gap-[14.05px]">
                            <img className="w-14 h-14" alt="Schedule Tutoring Sessions" fill={true} src="/icon1.svg" />
                            <div className="font-semibold">Schedule Sessions</div>
                        </div>

                        <div className="flex sm:flex-row flex-col text-center items-center justify-start gap-[14.05px]">
                            <img className="w-14 h-14" alt="Clarify All Your Doubts" fill={true} src="/icon2.svg" />
                            <div className="font-semibold">Clarify Doubts</div>
                        </div>

                    </div>

                </div>

                <img className="flex-1 max-w-full overflow-hidden h-[654.93px] md:object-scale-down object-cover lg:block" alt="" fill={true} src="/content@2x.png" />

            </div>

        </section>
    )
}