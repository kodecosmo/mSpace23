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
import Profile from '@/pages/profile';
import { DashboardFooterMolecule } from '@/components/molecules/FooterMolecule';

export default function Dashboard() {

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  // ------------------- side nav resize code starts -------------------
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowHeight(window.innerHeight);
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

      <Header title="Dashboard - Que" description="Welcome to Que. Your online tutoring site." />

      <NavbarMolecule type="dashboard" /> {/* `default` or `dashboard` */}

      <main style={{ marginTop: '70px' }} className='bg-gray-50 dark:bg-gray-900 flex justify-center w-full h-fit'>

        <div className='max-w-screen-2xl flex w-full'>

          <SideNavbarMolecule windowHeight={windowHeight} />

          <div className="m-0 w-full">
            <div className="grid grid-cols-4">
              <div className="flex flex-col justify-center align-top mt-4 pb-2 col-span-4">

                {/* Heading section start */}
                <DashboardHeading
                  heading="Dashboard"
                  description="Welcome to the dashboard of the Que platform."
                  subPage1URL="dashboard"
                />
                {/* Heading section end */}

                <Profile />

                <DashboardFooterMolecule />

              </div>
            </div>
          </div>

        </div>
      </main>

    </>
  )
}