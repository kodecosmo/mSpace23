import { useContext } from "react";
import { StepperContext } from "../../../context/StepperContext";
import InputTags from "@/components/atoms/InputTags";

const Question = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col">
      {/* Question title */}
      <div className="w-full mx-2 flex-1">
        <div className="font-bold text-gray-500 h-6 mt-3 text-xs leading-8">
          Enter a title for your question
        </div>

        <div className="bg-white flex">
          <input
            onChange={handleChange}
            value={userData["question_title"] || ""}
            name="question_title"
            placeholder="Question title"
            className="p-1 px-2 my-2 focus:ring-0 appearance-none outline-none w-full text-gray-800 border border-gray-200 hover:border-primary focus:border-primary rounded"
          />
        </div>
      </div>

      {/* Select Subject */}
      <div className="w-full mx-2 flex-1 mb-2">
        <div className="font-bold text-gray-500 h-6 mt-3 text-xs leading-8">
          Select the related subject for the question
        </div>

        <div className="bg-white flex">
          <select
            onChange={handleChange}
            value={userData["question_subject"] || ""}
            name="question_subject"
            className="p-1 px-2 my-2 appearance-none focus:ring-0 outline-none w-full text-gray-800 border border-gray-200 hover:border-primary focus:border-primary rounded focus:outline-none"
            style={{ outline: "none" }}
          >
            <option value="">Select a subject</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
            <option value="History">History</option>
          </select>
        </div>
      </div>

      {/* Detailed Question */}
      <div className="w-full mx-2 flex-1">
        <div className="font-bold text-gray-500 h-6 mt-3 text-xs leading-8">
          Question in details
        </div>

        <div className="bg-white flex">
          <textarea
            rows={4}
            onChange={handleChange}
            value={userData["question_details"] || ""}
            name="question_details"
            placeholder="Enter your question here..."
            className="p-1 px-2 my-2 focus:ring-0 appearance-none outline-none w-full text-gray-800 border border-gray-200 hover:border-primary focus:border-primary rounded"
          />
        </div>
      </div>

      {/* Specify tags */}
      <div className="w-full mx-2 flex-1 mb-2">
        <div className="font-bold text-gray-500 h-6 mt-3 text-xs leading-8">
          Enter tags related to question
        </div>

        <InputTags />
      </div>

      {/* Upload a document or picture */}
      <div className="w-full mx-2 flex-1">
        <label class="font-bold text-gray-500 h-6 mt-3 text-xs leading-8">
          Upload any related documents
        </label>
        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div class="space-y-1 text-center">
            <svg
              class="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="True"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="flex text-sm text-gray-600">
              <label
                for="file-upload"
                class="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-[#FFA24A] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:primary"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  class="sr-only"
                />
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs text-gray-500">PDF, PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
