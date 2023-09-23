import NavbarMolecule from "@/components/molecules/NavbarMolecule";
import React from "react";
import { accordions } from "./Data";
import Accordion from "../components/molecules/Accordion";


const faq = () => {
  return (
    <>
      <NavbarMolecule />
      <section className="font-sans antialiased text-gray-600 min-h-full flex flex-col">
        <div className="relative overflow-hidden mt-10">
          <img
            src="https://tailwindui.com/img/beams-basic.png"
            alt="pattern"
            className="absolute left-1/2 top-0 -ml-[35rem] max-w-full"
          />
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                FAQ
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Here are some questions that our community aked from us
              </p>
            </div>
          </div>
        </div>

        {/* main content here */}
        <div className="max-w-[700px] w-full mx-auto mt-10 flex flex-col gap-4">
          {accordions.map((item, id) => {
            // destruct
            const { question, answer } = item;
            return (
              <div className="bg-darkcolor p-5 rounded-md" key={id}>
                {/* passing two props to this component */}
                <Accordion question={question} answer={answer}></Accordion>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default faq;