import React, { useEffect, useState, useRef } from "react";

const Stepper = ({ steps, currentStep }) => {

  const [newStep, setNewStep] = useState([])

  const stepRef = useRef()

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps]
    let count = 0

    while (count < newSteps.length) {
      // current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true
        }
        count++;
      }
      // step complete
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true
        }
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false
        }
        count++;
      }
    }
    return newSteps
  }

  useEffect(() => {
    // create object
    const stepsState = steps.map((step, index) =>
      Object.assign({}, {
        description: step,
        completed: false,
        highlighted: index === 0 ? true : false,
        slected: index === 0 ? true : false
      })
    )

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current)
    setNewStep(current)
  }, [steps, currentStep])

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={index !== newStep.length - 1 ? "w-full flex items-center" : "flex items-center"}
      >
        <div className="relative flex flex-col items-center text-primary">
          <div className={`rounded-full transition duration-500 ease-in-out border border-primary-700 h-12 w-12 flex items-center justify-center py-3 ${step.selected ? "bg-primary-700 text-white font-bold border border-primary" : ""}`}>
            {/* Display Number */}
            {step.completed ? (
              <span className="text-2xl font-bold">✓</span>
            ) : (
              index + 1
            )}
          </div>

          <div className={`absolute top-0 text-center mt-16 w-32 text-xm font-medium uppercase ${step.highlighted ? "text-primary" : "text-gray-400"}`}>
            {/* Display description */}
            {step.description}
          </div>
        </div>

        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed ? "border-primary" : "border-gray-300"}`}>
          {/* Display line */}
        </div>
      </div>
    )
  })

  return (
    <section className="mx-4 p-4 px-12 flex justify-between items-center">
      {displaySteps}
    </section>
  );
};

export default Stepper;
