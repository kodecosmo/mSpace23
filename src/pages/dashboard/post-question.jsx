import Header from '@/components/molecules/HeaderMolecule'
import NavbarMolecule from '@/components/molecules/NavbarMolecule'
import SideNavbarMolecule from '@/components/molecules/SideNavbarMolecule'
import Stepper from "@/components/molecules/Stepper";
import StepperControl from "@/components/molecules/StepperControl";

import { useState, useEffect } from 'react';
import { StepperContext } from "@/context/StepperContext";

import Question from "@/components/molecules/steps/Question";
import Teacher from "@/components/molecules/steps/Teacher";
import Final from "@/components/molecules/steps/Final";
import DashboardHeading from '@/components/molecules/DashboardHeadingMolecule';

export default function Dashboard() {

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  // ------------------- side nav resize code starts -------------------
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowHeight(window.innerHeight);
      console.log(window.innerHeight);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      setWindowHeight(window.innerHeight);
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  // ------------------- side nav resize code ends -------------------

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

      <main style={{ marginTop: '70px' }} className='bg-gray-50 dark:bg-gray-900 flex justify-center w-full h-fit'>

        <div className='max-w-screen-2xl flex w-full'>

          <SideNavbarMolecule windowHeight={windowHeight} />

          <div className="m-0 w-full">
            <div className="grid grid-cols-4">

              <div className="flex flex-col justify-center mt-4 pb-2 col-span-4  lg:col-span-3">

                {/* Heading section start */}
                <DashboardHeading
                  heading="Post a Question"
                  description="Please enter your thought-provoking question here."
                  subPage1URL="dashboard"
                  subPage2URL="post-question"
                />
                {/* Heading section end */}

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

                side details


              </div>

            </div>
          </div>

        </div>
      </main>

    </>
  )
}