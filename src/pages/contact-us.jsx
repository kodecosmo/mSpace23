import React from "react";

import NavbarMolecule from "@/components/molecules/NavbarMolecule";
import FooterMolecule from "@/components/molecules/FooterMolecule";

const contactus = () => {
  return (
    <>
      <NavbarMolecule />
      <section className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 border-2 rounded-xl w-full max-w-4xl p-8 sm:p-12 shadow-md text-text-color">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide"> Contact Us </h1>
              <p className="pt-2 text-sm">
                {" "}
                Hello guys please contact us for anything. But dont be annoying
                okayy{" "}
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <img src="" alt="Call icon" width={28} height={28} />
                <span> (+94) 71 123 4567 </span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <img src="" alt="" width={28} height={28} />
                <span> contact@studymate.com </span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <img src="" alt="location icon" width={28} height={28} />
                <span> Colombo, Sri Lanka </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" target="_blank">
                {" "}
                <img src="" alt="facebook" />{" "}
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                {" "}
                <img src="" alt="instagram" />{" "}
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                {" "}
                <img src="" alt="linkedin" />{" "}
              </a>
              <a href="https://www.github.com/" target="_blank">
                {" "}
                <img src="" alt="github" />{" "}
              </a>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-slate-600 md:width-80">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label className="text-sm"> Your name </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="ring-1 ring-gray-300 w-full rounded-md py-4 px-2 mt-2 outline-none focus:ring-2 focus:ring-primary"
                  ></input>
                </div>

                <div>
                  <label className="text-sm"> E-mail Address </label>
                  <input
                    type="email"
                    placeholder="Your E-mail"
                    className="ring-1 ring-gray-300 w-full rounded-md py-4 px-2 mt-2 outline-none focus:ring-2 focus:ring-primary"
                  ></input>
                </div>

                <div>
                  <label className="text-sm"> Your Message </label>
                  <textarea placeholder="Enter your message here..." rows={4} className="ring-1 ring-gray-300 w-full rounded-md py-4 px-2 mt-2 outline-none focus:ring-2 focus:ring-primary">
                  </textarea>
                </div>

                <button className="inline-block self-end bg-primary text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"> Send Message </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <FooterMolecule />
    </>
  );
};

export default contactus;