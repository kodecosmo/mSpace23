const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <section className="container flex justify-around mt-4 mb-8">
      {/* Back button */}
      <button
        onClick={() => handleClick("back")}
        className={`bg-white text-slate-400 uppercase px-4 py-2 rounded-xl font-semibold border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      >
        Back
      </button>

      {/* Next button */}
      <button
        onClick={() => handleClick("next")}
        className="bg-primary-700 text-white uppercase px-4 py-2 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
      >
        {steps && currentStep === steps.length - 1 ? "POST" : "Next"}
      </button>
    </section>
  );
};

export default StepperControl;
