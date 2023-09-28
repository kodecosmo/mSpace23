import React from "react";

import SubjectIndexAtom from "../atoms/SubjectIndexAtom";
import Banner from "../atoms/Banner";
import SubscribeEmailAtom from "../atoms/SubscribeEmailAtom";

const landing = () => {
  return (
    <>
      {/* Subjects - need to do this again */}

      <SubjectIndexAtom/>




      {/* What makes Que special */}
      <section className="font-montserrat container flex flex-col mx-auto md:mt-10 space-y-12 md:space-y-0 md:flex-row max-w-5xl">
        <div className="flex flex-col space-y-12 md:w-1/2 mx-auto">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            {" "}
            What makes <span className="text-primary"> Que</span> Special?
          </h2>
          <p className="max-w-sm text-center mx-auto md:mx-0 text-text-color md:text-left">
            Que is a platform that allows students to ask questions and
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
                Que allows students to search for solutions by either
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
                Users can upload any questions they come up with to “Que”
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
            <span className="text-primary-700"> Que! </span>
          </h2>

          <div className="flex flex-col md:flex-row max-w-5xl mx-auto gap-8 group">
            <div className="bg-primary-700/10 md:group-hover:blur-sm md:group-hover:hover:blur-none md:group-hover:scale-[0.85] md:transition duration-200 md:ease-in-out md:group-hover:hover:scale-100  cursor-pointer p-8 rounded-xl">
              <img src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Person 01" className=" h-32 w-32 mx-auto rounded-full" />
              <h4 className="uppercase text-xl font-bold">
                Kaviru Hapuarachchi
              </h4>

              <p className="text-sm leading-7 my-3 font-light">
                "I think this is the best learning platform that i have ever
                used. Its simple where we need simplicity and perform well to
                meet user experince expected from the app"
              </p>

              <button className="bg-primary-700 py-2.5 px-8 rounded-full hover:text-white hover:bg-text-color transition duration-100">
                Get in Touch
              </button>
            </div>

            <div className="bg-primary-700/10 md:group-hover:blur-sm md:group-hover:hover:blur-none md:group-hover:scale-[0.85] md:transition duration-200 md:ease-in-out md:group-hover:hover:scale-100  cursor-pointer p-8 rounded-xl">
              <img src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Person 02" className="h-32 w-32 mx-auto rounded-full" />
              <h4 className="uppercase text-xl font-bold">
                Ridmaka Hapuarachchi
              </h4>

              <p className="text-sm leading-7 my-3 font-light">
                "I think this is the best learning platform that i have ever
                used. Its simple where we need simplicity and perform well to
                meet user experince expected from the app"
              </p>

              <button className="bg-primary-700 py-2.5 px-8 rounded-full hover:text-white hover:bg-text-color transition duration-100">
                Get in Touch
              </button>
            </div>

            <div className="bg-primary-700/10 md:group-hover:blur-sm md:group-hover:hover:blur-none md:group-hover:scale-[0.85] md:transition duration-200 md:ease-in-out md:group-hover:hover:scale-100  cursor-pointer p-8 rounded-xl">
              <img src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Person 03" className="h-32 w-32 mx-auto rounded-full" />
              <h4 className="uppercase text-xl font-bold">Name GoesHere</h4>

              <p className="text-sm leading-7 my-3 font-light">
                "I think this is the best learning platform that i have ever
                used. Its simple where we need simplicity and perform well to
                meet user experince expected from the app"
              </p>

              <button className="bg-primary-700 py-2.5 px-8 rounded-full hover:text-white hover:bg-text-color transition duration-100">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className=" mt-5">
      <SubscribeEmailAtom />
      </div>
      <Banner/>
      
    </>
  );
};

export default landing;
