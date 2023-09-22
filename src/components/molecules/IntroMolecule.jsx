export default function IntroMolecule() {
    
    return (
        <section id="intro" className="w-full max-w-screen-xl mx-auto flex flex-col items-center justify-start text-left text-base">

          {/* Hero section */}
            <div className="w-full flex flex-row flex-wrap pt-8 pb-20 px-16 box-border items-center justify-start gap-[43px] z-10 font-poppins">

                <div className="flex-1">
                    <div className="w-full flex flex-col items-start justify-start gap-[30px]">

                        <b className="inline-block font-merriweather leading-normal text-6xl">Start Asking, Start Learning</b>

                        <div className="text-[19.5px] inline-block opacity-[0.5]">
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

                    <div className="flex flex-row items-start justify-start gap-3 text-[15.81px] mt-8">

                        <div className="flex flex-row items-center justify-start gap-[14.05px]">
                            <img className="w-14 h-14" alt="Ask Any Question" fill={true} src="/icon.svg" />
                            <div className="font-semibold">Ask Any Question</div>
                        </div>

                        <div className="flex flex-row items-center justify-start gap-[14.05px]">
                            <img className="w-14 h-14" alt="Schedule Tutoring Sessions" fill={true} src="/icon1.svg" />
                            <div className="font-semibold">Schedule Tutoring Sessions</div>
                        </div>

                        <div className="flex flex-row items-center justify-start gap-[14.05px]">
                            <img className="w-14 h-14" alt="Clarify All Your Doubts" fill={true} src="/icon2.svg" />
                            <div className="font-semibold">Clarify All Your Doubts</div>
                        </div>

                    </div>

                </div>

                <img className="flex-1 max-w-full overflow-hidden h-[654.93px] lg:object-scale-down object-cover lg:block hidden" alt="" fill={true} src="/content@2x.png" />

            </div>

        </section>
    )
}