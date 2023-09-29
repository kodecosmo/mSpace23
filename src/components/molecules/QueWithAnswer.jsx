import React from "react";
import CreateMolecule from "@/components/molecules/modals/CreateMolecule";
import TextAtom from "@/components/atoms/modals/TextAtom";
import SelectAtom from "@/components/atoms/modals/SelectAtom";
import TextareaAtom from "@/components/atoms/modals/TextareaAtom";
import SubmitButtonAtom from "@/components/atoms/modals/SubmitButtonAtom";
import OptionAtom from "@/components/atoms/modals/OptionAtom";

const QueWithAnswer = () => {

  // ------------------- request session modal code start -------------------
  const requestSessionModalId = "requestSessionModal";
  const requestSessionModalTitle = "Request a Session";
  // ------------------- request session modal code end -------------------

  return (
    <>

      <section className="All-3-ans flex flex-col items-start mx-auto max-w-6xl w-full justify-center gap-12 py-10">
        <div className="One-ans overflow-hidden flex flex-col justify-start items-start w-full max-w-4xl mx-auto rounded-md">
          <div className="flex flex-col items-start gap-3 border rounded-xl border-text-color w-full">
            <div className="flex flex-col items-start gap-3 m-5 w-full">
              <div className="flex items-center gap-2 w-full">
                <p className="text-sm">0 votes</p>
                <div className="flex py-[2px] px-[5px] justify-center items-center border rounded-sm border-green-400">
                  <p className="text-sm">1 Answer</p>
                </div>
                <p className="text-sm">13 views</p>
              </div>

              <div className="w-full">
                <p className="text-text-color font-semibold text-lg">
                  Error print user.default swift 3
                </p>
              </div>

              <p className="text-sm pr-8">
                I have two screens the first of login and the second shows the
                user information. On the login screen I keep the user_id value in
                user.defaults and when I go to the second screen I use that value
                to ...
              </p>

              <div className="flex items-center justify-between w-full">
                <div className="tags flex items-start gap-2">
                  <div className="flex p-1 justify-center items-center bg-slate-300 rounded-md">
                    <p className="text-sm">IOS</p>
                  </div>
                  <div className="flex p-1 justify-center items-center bg-slate-300 rounded-md">
                    <p className="text-sm">Swift3</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div>
                    <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="profile pic" className=" w-4 h-4" />
                  </div>

                  <p className=" text-sm text-text-color pr-9">
                    BlackNight23
                    <span className=" text-slate-400"> modified 21 mins ago</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Answer 01 */}
          <div className="Que-ans flex items-center w-full gap-4 mx-auto max-w-[800px] mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="137"
              viewBox="0 0 4 137"
              fill="none"
            >
              <path
                d="M0 0H4V135C4 136.105 3.10457 137 2 137V137C0.895431 137 0 136.105 0 135V0Z"
                fill="#C8CCD0"
              />
            </svg>

            <div className="flex flex-col items-start gap-3 w-full my-4 max-w-[600px]">
              <div className="flex items-start gap-3">
                <p className="text-sm">Answer</p>
                <p className="text-sm">4 Votes</p>
                <div className="flex items-start gap-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="15"
                    viewBox="0 0 15 10"
                    fill="#FC8718"
                    className=" h-4 w-4 scale-125"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13 13.0784L10 10.0784H3C1.89543 10.0784 1 9.18294 1 8.07837V3.07837C1 1.9738 1.89543 1.07837 3 1.07837H11C12.1046 1.07837 13 1.9738 13 3.07837V13.0784ZM7.31225 1.7986C7.21506 1.5387 6.84744 1.5387 6.75025 1.7986L5.9783 3.86305C5.93614 3.9758 5.83067 4.05244 5.7104 4.05769L3.50845 4.15391C3.23124 4.16602 3.11763 4.51566 3.33478 4.6884L5.05965 6.06051C5.15385 6.13546 5.19414 6.25945 5.16198 6.37545L4.57304 8.49936C4.4989 8.76675 4.79632 8.98284 5.02771 8.8297L6.86568 7.61326C6.96606 7.54683 7.09644 7.54683 7.19682 7.61326L9.03479 8.8297C9.26618 8.98284 9.5636 8.76675 9.48946 8.49936L8.90052 6.37545C8.86836 6.25945 8.90865 6.13545 9.00285 6.06051L10.7277 4.6884C10.9449 4.51566 10.8313 4.16602 10.554 4.15391L8.3521 4.05769C8.23183 4.05244 8.12636 3.9758 8.0842 3.86305L7.31225 1.7986Z"
                      fill="#F2720C"
                    />
                  </svg>

                  <p className="text-primary-700 text-sm font-medium">
                    Recommended by @ksrx
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm">
                  You are the operator of a junction and you hear a Git branch
                  coming. You have no idea which way it is supposed to go. You
                  stop the train to ask the driver which direction they want. And
                  then you set the switch appropriately...
                </p>
              </div>

              <div className="flex items-start justify-between w-full">
                <p className="text-sm text-blue-500">View full answer</p>
                <div className="flex items-center gap-[6px]">
                  <div>
                    <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="profile pic" className=" w-4 h-4" />
                  </div>

                  <p className=" text-sm text-blue-500 pr-5">
                    Shakthi Abesingha
                    <span className=" text-slate-400"> Answered 4 mins ago</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                data-modal-target={requestSessionModalId}
                data-modal-toggle={requestSessionModalId} 
                className="bg-primary-700 rounded-lg p-2 text-white font-medium text-sm hover:bg-text-color transition duration-200 ease-in-out"
              >
                Request a Session
              </button>
            </div>
          </div>

          {/* Answer 02 */}
          <div className="Que-ans flex items-center w-full gap-4 mx-auto max-w-[800px] mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="137"
              viewBox="0 0 4 137"
              fill="none"
            >
              <path
                d="M0 0H4V135C4 136.105 3.10457 137 2 137V137C0.895431 137 0 136.105 0 135V0Z"
                fill="#C8CCD0"
              />
            </svg>

            <div className="flex flex-col items-start gap-3 w-full my-4 max-w-[600px]">
              <div className="flex items-start gap-3">
                <p className="text-sm">Answer</p>
                <p className="text-sm">4 Votes</p>
                <div className="flex items-start gap-[6px]">
                  <div className="flex flex-col items-start gap-2 rounded-md bg-green-500 px-1">
                    <div className="flex items-center gap-[2px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                      >
                        <path
                          d="M13 3.91L11.59 2.5L5 9.09L2.41 6.5L1 7.91L5 11.91L13 3.91Z"
                          fill="white"
                        />
                      </svg>

                      <p className="text-white text-sm">Accepted Answer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm">
                  You are the operator of a junction and you hear a Git branch
                  coming. You have no idea which way it is supposed to go. You
                  stop the train to ask the driver which direction they want. And
                  then you set the switch appropriately...
                </p>
              </div>

              <div className="flex items-start justify-between w-full">
                <p className="text-sm text-blue-500">View full answer</p>
                <div className="flex items-center gap-[6px]">
                  <div>
                    <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="profile pic" className=" w-4 h-4" />
                  </div>

                  <p className=" text-sm text-blue-500 pr-5">
                    Kaviru Herath
                    <span className=" text-slate-400">Answered 4 mins ago</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <button
                data-modal-target={requestSessionModalId}
                data-modal-toggle={requestSessionModalId} 
                className="bg-primary-700 rounded-lg p-2 text-white font-medium text-sm hover:bg-text-color transition duration-200 ease-in-out"
              >
                Request a Session
              </button>
            </div>
          </div>

        </div>
      </section>

      <section>

        {/* Request Session Modal */}
        <CreateMolecule
          id={requestSessionModalId}
          headerTitle={requestSessionModalTitle}
          fields={
            <form action="#">
              <div className="grid gap-4 mb-4 sm:grid-cols-2">

                <TextAtom
                  type="text"
                  text="Name"
                  name="name"
                  id="name"
                  placeholder="Type product name"
                  required={true}
                />

                <TextAtom
                  type="text"
                  text="Brand"
                  name="brand"
                  id="brand"
                  placeholder="Product brand"
                  required={true}
                />

                <TextAtom
                  type="text"
                  text="Price"
                  name="price"
                  id="price"
                  placeholder="$..."
                  required={true}
                />

                <SelectAtom
                  text="Category"
                  name="category"
                  id="category"
                  required={true}
                  options={<>
                    <OptionAtom disabled={true} text="Select category" />
                    <OptionAtom value="TV" text="TV/Monitors" />
                    <OptionAtom value="PC" text="PC" />
                    <OptionAtom value="GA" text="Gaming/Console" />
                    <OptionAtom value="PH" text="Phones" />
                  </>}
                />


                <TextareaAtom
                  text="Description"
                  name="description"
                  id="description"
                  placeholder="Write product description here"
                  rows={4}
                  required={true}
                />

              </div>

              <SubmitButtonAtom text="Add new Request" />

            </form>
          }
        />
      </section>

    </>
  );
};

export default QueWithAnswer;
