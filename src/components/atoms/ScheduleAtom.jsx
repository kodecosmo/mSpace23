import React from 'react'
import dayjs from 'dayjs'

const ScheduleAtom = () => {

    return (
        <div className="h-96 w-96 sm:px-5">
            <h1 className=" font-semibold">
                Schedule for 30th September 2023
            </h1>
            <div className="p-6 rounded-md border border-red-600 bg-red-100 mt-3">
                <div className="text-xs text-red-600">
                    <span className="py-1 px-2 bg-white rounded-full mr-1">Physics Category</span>
                    10:30 AM - 10:45 AM
                </div>

                <h4 className="mt-3 text-lg font-semibold text-red-700">Mr.Kenura R.Gunarathna</h4>

                <div className="mt-1 text-xs text-gray-600 line-clamp-4 leading-5">
                    Online Session on `What is Thermodynamics?`
                </div>

                <div>

                    <a href="https://us05web.zoom.us/j/88509400490?pwd=9D2bR5oXarttg0n4nkGyKdRo8nMBZI.1" target="_blank">
                        <button type="button" class="mt-3 mr-2 px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:red-blue-800">
                            Join Now
                        </button>
                    </a>

                    <button type="button" class="mt-3 mr-2 px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Cancel
                    </button>

                </div>

            </div>

            <div className="p-6 rounded-md border border-gray-300 bg-gray-100 mt-3">
                <div className="text-xs text-gray-600">
                    <span className="py-1 px-2 bg-white rounded-full mr-1">Physics Category</span>
                    12:00 PM - 12:20 PM
                </div>

                <h4 className="mt-3 text-lg font-semibold text-gray-700">Mr.Kabul Hazem</h4>

                <div className="mt-1 text-xs text-gray-600 line-clamp-4 leading-5">
                    Online Session of `Can someone explain me the latent heat of fusion?`
                </div>

                <div>

                    <button type="button" class="mt-3 mr-2 px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Cancel
                    </button>

                </div>

            </div>
        </div>
    )
}

export default ScheduleAtom
