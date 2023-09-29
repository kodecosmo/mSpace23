import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "@/components/atoms/Calender";
import cn from "@/utils/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Calendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  return (
    <div className="grid grid-cols-4 p-10 pt-1 pb-8">

      {/* Calender */}
      <div className="flex-col col-span-4 md:col-span-2 h-fit w-full pt-4 px-4 border rounded-md bg-white">

        {/* Header */}
        <div className="flex justify-between items-center gap-3">

          {/* This Month, Year */}
          <h1 className="select-none font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>

          <div className="flex gap-10 items-center justify-between ">

            {/* Previous Month */}
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />

            {/* Today */}
            <h1
              className=" cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>

            {/* Next Month */}
            <GrFormNext
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 ">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
              >
                {day}
              </h1>
            );
          })}
        </div>

        {/* Calender */}
        <div className=" grid grid-cols-7 ">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                >
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-red-600 text-white" : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-black text-white"
                        : "",
                      "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                    )}
                    onClick={() => {
                      setSelectDate(date);
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* Schedule list */}
      <div className="flex-col col-span-4 md:col-span-2 h-full w-full md:px-5">

        <h1 className="border rounded-md bg-white p-4 font-semibold">
          Schedule for {selectDate.toDate().toDateString()}
        </h1>

        {/* <p className="text-gray-400 mt-4 text-center w-full py-2">No meetings for today.</p> */}

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

    </div>
  );
}
