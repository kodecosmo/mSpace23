import FooterMolecule from "@/components/molecules/FooterMolecule";
import NavbarMolecule from "@/components/molecules/NavbarMolecule";

export default function Register() {
    return (
        <main>
            <NavbarMolecule />
            <section className="max-w-2xl mx-auto pt-[100px]">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl capitalize py-6  text-center mb-24">
                    Registration Index
                </h1>
                <div className="flex items-center">
                    <button type="button" className="focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-orange-900 font-semibold">
                        <a href="/register/student">Student</a>
                    </button>
                    <button type="button" className="focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-orange-900 font-semibold">
                        <a href="/register/teacher">Teacher</a>
                    </button>
                </div>
            </section>
            <FooterMolecule />
        </main>
    );
}