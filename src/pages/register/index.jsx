import { FooterMolecule } from "@/components/molecules/FooterMolecule";
import NavbarMolecule from "@/components/molecules/NavbarMolecule";
import { FaChalkboardTeacher, FaChild, FaRegCircle } from "react-icons/fa";

export default function Register() {
  return (
    <main>
      <NavbarMolecule />

      <section className="flex justify-center items-center h-screen">
        <div className="p-6">
          <h2 className=" text-[f5f5f5] mb-4 text-4xl font-semibold">
            Please Select who are you
          </h2>
          <div className="flex justify-evenly items-center gap-5">
            <div className="flex items-center justify-center mt-4">
              <div className="block relative w-full h-auto mb-4 teacher">
                {/* add onclick function */}
                <button className="flex border-solid rounded-lg border-[3px] border-text-color border-opacity-50 hover:bg-primary-600 transition-colors ease-in-out duration-200 focus:bg-primary-700 group">
                  <div className="flex items-center py-3 px-4 rounded-md p-8 gap-5">
                    <FaChalkboardTeacher className="text-5xl text-text-color group-hover:text-white transition-colors ease-in-out duration-200 group-focus:bg-primary-700 group-focus:text-white" />
                    <div className="text-xl font-medium text-text-color group-hover:text-white transition-colors ease-in-out duration-200 group-focus:bg-primary-700 group-focus:text-white">
                      Teacher
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <div className="block relative w-full h-auto mb-4 teacher">
                {/* add onclick function */}
                <button className="flex border-solid rounded-lg border-[3px] border-text-color border-opacity-50 hover:bg-primary-600 transition-colors ease-in-out duration-200 focus:bg-primary-700 group">
                  <div className="flex items-center py-3 px-4 rounded-md p-8 gap-5">
                    <FaChild className="text-5xl text-text-color group-hover:text-white transition-colors ease-in-out duration-200 group-focus:bg-primary-700 group-focus:text-white" />
                    <div className="text-xl font-medium text-text-color group-hover:text-white transition-colors ease-in-out duration-200 group-focus:bg-primary-700 group-focus:text-white">
                      Student
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterMolecule />
    </main>
  );
}
