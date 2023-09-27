import { FaCheckCircle } from "react-icons/fa";
import { pricingPlans } from "./Data";
import NavbarMolecule from "@/components/molecules/NavbarMolecule";
import FooterMolecule from "@/components/molecules/FooterMolecule";

const shop = () => {
  return (
    <>

    <NavbarMolecule />
      <section className="font-sans antialiased text-gray-600 min-h-full flex flex-col">
        <div className="relative overflow-hidden mt-10">
          <img
            src="https://tailwindui.com/img/beams-basic.png"
            alt="pattern"
            className="absolute left-1/2 top-0 -ml-[35rem] max-w-full"
          />
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Shop QUE
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Choose the best package for you to get started learning in QUE
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1"></div>
          <div className="flex-1 bg-primary/5"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className="relative border border-slate-200 p-8 shadow-md bg-white rounded-2xl flex flex-col"
            >
              <h3 className="text-lg font-semibold leading-5">{plan.title}</h3>

              {plan.mostPopular && (
                <p className="absolute top-0 -translate-y-1/2  bg-primary text-white px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full shadow-sm">
                  Most Popular
                </p>
              )}

              <p className="mt-4 text-text-color text-sm leading-6">
                {plan.description}
              </p>

              <div className="mt-4 bg-primary/5 p-6 rounded-lg -mx-6">
                <p className="text-sm font-semibold text-text-color/70 flex items-center">
                  <span>{plan.currency}</span>
                  <span className="text-4xl text-text-color ml-3">
                    Rs.{plan.price}
                  </span>
                  <span className="ml-1.5">{plan.frequency}</span>
                </p>
              </div>

              <ul className="mt-6 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-text-color leading-6 flex"
                  >
                    <FaCheckCircle
                      fill="#10B9E9"
                      className="h-5 w-5 shrink-0"
                    />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block mt-8 px-6 py-4 text-sm font-semibold leading-4 text-center rounded-lg
            ${
              plan.mostPopular
                ? "text-white bg-primary hover:bg-text-color shadow-sm"
                : "text-primary bg-primary/10 hover:bg-primary/20 shadow-sm"
            }

            `}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <FooterMolecule />
    </>
  );
};

export default shop;
