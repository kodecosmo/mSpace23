import Header from '@/components/molecules/HeaderMolecule'
import NavbarMolecule from '@/components/molecules/NavbarMolecule'
import SideNavbarMolecule from '@/components/molecules/SideNavbarMolecule'
import Stepper from "@/components/molecules/Stepper";
import StepperControl from "@/components/molecules/StepperControl";

import { useState, useEffect } from 'react';
import { StepperContext } from "../../context/StepperContext";

import Question from "../../components/molecules/steps/Question";
import Teacher from "../../components/molecules/steps/Teacher";
import Final from "../../components/molecules/steps/Final";

export default function Dashboard() {

  const [windowHeight, setWindowHeight] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  useEffect(() => {

    const handleWindowResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("load", handleWindowResize);

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

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

      <Header title="StudyMate" description="Welcome to StudyMate. Your online tutoring site." />

      <NavbarMolecule type="dashboard" /> {/* `default` or `dashboard` */}

      <main style={{ marginTop: '70px' }} className='flex justify-center w-full h-fit'>

        <div className='max-w-screen-xl flex w-full'>

          <SideNavbarMolecule windowHeight={windowHeight} />

          <div className="container">

            <div className="grid grid-cols-4">

              <div className="flex flex-col justify-center mt-4 pb-2 col-span-4  lg:col-span-3">
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

              <div className="col-span-4  lg:col-span-1">
                Side Data
              </div>

            </div>

          </div>
sd
        </div>
      </main>
      
    </>
  )
}