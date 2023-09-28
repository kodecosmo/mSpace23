import React from 'react'

const Banner = () => {
  return (
      <section className="font-montserrat mb-10">
          <div className="max-w-6xl px-5 mx-auto mt-24 bg-primary-700 rounded-lg flex flex-col md:flex-row justify-between items-center">
              <div className="py-4 flex flex-col mb-4 justify-center">
                  <h2 className="text-4xl font-bold text-white py-4 text-center md:text-left">
                      Be a part of
                      <span className="text-text-color"> Que </span> today!
                  </h2>

                  <p className="font-light text-lg leading-7 text-center md:text-left">
                      Be a part of this amazing community
                  </p>
              </div>

              <div className="mb-4 md:mb-0">
                  <button className="bg-white rounded-lg px-8 py-2.5 font-semibold hover:text-white hover:bg-text-color transition duration-100">
                      Get Started
                  </button>
              </div>
          </div>
      </section>
  )
}

export default Banner
