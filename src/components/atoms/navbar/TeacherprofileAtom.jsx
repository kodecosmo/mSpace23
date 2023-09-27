import {
  AiFillStar,
  AiOutlineStar,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

import { FaCircle, FaEllipsisV } from "react-icons/fa";

export default function TeacherProfile(props) {
  return (
    <>
      {/* Hero section */}
      <section className="pt-0 mb-4">
        <div className="container px-5 pt-14">
          <div className="md:flex justify-between items-center sm:flex-col md:flex-row">
            <div className="w-full md:basis-1/2">
              {/* Name goes here */}
              <h5 className="text-text-color font-[600] text-[16px]">
                Kaviru Happuarachchi
              </h5>

              {/* Description goes here */}
              <h1 className="text-text-color font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5">
                I'm an IS undergraduate at <br />
                <span className="text-primary"> UCSC </span>
              </h1>

              <div className="flex items-center gap-6 mt-7">
                <a href="#">
                  <button className="bg-primary-700 text-white font-[500] flex items-center gap-2 hover:bg-text-color ease-in duration-300 py-2 rounded-xl px-4">
                    Request Session
                  </button>
                </a>
                <a
                  href="#"
                  className="text-text-color font-[600] text-[16px] border-b border-solid border-text-color"
                >
                  My Answers
                </a>
              </div>

              <div className="flex items-center gap-9 mt-14">
                <span className="text-text-color text-[15px] font-[600]">
                  Follow me:
                </span>
                <span>
                  <a
                    href="#linkedin"
                    className="text-text-color text-[18px] font-[600]"
                  >
                    <AiFillLinkedin className="h-7 w-7 hover:text-[#0072b1]" />
                  </a>
                </span>

                <span>
                  <a
                    href="#instagram"
                    className="text-text-color text-[18px] font-[600]"
                  >
                    <AiFillInstagram className="h-7 w-7 hover:text-[#d6249f]" />
                  </a>
                </span>

                <span>
                  <a
                    href="#facebook"
                    className="text-text-color text-[18px] font-[600]"
                  >
                    <AiFillFacebook className="h-7 w-7 hover:text-[#4267B2]" />
                  </a>
                </span>
              </div>
            </div>
            <div className="basis-1/3 mt-10 sm:mt-0">
              <figure className="flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="profile"
                  className="w-[300px] h-[300px] object-cover rounded-full"
                />
              </figure>
            </div>

            <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
              <div className="mb-10">
                <h2 className="text-text-color font-[700] text-[32px]">
                  Level 01
                </h2>
                <h4 className="text-text-color font-[600] text-[18px]">
                  Teacher
                </h4>
              </div>

              <div className="mb-10">
                <h2 className="text-text-color font-[700] text-[32px]">123</h2>
                <h4 className="text-text-color font-[600] text-[18px]">
                  Answers on platform
                </h4>
              </div>

              <div className="mb-10">
                <h2 className="text-text-color font-[700] text-[32px]">
                  5.0 star
                </h2>
                <h4 className="text-text-color font-[600] text-[18px]">
                  Student Reviews
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About teacher */}
      <section className="flex justify-center items-center flex-col w-full max-w-5xl mx-auto">
        <div className="tracking-[1px] my-[30px] py-[10px] px-5 flex flex-col justify-center items-center">
          <span className="text-text-color font-[300] text-md tracking-[2px] uppercase">
            INTRODUCTION
          </span>
          <h1 className="text-text-color font-[700] text-[32px]">About me</h1>
        </div>

        <div className="max-w-5xl flex flex-row flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2">
            {/* Content goes here */}
            <p className="text-center md:text-left">
              I am a software engineering undergraduate at University of Colombo
              School of Computing. I have a passion for teaching and I have been
              teaching for the past 3 years. I have been teaching students for
              the past 3 years and I have been able to help them achieve their
              goals. I have been teaching students for the past 3 years and I
              have been able to help them achieve their goals.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center mt-5 md:mt-0">
            {/* Video goes here */}
            <video
              width="500px"
              height="500px"
              controls="controls"
              className="rounded-xl"
            >
              <source
                src="https://pixabay.com/videos/the-lessons-are-over-teacher-folder-11862/"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      {/* Answered Questions */}
      <section className="flex justify-center items-center flex-col w-full max-w-5xl mx-auto">
        <div className="tracking-[1px] my-[30px] py-[10px] px-5 flex flex-col justify-center items-center">
          <span className="text-text-color font-[300] text-md tracking-[2px] uppercase">
            ON QUESTIONWISE
          </span>
          <h1 className="text-text-color font-[700] text-[32px]">My work</h1>
        </div>

        <div className="w-full md:w-2/3">

          {/* card for questions */}
          <div className="px-5 py-5 rounded-lg shadow-[2px_2px_30px_rgba(0,0,0,0.1)]">
            <div className="flex justify-between items-cente ">
              <div className="flex gap-4 justify-center items-center">
                <div className="">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
                    alt="student"
                    className="w-12 h-12 object-cover object-center rounded-full"
                  />
                </div>
                <div>
                  <div>Kaviru Happuarachchi</div>
                  <div className="flex justify-start items-center gap-2">
                    <div>@ksrx</div>
                    <div>
                      <FaCircle fill="#444444" className="h-1 w-1 opacity-40" />
                    </div>
                    <div className="opacity-40 text-sm">2 days ago</div>
                  </div>
                </div>
              </div>
              <div className="hidden">
                <FaEllipsisV fill="#444444" />
              </div>
            </div>
            <div>
              <div className="flex flex-col mt-5 mb-5">
                <h2 className="font-bold">How to patch KDE on FreeBSD?</h2>
                <p className="mt-5">
                  How to patch KDE on FreeBSD? How to patch KDE on FreeBSD? How
                  to patch KDE on FreeBSD? How to patch KDE on FreeBSD? How to
                  patch KDE on FreeBSD? How to patch KDE on FreeBSD? How to
                  patch KDE on FreeBSD? How to patch KDE on FreeBSD? How to
                  patch KDE on
                </p>
              </div>

              <div className="mb-5">
                Enter the video/ image or code snippet here
              </div>

              <div className="mb-5">Enter the code snippet here</div>
            </div>

            <div className="flex justify-between items-center mx-5">
              <div className="flex gap-1 flex-wrap">
                <button className="bg-[#4584b6] text-white rounded-lg px-3 py-1 text-xs">
                  #Python
                </button>
                <button className="bg-[#ffde57] text-text-color rounded-lg px-3 py-1 text-xs">
                  #JavaScript
                </button>
              </div>
              <div>
                <button className="bg-primary-700 text-white font-[500] flex items-center gap-2 hover:bg-text-color ease-in duration-300 py-2 rounded-xl px-4">
                  View Answer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating */}
      <section className="flex justify-center items-center flex-col w-full max-w-5xl mx-auto">
        <div className="tracking-[1px] my-[30px] py-[10px] px-5 flex flex-col justify-center items-center">
          <span className="text-text-color font-[300] text-md tracking-[2px] uppercase">
            Ratings & Reviews
          </span>
          <h1 className="text-text-color font-[700] text-[32px]">
            Students Says
          </h1>
        </div>

        <div className="flex justify-center items-center flex-wrap">
          {/* Review 01 */}
          <div className="flex justify-center items-center flex-wrap md:w-[50%] w-full">
            <div className="width-[500px] shadow-[2px_2px_30px_rgba(0,0,0,0.1)] bg-white p-5 m-4 cursor-pointer hover:scale-110 transition duration-200 ease-in-out">
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                  <div className=" w-[50px] h-[50px] rounded-[50%] overflow-hidden mr-3">
                    <img
                      src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="person"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h4 className="text-text-color text-[1.1rem] leading-[0.5px] mb-1">
                      Kaviru Happuarachchi
                    </h4>
                    <span className="text-[#979797] text-[0.8rem]">@ksrx</span>
                  </div>
                </div>

                <div className="text-[#f9d71c] flex">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
              </div>

              <div className="client-comment">
                <p className="text-[0.9rem] text-text-color">
                  The review goes here. The review goes here. The review goes.
                  The review goes. The review goes. The review goes. The review
                  goes here. the review giebs here
                </p>
              </div>
            </div>
          </div>

          {/* Review 02 */}
          <div className="flex justify-center items-center flex-wrap md:w-[50%] w-full">
            <div className="width-[500px] shadow-[2px_2px_30px_rgba(0,0,0,0.1)] bg-white p-5 m-4 cursor-pointer">
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                  <div className=" w-[50px] h-[50px] rounded-[50%] overflow-hidden mr-3">
                    <img
                      src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="person"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h4 className="text-text-color text-[1.1rem] leading-[0.5px] mb-1">
                      Kaviru Happuarachchi
                    </h4>
                    <span className="text-[#979797] text-[0.8rem]">@ksrx</span>
                  </div>
                </div>

                <div className="text-[#f9d71c] flex">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
              </div>

              <div className="client-comment">
                <p className="text-[0.9rem] text-text-color">
                  The review goes here. The review goes here. The review goes.
                  The review goes. The review goes. The review goes. The review
                  goes here. the review giebs here
                </p>
              </div>
            </div>
          </div>

          {/* Review 03 */}
          <div className="flex justify-center items-center flex-wrap md:w-[50%] w-full">
            <div className="width-[500px] shadow-[2px_2px_30px_rgba(0,0,0,0.1)] bg-white p-5 m-4 cursor-pointer">
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                  <div className=" w-[50px] h-[50px] rounded-[50%] overflow-hidden mr-3">
                    <img
                      src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="person"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h4 className="text-text-color text-[1.1rem] leading-[0.5px] mb-1">
                      Kaviru Happuarachchi
                    </h4>
                    <span className="text-[#979797] text-[0.8rem]">@ksrx</span>
                  </div>
                </div>

                <div className="text-[#f9d71c] flex">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
              </div>

              <div className="client-comment">
                <p className="text-[0.9rem] text-text-color">
                  The review goes here. The review goes here. The review goes.
                  The review goes. The review goes. The review goes. The review
                  goes here. the review giebs here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
