const  SubjectIndexAtom = ()=> {
    return (
            <section className="max-w-5xl px-5 mx-auto mt-16 md:mt-10 md:mb-24 text-center w-full flex flex-col items-start font-montserrat">
                <div className="grid grid-cols-6 grid-rows-2 items-stretch max-w-[550px] w-full self-center md:flex md:py-6 md:justify-between md:items-start md:max-w-[100%]">
                    <a
                        href="/topics/mathematics/"
                        className="flex flex-col items-center flex-1 border-r-[#ccc] border-r-[1px] py-2 px-[30px] gap-[2px] mt-5"
                    >
                        <img
                            src="https://brilliant.org/site_media/version-1de7ac9e60/images/homepage/topic-math.png"
                            alt="Math"
                            width="132"
                            height="132"
                            loading="lazy"
                        />
                        <h3 className=" text-base md:text-[18px] mb-auto font-semibold text-center ">
                            {" "}
                            Maths{" "}
                        </h3>
                    </a>

                    <a
                        href="/topics/physics/"
                        className="flex flex-col items-center flex-1 border-r-[#ccc] border-r-[1px] py-2 px-[30px] gap-[2px] mt-5"
                    >
                        <img
                            src="https://brilliant.org/site_media/version-32dd0ee41c/images/homepage/topic-data-analysis.png"
                            alt="Math"
                            width="132"
                            height="132"
                            loading="lazy"
                        />
                        <h3 className=" text-base md:text-[18px] mb-auto font-semibold text-center ">
                            {" "}
                            Physics{" "}
                        </h3>
                    </a>

                    <a
                        href="/topics/chemistry/"
                        className="flex flex-col items-center flex-1 border-r-[#ccc] border-r-[1px] py-2 px-[30px] gap-[2px] mt-5"
                    >
                        <img
                            src="https://brilliant.org/site_media/version-affbf78367/images/homepage/topic-science-and-enginnering.png"
                            alt="Math"
                            width="132"
                            height="132"
                            loading="lazy"
                        />
                        <h3 className=" text-base md:text-[18px] mb-auto font-semibold text-center ">
                            {" "}
                            Chemistry{" "}
                        </h3>
                    </a>

                    <a
                        href="/topics/biology/"
                        className="flex flex-col items-center flex-1 border-r-[#ccc] border-r-[1px] py-2 px-[30px] gap-[2px] mt-5"
                    >
                        <img
                            src="https://brilliant.org/site_media/version-9cddcd3333/images/homepage/topic-programming.png"
                            alt="Math"
                            width="132"
                            height="132"
                            loading="lazy"
                        />
                        <h3 className=" text-base md:text-[18px] mb-auto font-semibold text-center ">
                            {" "}
                            Programming{" "}
                        </h3>
                    </a>

                    <a
                        href="/topics/computer-science/"
                        className="flex flex-col items-center flex-1 border-r-[#ccc] border-r-[1px] py-2 px-[30px] gap-[2px] mt-5"
                    >
                        <img
                            src="https://brilliant.org/site_media/version-0a482e698b/images/homepage/topic-computer-science.png"
                            alt="Math"
                            width="132"
                            height="132"
                            loading="lazy"
                        />
                        <h3 className=" text-base md:text-[18px] mb-auto font-semibold text-center ">
                            {" "}
                            Computer Science{" "}
                        </h3>
                    </a>
                </div>
            </section>
        
    );
}

export default SubjectIndexAtom;