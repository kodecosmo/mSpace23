import { FaArrowUp, FaChevronUp, FaCircle, FaEllipsisV, FaLongArrowAltUp } from "react-icons/fa";

const FeedQuestion = (props) => {
  return (
    <div className="px-5 py-5 rounded-lg shadow-[2px_2px_25px_rgba(0,0,0,0.1)]">
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
            <div>{props.name}</div>
            <div className="flex justify-start items-center gap-2">
              <div>@{props.uName}</div>
              <div>
                <FaCircle fill="#444444" className="h-1 w-1 opacity-40" />
              </div>
              <div className="opacity-40 text-sm">{props.date} days ago</div>
            </div>
          </div>
        </div>
        <div className="hidden">
          <FaEllipsisV fill="#444444" />
        </div>
      </div>
      <div>
        <div className="flex flex-col mt-5 mb-5">
          <h2 className="font-bold">{props.questionTitle}</h2>
          <p className="mt-5">{props.questionDescription}</p>
        </div>

        <div className="mb-5">Enter the video/ image or code snippet here</div>

        <div className="mb-5">Enter the code snippet here</div>
      </div>

      <div className="flex justify-between items-center mx-5">
        <div className="flex gap-1 flex-wrap">
          <button className="bg-[#4584b6] text-white rounded-lg px-3 py-1 text-xs">
            {props.tag1}
          </button>
          <button className="bg-[#ffde57] text-text-color rounded-lg px-3 py-1 text-xs">
            {props.tag2}
          </button>
        </div>
        <div>
          <button className="bg-primary-700 text-white font-[500] flex items-center gap-2 hover:bg-text-color ease-in duration-300 py-2 rounded-xl px-4">
            <FaArrowUp fill="#fff" /> Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedQuestion;
