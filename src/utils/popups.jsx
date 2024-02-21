import React from "react";

const Popup = () => {
  return (
    <div className="absolute -top-10 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
      <button className="absolute -end-1 -top-1 rounded-full border border-gray-300 bg-gray-100 p-1">
        <span className="sr-only">Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className=" flex items-center gap-4 p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle-check text-teal-600"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M9 12l2 2l4 -4" />
        </svg>

        <div className="">
          <p className="font-medium text-gray-900">Done</p>

          <p className="line-clamp-1 text-sm text-gray-500">
            Short link create
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
