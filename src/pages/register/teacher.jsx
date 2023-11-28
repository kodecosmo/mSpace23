import { FooterMolecule } from "@/components/molecules/FooterMolecule";
import NavbarMolecule from "@/components/molecules/NavbarMolecule";

export default function teacherRegister() {
  return (
    <div>
      <NavbarMolecule />

<<<<<<< Updated upstream
            <section className="max-w-2xl mx-auto pt-[100px] ">
                <div className="pb-6">
                    <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-4xl capitalize py-6  text-center">
                        Registration - Teacher
                    </h1>
                </div>
                <form className="flex flex-col">
                    <div className="mb-6">
                        <label htmlFor="name1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="name1" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-700 focus:border-primary-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-700 dark:focus:border-primary-700 dark:shadow-sm-light" placeholder="First name" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="name2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" id="name2" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-700 focus:border-primary-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-700 dark:focus:border-primary-700 dark:shadow-sm-light" placeholder="Last name" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-700 focus:border-primary-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-700 dark:focus:border-primary-700 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" placeholder="********" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-700 focus:border-primary-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-700 dark:focus:border-primary-700 dark:shadow-sm-light placeholder:mt-3" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                        <input type="password" id="repeat-password" placeholder="********" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-700 focus:border-primary-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-700 dark:focus:border-primary-700 dark:shadow-sm-light" required />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-700 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 checked:bg-primary-500" required />
                        </div>
                        <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="/terms-and-conditions" className="text-primary-500 hover:underline">terms and conditions</a></label>
                    </div>
                    <button type="submit" className="focus:outline-none text-white bg-orange-400 hover:bg-text-color transition duration-200 ease-in-out focus:ring-4 focus:ring-orange-300 rounded-lg text-md px-7 py-3 .5 mr-2 mb-2 font-semibold mt-10">Create new account</button>
                </form>

            </section>
            <FooterMolecule />
=======
      <section className="max-w-2xl mx-auto pt-[100px] h-screen">
        <div className="pb-6">
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-4xl capitalize py-6  text-center">
            Registration - Teacher
          </h1>
>>>>>>> Stashed changes
        </div>

        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="name1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="name1"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-700 focus:border-primary-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-700 dark:focus:border-primary-700 dark:shadow-sm-light"
              placeholder="First name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="name2"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="name2"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-700 focus:border-primary-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-700 dark:focus:border-primary-700 dark:shadow-sm-light"
              placeholder="Last name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-700 focus:border-primary-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-700 dark:focus:border-primary-700 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-700 focus:border-primary-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-700 dark:focus:border-primary-700 dark:shadow-sm-light placeholder:mt-3"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Repeat password
            </label>
            <input
              type="password"
              id="repeat-password"
              placeholder="********"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-700 focus:border-primary-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-700 dark:focus:border-primary-700 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-700 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 checked:bg-primary-500"
                required
              />
            </div>
            <label
              htmlFor="terms"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="/terms-and-conditions"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="focus:outline-none text-white bg-orange-400 hover:bg-text-color transition duration-200 ease-in-out focus:ring-4 focus:ring-orange-300 rounded-lg text-md px-7 py-3 .5 mr-2 mb-2 font-semibold mt-10"
          >
            Create new account
          </button>
        </form>
      </section>

      <FooterMolecule />
    </div>
  );
}
