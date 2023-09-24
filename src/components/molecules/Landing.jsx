import React from "react";

const landing = () => {
  return (
    <>
      {/* Subjects - need to do this again */}
      <section className="max-w-5xl px-5 mx-auto mt-16 md:mt-10 md:mb-24 text-center w-full flex flex-col items-start font-montserrat">
        <div className="grid grid-cols-6 grid-rows-2 items-stretch max-w-[550px] w-full self-center md:flex md:py-6 md:justify-between md:items-start md:max-w-[100%]">
          <a href="/topics/mathematics/" className="flex flex-col items-center flex-1 border-r-[#ccc] border-r-[1px] py-2 px-[30px] gap-[2px] mt-5">
            <img src="https://brilliant.org/site_media/version-1de7ac9e60/images/homepage/topic-math.png" alt="Math" width="132" height="132" loading="lazy" />
            <h3 className=" text-base md:text-[18px] mb-auto font-semibold text-center "> Maths </h3>
          </a>

          <a href="/topics/physics/" className="flex flex-col items-center flex-1 border-r-[#ccc] border-r-[1px] py-2 px-[30px] gap-[2px] mt-5">
            <img src="https://brilliant.org/site_media/version-32dd0ee41c/images/homepage/topic-data-analysis.png" alt="Math" width="132" height="132" loading="lazy" />
            <h3 className=" text-base md:text-[18px] mb-auto font-semibold text-center "> Physics </h3>
          </a>

          <a href="/topics/chemistry/" className="flex flex-col items-center flex-1 border-r-[#ccc] border-r-[1px] py-2 px-[30px] gap-[2px] mt-5">
            <img src="https://brilliant.org/site_media/version-affbf78367/images/homepage/topic-science-and-enginnering.png" alt="Math" width="132" height="132" loading="lazy" />
            <h3 className=" text-base md:text-[18px] mb-auto font-semibold text-center "> Chemistry </h3>
          </a>

          <a href="/topics/biology/" className="flex flex-col items-center flex-1 border-r-[#ccc] border-r-[1px] py-2 px-[30px] gap-[2px] mt-5">
            <img src="https://brilliant.org/site_media/version-9cddcd3333/images/homepage/topic-programming.png" alt="Math" width="132" height="132" loading="lazy" />
            <h3 className=" text-base md:text-[18px] mb-auto font-semibold text-center "> Programming </h3>
          </a>

          <a href="/topics/computer-science/" className="flex flex-col items-center flex-1 border-r-[#ccc] border-r-[1px] py-2 px-[30px] gap-[2px] mt-5">
            <img src="https://brilliant.org/site_media/version-0a482e698b/images/homepage/topic-computer-science.png" alt="Math" width="132" height="132" loading="lazy" />
            <h3 className=" text-base md:text-[18px] mb-auto font-semibold text-center "> Computer Science </h3>
          </a>
        </div>
      </section>

      {/* What makes StudyMate special */}
      <section className="font-montserrat container flex flex-col mx-auto md:mt-10 space-y-12 md:space-y-0 md:flex-row max-w-5xl">
        <div className="flex flex-col space-y-12 md:w-1/2 mx-auto">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            {" "}
            What makes <span className="text-primary"> StudyMate</span> Special?
          </h2>
          <p className="max-w-sm text-center mx-auto md:mx-0 text-text-color md:text-left">
            StudyMate is a platform that allows students to ask questions and
            get answers from teachers. It is a place you can even scedule
            tutorial sessions with a teacher of choice.
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-[#FFEDDC] md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-4 text-white rounded-full md:py-1 bg-primary">
                  01
                </div>

                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Smart keyword search
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Smart keyword search{" "}
              </h3>
              <p className="text-text-color">
                StudyMate allows students to search for solutions by either
                uploading a question or using our smart search. Text recognition
                identifies keywords in uploaded questions, yielding relevant
                search results. If a solution isn't found, users can post the
                question to the community or use AI ans generator feature.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-[#FFEDDC] md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-4 text-white rounded-full md:py-1 bg-primary">
                  02
                </div>

                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Straightforward solutions to any problem
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Straightforward solutions to any problem
              </h3>
              <p className="text-text-color">
                Users can upload any questions they come up with to “StudyMate”
                and get solutions from teachers and experts in that specific
                field or through AI chatbots.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-[#FFEDDC] md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-4 text-white rounded-full md:py-1 bg-primary">
                  03
                </div>

                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Tutorial sessions
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Tutorial sessions
              </h3>
              <p className="text-text-color">
                When a student needs a further understanding of a project,
                he/she can accept or send a tutorial requests and schedule a
                meeting directly through the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="font-montserrat max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-4xl font-bold text-center mb-16">
            What others say about{" "}
            <span className="text-primary"> StudyMate! </span>
          </h2>

          <div className="flex flex-col md:flex-row max-w-5xl mx-auto gap-8 group">
            <div className="bg-primary/10 md:group-hover:blur-sm md:group-hover:hover:blur-none md:group-hover:scale-[0.85] md:transition duration-200 md:ease-in-out md:group-hover:hover:scale-100  cursor-pointer p-8 rounded-xl mix-blend-luminosity">
              <img src="" alt="Person 01" className="h-20 mx-auto" />
              <h4 className="uppercase text-xl font-bold">
                Kaviru Hapuarachchi
              </h4>

              <p className="text-sm leading-7 my-3 font-light">
                "I think this is the best learning platform that i have ever
                used. Its simple where we need simplicity and perform well to
                meet user experince expected from the app"
              </p>

              <button className="bg-primary py-2.5 px-8 rounded-full hover:text-white hover:bg-text-color transition duration-100">
                Get in Touch
              </button>
            </div>

            <div className="bg-primary/10 md:group-hover:blur-sm md:group-hover:hover:blur-none md:group-hover:scale-[0.85] md:transition duration-200 md:ease-in-out md:group-hover:hover:scale-100  cursor-pointer p-8 rounded-xl mix-blend-luminosity">
              <img src="" alt="Person 02" className="h-20 mx-auto" />
              <h4 className="uppercase text-xl font-bold">
                Ridmaka Hapuarachchi
              </h4>

              <p className="text-sm leading-7 my-3 font-light">
                "I think this is the best learning platform that i have ever
                used. Its simple where we need simplicity and perform well to
                meet user experince expected from the app"
              </p>

              <button className="bg-primary py-2.5 px-8 rounded-full hover:text-white hover:bg-text-color transition duration-100">
                Get in Touch
              </button>
            </div>

            <div className="bg-primary/10 md:group-hover:blur-sm md:group-hover:hover:blur-none md:group-hover:scale-[0.85] md:transition duration-200 md:ease-in-out md:group-hover:hover:scale-100  cursor-pointer p-8 rounded-xl mix-blend-luminosity">
              <img src="" alt="Person 03" className="h-20 mx-auto" />
              <h4 className="uppercase text-xl font-bold">Name GoesHere</h4>

              <p className="text-sm leading-7 my-3 font-light">
                "I think this is the best learning platform that i have ever
                used. Its simple where we need simplicity and perform well to
                meet user experince expected from the app"
              </p>

              <button className="bg-primary py-2.5 px-8 rounded-full hover:text-white hover:bg-text-color transition duration-100">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="font-montserrat mb-10">
        <div className="max-w-6xl px-5 mx-auto mt-24 bg-primary rounded-lg flex flex-col md:flex-row justify-between items-center">
          <div className="py-4 flex flex-col mb-4 justify-center">
            <h2 className="text-4xl font-bold text-white py-4 text-center md:text-left">
              Be a part of 
              <span className="text-text-color"> StudyMate </span> today!
            </h2>

            <p className="font-light text-lg leading-7 text-center md:text-left">
              Be a part of this amazing community
            </p>
          </div>

          <div className="mb-4 md:mb-0">
            <button className="bg-white rounded-lg px-8 py-2.5 font-semibold hover:text-white hover:bg-text-color transition duration-100">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default landing;
