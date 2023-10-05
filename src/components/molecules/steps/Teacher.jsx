import { useContext } from "react";
import { StepperContext } from "../../../context/StepperContext";

const Teacher = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col">
      {/* Teacher Gender */}
      <div className="w-full mx-2 flex-1 mb-2">
        <div className="font-bold text-gray-500 h-6 mt-3 text-xs leading-8">
          Select the preferred teacher gender
        </div>

        <div className="bg-white flex">
          <select
            onChange={handleChange}
            value={userData["teacher_gender"] || ""}
            name="teacher_gender"
            className="p-1 px-2 my-2 appearance-none focus:ring-0 outline-none w-full text-gray-500 border border-gray-200 hover:border-primary focus:border-primary rounded focus:outline-none"
            style={{ outline: "none" }}
          >
            <option value="both">Prefer both</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      {/* Teacher Qualification */}
      <div className="w-full mx-2 flex-1 mb-2">
        <div className="font-bold text-gray-500 h-6 mt-3 text-xs leading-8">
          Maximum qualification expected from the teacher
        </div>

        <div className="bg-white flex">
          <select
            onChange={handleChange}
            value={userData["teacher_qualification"] || ""}
            name="teacher_qualification"
            className="p-1 px-2 my-2 appearance-none outline-none w-full text-gray-500 border border-gray-200 hover:border-primary focus:border-primary rounded focus:outline-none"
            style={{ outline: "none" }}
          >
            <option value="">Select qualification</option>
            <option value="School-leaver">School leaver</option>
            <option value="Deploma">Deploma</option>
            <option value="Bachelors-Degree">Bachelors Degree</option>
            <option value="Masters-Degree">Masters Degree</option>
          </select>
        </div>
      </div>

      {/* Allow Session requests */}
      <div className="w-full mx-2 flex-1 mb-2">
        <div className="font-bold text-gray-500 h-6 mt-3 text-xs leading-8">
          Would you like to receive session requests from teachers?
        </div>

        <div className="bg-white flex">
          <select
            onChange={handleChange}
            value={userData["requests"] || ""}
            name="requests" // Corrected name attribute
            className="p-1 px-2 my-2 appearance-none outline-none w-full text-gray-500 border border-gray-200 hover:border-primary focus:border-primary rounded focus:outline-none"
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>


      {/* visibility */}
      <div className="w-full mx-2 flex-1 mb-2">
        <div className="font-bold text-gray-500 h-6 mt-3 text-xs leading-8">
          Who can see your questions?
        </div>

        <div className="bg-white flex">
          <select
            onChange={handleChange}
            value={userData["visibility"] || ""}
            name="visibility" // Corrected name attribute
            className="p-1 px-2 my-2 appearance-none outline-none w-full text-gray-500 border border-gray-200 hover:border-primary focus:border-primary rounded focus:outline-none"
          >
            <option value="">Select an option</option>
            <option value="Everyone">Teachers Only</option>
            <option value="Only me">Everyone</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
