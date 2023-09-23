import NavbarMolecule from "@/components/molecules/NavbarMolecule";
import Stepper from "@/components/molecules/Stepper";
import StepperControl from "@/components/molecules/StepperControl";

import { useState } from "react";
import { StepperContext } from "../../context/StepperContext";

import Question from "../../components/molecules/steps/Question";
import Teacher from "../../components/molecules/steps/Teacher";
import Final from "../../components/molecules/steps/Final";
import FooterMolecule from "@/components/molecules/FooterMolecule";

const PostQuestion = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  const steps = ["Question", "Teacher", "Complete"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Question />;
      case 2:
        return <Teacher />;
      case 3:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check steps are withing bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <>
      <NavbarMolecule />
      <section className="mb-4 font-sans antialiased text-gray-600 min-h-full flex flex-col">
        <div className="relative overflow-hidden mt-10">
          <img
            src="https://tailwindui.com/img/beams-basic.png"
            alt="pattern"
            className="absolute left-1/2 top-0 -ml-[35rem] max-w-full"
          />
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Post Question
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-4 md:w-1/2 mx-auto rounded-2xl ring pb-2 ring-slate-300 ring-opacity-50">
          {/* Stepper */}
          <div className="container mt-5 horizontal">
            <Stepper steps={steps} currentStep={currentStep} />

            {/* Display Component */}
            <div className="my-10 p-10">
              <StepperContext.Provider
                value={{
                  userData,
                  setUserData,
                  finalData,
                  setFinalData,
                }}
              >
                {displayStep(currentStep)}
              </StepperContext.Provider>
            </div>
          </div>

          {/* Navigation */}
          {currentStep !== steps.length && (
            <StepperControl
              handleClick={handleClick}
              currentStep={currentStep}
              step={steps}
            />
          )}
        </div>
      </section>

      <FooterMolecule />
    </>
  );
};

export default PostQuestion;
