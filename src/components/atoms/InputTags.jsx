import { useState } from "react";

const InputTags = () => {
  const [tags, setTags] = useState([]);

  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;

    if (!value.trim()) return;
    setTags([...tags, value]);

    e.target.value = "";
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !==index))
  }

  return (
    <div className="flex items-center flex-wrap gap-3 border-[1px] p-1 px-2 mt-2 text-gray-500 rounded hover:border-primary focus-within:border-primary">
      {tags.map((tag, index) => (
        <div className=" bg-gray-100 inline-block px-3 py-1 rounded-3xl">
          <span>{tag}</span>
          <span
            key={index}
            className="h-5 w-5 bg-slate-500 font-normal text-white rounded-full inline-flex justify-center ml-2 items-center cursor-pointer"
            onClick={() => removeTag(index)}
          >
            &times;
          </span>
        </div>
      ))}

      <input
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Add a tag"
        className="flex flex-row grow py-2 border-none outline-none ring-0 focus:ring-0 ring-opacity-0 !important"
      />
    </div>
  );
};

export default InputTags;
